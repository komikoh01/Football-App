"use client";

import { Calendar, Sheet, Trophy, UsersIcon } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavSelect from "./ui/NavSelect";
import { useEffect, useState } from "react";

const screenRender = (width: number | undefined) => {
  if (width) {
    if (width > 1024) {
      return (
        <>
          <Link href="/Staticts" className=" flex gap-1">
            <Sheet />
            Staticts
          </Link>
          <Link href="/Matches" className=" flex gap-1">
            <Calendar />
            Matches
          </Link>
          <Link href="/Players" className=" flex gap-1">
            <UsersIcon />
            Players
          </Link>
          <Link href="/Competitions" className=" flex gap-1">
            <Trophy />
            Competitions
          </Link>
        </>
      );
    } else if (width > 820 && width <= 1024) {
      return (
        <>
          <Link href="/Staticts" className=" flex gap-1">
            <Sheet />
            Staticts
          </Link>
          <Link href="/Matches" className=" flex gap-1">
            <Calendar />
            Matches
          </Link>
          <NavSelect screenWidth={width} />
        </>
      );
    } else if ( width > 620 && width <= 820 ) {
        return (
          <>
            <Link href="/Staticts" className=" flex gap-1">
              <Sheet />
              Staticts
            </Link>
            <NavSelect screenWidth={width} />
          </>
        ) 
      }else {
        return (
          <>
            <NavSelect screenWidth={width} />
          </>
        ) 
      }
  }
};

function NavBar() {
  const [resolution, setResolution] = useState(0);

  useEffect(() => {
    setResolution(window.innerWidth);

    const handleResize = () => {
      setResolution(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className=" sticky top-0 z-50 antialiased w-full bg-violet-700 text-white">
      <section className=" flex w-full max-w-screen-2xl h-14">
        <div className=" w-1/2 bg-championsPattern bg-cover flex items-center justify-center border-r-2 border-white">
          <div className=" p-2 w-28">
            <img
              src="/Champions-League/champions-league.webp"
              alt="UCL logo"
              className=" w-full h-full object-cover text-white"
            />
          </div>
          <h2 className=" md:text-lg sm:text-lg text-lg text-center lg:text-xl font-bold text-pretty tracking-widest pr-1">
            <span className=" tracking-tight text-slate-200">
              Champions League
            </span>
          </h2>
        </div>

        <div className=" w-1/2 bg-premierPattern bg-cover flex items-center justify-center border-l-2 border-white">
          <div className=" p-1 w-20">
            <img
              src="/Premier-League/premier-league.webp"
              alt="PL logo"
              className=" w-full h-full bg-cover"
            />
          </div>
          <h2 className=" text-xl font-bold text-pretty tracking-widest gap-2 ">
            <span className=" tracking-tight text-purple-950 ">
              Premier League
            </span>
          </h2>
        </div>
      </section>
      <MaxWidthWrapper className=" m-auto max-w-screen-xl ">
        <section className=" flex h-24 justify-between items-center py-1 px-3 bg-violet-700 text-xl font-medium border-b-4 border-white ">
          <div className=" w-1/4 rounded-md text-center m-auto ">
            <div className=" w-14 h-14 sm:w-14 sm:h-14 lg:w-20 lg:h-20 sm:ml-14 lg:ml-20 m-auto font-semibold">
              <Link href='/' className=" flex justify-center items-center gap-1 ">
                <span className=" hidden sm:block text-md sm:text-xl lg:text-2xl">Next</span>
                <img src="/Futbol-logo.png" alt="futbol logo" className=" w-full h-full object-cover" />
                <span className=" hidden sm:block text-md sm:text-xl lg:text-2xl">Futbol</span>
              </Link>
            </div> 
          </div>
          <div className=" w-3/4 flex p-2 gap-20 justify-end items-center font-semibold">
            <div className=" hidden xl:block w-1 h-8 bg-white"></div>
            {screenRender(resolution)}
          </div>
        </section>
      </MaxWidthWrapper>
    </nav>
  );
}

export default NavBar;
