import { Calendar, Sheet, Trophy, UsersIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "../shadcnComponents/select";
import Link from "next/link";

interface NavSelect {
  screenWidth: number;
}

function NavSelect ({ screenWidth }: NavSelect) {
  return (
    <Select>
      <SelectTrigger className=" w-[150px] sm:w-[170px] lg:w-[200px] p-2 font-semibold text-xl">
        <SelectValue placeholder="More" className=" text-white" />
      </SelectTrigger>
      <SelectContent className=" bg-violet-700 text-white gap-4">
        {screenWidth > 820 && screenWidth <= 1024 ? (
          <SelectGroup className=" flex flex-col text-xl font-semibold gap-3 ">
            <Link
              href="/Players"
              className=" w-full flex gap-3 text-center  items-center hover:bg-white hover:rounded-sm hover:text-black"
            >
              <UsersIcon />
              Players
            </Link>
            <Link
              href="/Competitions"
              className=" w-full flex gap-3 text-center items-center hover:bg-white hover:rounded-sm hover:text-black"
            >
              <Trophy />
              Competitions
            </Link>
          </SelectGroup>
        ) : screenWidth > 620 && screenWidth <= 820 ? (
          <SelectGroup className=" flex flex-col text-xl font-semibold gap-3">
            <Link
              href="/Matches"
              className=" w-full flex gap-3 text-center items-center hover:bg-white hover:rounded-sm hover:text-black"
            >
              <Calendar />
              Matches
            </Link>

            <Link
              href="/Players"
              className=" w-full flex gap-3 text-center items-center hover:bg-white hover:rounded-sm hover:text-black"
            >
              <UsersIcon />
              Players
            </Link>

            <Link
              href="/Competitions"
              className=" w-full flex gap-3 text-center items-center hover:bg-white hover:rounded-sm hover:text-black"
            >
              <Trophy />
              Competitions
            </Link>
          </SelectGroup>
        ) : (
          <SelectGroup className=" flex flex-col text-xl font-semibold gap-3">
            <Link
              href="/Staticts"
              className=" w-full flex gap-3 text-center items-center hover:bg-white hover:rounded-sm hover:text-black"
            >
              <Sheet />
              Staticts
            </Link>
            <Link
              href="/Matches"
              className=" w-full flex gap-3 text-center items-center hover:bg-white hover:rounded-sm hover:text-black"
            >
              <Calendar />
              Matches
            </Link>

            <Link
              href="/Players"
              className=" w-full flex gap-3 text-center items-center hover:bg-white hover:rounded-sm hover:text-black"
            >
              <UsersIcon />
              Players
            </Link>

            <Link
              href="/Competitions"
              className=" w-full flex gap-3 text-center items-center hover:bg-white hover:rounded-sm hover:text-black"
            >
              <Trophy />
              Competitions
            </Link>
          </SelectGroup>
        )}
      </SelectContent>
    </Select>
  );
}

export default NavSelect;
