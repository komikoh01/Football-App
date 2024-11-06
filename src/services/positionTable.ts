import axios from "axios";
import { type TablePosition } from "../types/apiFutbolTable";

interface CurrentPositionTableData {
  currentTable: TablePosition[] | null
  error: string | null
}

export async function currentPositionTable(leagueID: string): Promise<CurrentPositionTableData> {
    try {
      const res = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=${leagueID}&s=2024-2025`)
      const currentTable: TablePosition[] = res.data.table
      console.log(currentTable)
      return {currentTable, error: null}
    }catch ( error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching Table of position: ', error.message)
        return { currentTable: null, error: error.message } 
      }else{
        console.error('An unknown error has ocurred fetching table positions')
        return {currentTable: null, error: 'An unknown error has ocurred fetching table positions'}
      }
    }
}