import { getMatches } from "@/services/matches"


async function DayEvent () {
  const { currentMatches , error }  = await getMatches()
  
 return (
  <h1> hola</h1>
 )
}

export default DayEvent