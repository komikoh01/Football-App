import { type TablePosition } from "@/src/types/apiFutbolTable";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../shadcnComponents/table";
import { cn } from "@/src/lib/utils";

interface positionTableProps {
  table: TablePosition[] | null;
  className: string;
}

function PositionTable({ table, className }: positionTableProps) {

  return (
    <section className={cn(" pt-3 px-3", className)}>
      

      <div className=" py-5">
        <Table className=" m-auto w-[1000px] pt-6">
          <TableHeader>
            <TableRow className=" text-2xl ">
              <TableHead className=" text-slate-400 font-semibold text-center ">
                #
              </TableHead>
              <TableHead className=" text-slate-400 font-semibold pl-12">
                Team
              </TableHead>
              <TableHead className=" text-slate-400 font-semibold text-center ">
                P
              </TableHead>
              <TableHead className=" text-slate-400 font-semibold text-center ">
                W
              </TableHead>
              <TableHead className=" text-slate-400 font-semibold text-center ">
                D
              </TableHead>
              <TableHead className=" text-slate-400 font-semibold text-center ">
                L
              </TableHead>
              <TableHead className=" text-slate-400 font-semibold text-center ">
                Goals
              </TableHead>
              <TableHead className=" text-slate-400 font-semibold text-center ">
                GD
              </TableHead>
              <TableHead className=" text-slate-400 font-semibold text-center ">
                Points
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {table?.map((t) => (
              <TableRow
                key={t.idTeam}
                className=" text-xl text-white font-semibold text-center"
              >
                <TableCell>{t.intRank}</TableCell>
                <TableCell className=" flex items-center gap-2">
                  <img
                    src={t.strBadge}
                    alt={`${t.strTeam} image`}
                    className=" text-sm"
                    width={40}
                    height={40}
                  />
                  {t.strTeam}
                </TableCell>
                <TableCell>{t.intPlayed}</TableCell>
                <TableCell>{t.intWin}</TableCell>
                <TableCell>{t.intDraw}</TableCell>
                <TableCell>{t.intLoss}</TableCell>
                <TableCell>
                  {t.intGoalsFor} : {t.intGoalsAgainst}
                </TableCell>
                <TableCell>{t.intGoalDifference}</TableCell>
                <TableCell>{t.intPoints}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}

export default PositionTable;
