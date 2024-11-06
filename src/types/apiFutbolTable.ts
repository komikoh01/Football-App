// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Welcome {
    table: TablePosition[];
}

export interface TablePosition {
    idStanding:        string;
    intRank:           string;
    idTeam:            string;
    strTeam:           string;
    strBadge:          string;
    idLeague:          string;
    strLeague:         StrLeague;
    strSeason:         StrSeason;
    strForm:           string;
    strDescription:    StrDescription;
    intPlayed:         string;
    intWin:            string;
    intLoss:           string;
    intDraw:           string;
    intGoalsFor:       string;
    intGoalsAgainst:   string;
    intGoalDifference: string;
    intPoints:         string;
    dateUpdated:       Date;
}

export enum StrDescription {
    ChampionsLeague = "Champions League",
    Empty = "",
    Relegation = "Relegation",
    UEFAEuropaLeague = "UEFA Europa League",
}

export enum StrLeague {
    EnglishPremierLeague = "English Premier League",
}

export enum StrSeason {
    The20242025 = "2024-2025",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toWelcome(json: string): Welcome {
        return cast(JSON.parse(json), r("Welcome"));
    }

    public static welcomeToJson(value: Welcome): string {
        return JSON.stringify(uncast(value, r("Welcome")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Welcome": o([
        { json: "table", js: "table", typ: a(r("Table")) },
    ], false),
    "Table": o([
        { json: "idStanding", js: "idStanding", typ: "" },
        { json: "intRank", js: "intRank", typ: "" },
        { json: "idTeam", js: "idTeam", typ: "" },
        { json: "strTeam", js: "strTeam", typ: "" },
        { json: "strBadge", js: "strBadge", typ: "" },
        { json: "idLeague", js: "idLeague", typ: "" },
        { json: "strLeague", js: "strLeague", typ: r("StrLeague") },
        { json: "strSeason", js: "strSeason", typ: r("StrSeason") },
        { json: "strForm", js: "strForm", typ: "" },
        { json: "strDescription", js: "strDescription", typ: r("StrDescription") },
        { json: "intPlayed", js: "intPlayed", typ: "" },
        { json: "intWin", js: "intWin", typ: "" },
        { json: "intLoss", js: "intLoss", typ: "" },
        { json: "intDraw", js: "intDraw", typ: "" },
        { json: "intGoalsFor", js: "intGoalsFor", typ: "" },
        { json: "intGoalsAgainst", js: "intGoalsAgainst", typ: "" },
        { json: "intGoalDifference", js: "intGoalDifference", typ: "" },
        { json: "intPoints", js: "intPoints", typ: "" },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
    ], false),
    "StrDescription": [
        "Champions League",
        "",
        "Relegation",
        "UEFA Europa League",
    ],
    "StrLeague": [
        "English Premier League",
    ],
    "StrSeason": [
        "2024-2025",
    ],
};
