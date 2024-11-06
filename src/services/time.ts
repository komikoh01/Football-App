import axios from "axios"

const timeURL = 'https://timeapi.io/api/time/current/zone?timeZone=Cuba'

interface Time {
  weekDay: string | null
  year: string | null 
  month: string | null 
  day: string | null 
  error: string | null
}

export async function getTimeZone () : Promise<Time> {
  try {
    const res = await axios.get(timeURL)
    const time = res.data
    const weekDay = time.dayOfWeek
    const year = time.year
    const month = time.month
    const day = time.day
    return {weekDay, year, month, day , error: null}
  }catch(error: unknown){
    if ( error instanceof Error) {
      console.error('Error fetching time zone: ',  error.message)
      return {weekDay: null, year: null, month: null, day: null , error: error.message}
    }else {
      console.error('An unknown errror occurred: ')
      return {weekDay: null, year: null, month: null, day: null , error: 'Unknown error occurred'}
    }
  }
}