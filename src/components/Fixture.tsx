'use client'

interface FixtureProps {
    hour: string
    team1: string
    team2: string
    result1: string
    result2: string
}

function Fixture ( { hour, team1, team2, result1, result2}: FixtureProps ) {
  return (
    <li className=" w-[300px] sm:w-[250px] lg:w-[300px] h-24 list-none flex gap-4 items-center px-5 py-3 bg-blue-800 rounded-lg backdrop-blur-lg">
      <span className=" font-semibold">{hour}</span>
      <div className=" w-px h-12 bg-white"></div>
      <div className=" flex w-full justify-between">
        <div className=" flex flex-col gap-1">
          <span className=" tracking-tight">{team1}</span>
          <span className=" tracking-tight">{team2}</span>
        </div>
        <div className=" flex flex-col gap-1">
          <span className=" font-semibold">{result1}</span>
          <span className=" font-semibold">{result2}</span>
        </div>
      </div>
    </li>
  );
}

export default Fixture;
