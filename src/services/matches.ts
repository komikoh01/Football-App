import axios from "axios"
import { getTimeZone } from "./time"

const championsDay = {
  one: 'Tuesday',
  two: 'Wednesday',
  three: 'Thursday',
}

interface newURL {
  correctURL: string | null 
}

async function dynamicURL (): Promise<newURL> {
  const { year, month, day } = await getTimeZone()

  const newDay = Number(day) >= 1 && Number(day) <= 9 ? `0${day}` : String(day)
  const newMonth = Number(month) >= 1 && Number(month) <= 9 ? `0${month}` : String(month)
  const newYear = String(year)

  if ( typeof newYear=== 'string') {
    const date = `${year}-${newMonth}-${newDay}`
    const correctURL = `https://www.thesportsdb.com/api/v1/json/3/searchfilename.php?e=UEFA_Champions_League_${date}`
    return { correctURL }
  }else {
    return {correctURL: null}
  }
}

interface MatchData {
  currentMatches: Array<T> | null
  error: string | null
}

export async function getMatches () : Promise<MatchData> {
  const { weekDay } = await getTimeZone()
  const { correctURL } = await dynamicURL()

  if(weekDay && weekDay === championsDay.one || weekDay === championsDay.two || weekDay === championsDay.three) {
    if ( typeof correctURL === 'string') {
      try {
        const res = await axios.get(correctURL)
        const currentMatches = res.data
        return {currentMatches, error: null}
      }catch (error: unknown) {
        if (error instanceof Error){
          console.error('Error fetching matches:', error.message);
          return { currentMatches: null, error: error.message };
        }else {
          console.error('An unknown error occurred fetching matches');
          return { currentMatches: null, error: 'An unknown error occurred fetching matches' };
        }
      }
    }else{
      return { currentMatches: null, error: 'Failed to obtanin de URL' };
    }
  }else{
    return { currentMatches: null, error: 'There is no matches today'}
  }
  
}