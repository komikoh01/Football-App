import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "../shadcnComponents/select";
import { leagues } from "@/src/data/staticData";

interface LeagueSelectProps {
  onLeagueSelect: (leagueID: string) => void
}

function LeagueSelect ( { onLeagueSelect }: LeagueSelectProps  ) {
  return (
    <Select onValueChange={
      (value) => { 
        onLeagueSelect(value)}
    }>
      <SelectTrigger className="border-none text-white w-[150px] sm:w-[170px] lg:w-[200px] p-2 font-semibold text-lg">
        <SelectValue placeholder="Select a League" />
      </SelectTrigger>
      <SelectContent className=" bg-pink-700 text-white gap-4">
        <SelectGroup className=" flex flex-col text-xl font-semibold gap-3 ">
          {leagues.map(league => (
            <SelectItem 
              key={league.id} 
              value={league.id}
              className=" text-lg"
              >
              {league.league}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default LeagueSelect;
