"use client";

import { type TablePosition } from "@/src/types/apiFutbolTable";
import { useState } from "react";
import MaxWidthWrapper from "@/src/components/MaxWidthWrapper";
import PositionTable from "@/src/components/StatictsComponents/PositionTable";
import { currentPositionTable } from "@/src/services/positionTable";
import LeagueSelect from "@/src/components/ui/LeagueSelect";

function Staticts() {
  const [currentSelect, setCurrentSelect] = useState(false);
  const [tableData, setTableData] = useState<TablePosition[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  async function getTablePositions(leagueID: string) {
    setLoading(true);
    const { currentTable, error } = await currentPositionTable(leagueID);
    if (error) {
      setError(error);
    } else {
      setTableData(currentTable);
    }
    setLoading(false);
  }

  const handleSelect = (value: boolean) => {
    setCurrentSelect(value);
  };

  return (
    <main className=" bg-bgPLPattern3">
      <MaxWidthWrapper className=" pt-8 px-8 max-w-screen-xl m-auto">
        <div className=" flex flex-col gap-3 p-5">
          <h2 className=" text-2xl text-white font-semibold">Menu</h2>
          <div className=" flex gap-8 text-white text-xl">
            <button
              onClick={() => handleSelect(false)}
              className={currentSelect ? " " : "border-b-2 border-white"}
            >
              Table
            </button>
            <button
              onClick={() => handleSelect(true)}
              className=" focus:border-b-2 focus:border-white"
            >
              Sofascore
            </button>
          </div>
        </div>

        <div className=" h-1 bg-white w-full"></div>

        {!currentSelect ? (
          <>
            <div className=" mx-auto w-full text-center px-8 py-4">
              <LeagueSelect onLeagueSelect={getTablePositions} />
            </div>

            {error ? (
              <h2 className="text-3xl text-red-500 font-bold py-10 px-4">
                {error}
              </h2>
            ) : loading ? (
              /* Mostrar loading solo si estamos obteniendo datos */
              <h2 className="text-4xl text-white px-8 py-12 font-extrabold">
                Loading...
              </h2>
            ) : 
              <PositionTable
                className="flex justify-center items-center m-auto w-full py-10 px-4"
                table={tableData}
              />
          }
          </>
        ) : (
          <h3 className="w-full text-white font-bold text-lg py-8">
            Player Positions
          </h3>
        )}
      </MaxWidthWrapper>
    </main>
  );
}

export default Staticts;
