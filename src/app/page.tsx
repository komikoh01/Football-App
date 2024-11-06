import MaxWidthWrapper from "../components/MaxWidthWrapper";
import News from "../components/News";
import Fixture from "../components/Fixture";

export default function Home() {
  return (
    <main>
      <section className=" bg-bgUCL bg-contain text-white">
        <MaxWidthWrapper className=" m-auto pt-8 flex flex-col justify-center items-center pb-12 gap-6">
          <div className=" flex flex-col lg:grid lg:grid-cols-3 gap-6 pb-12 pl-8 pr-8 pt-8  ">
            <div className=" h-full col-span-2 overflow-hidden relative border-2 border-white rounded-xl">
              <img
                src="/Champions-League/matches/cbVSbd.webp"
                alt="imagen dinamica"
                className=" w-full h-full  object-cover rounded-xl"
              />
              <div className=" -mt-20 sm:-mt-24 p-4 text-pretty md:-mt-28 lg:-mt-32 xl:-mt-42 tracking-tight">
                <h2 className="   text-sm font-bold text-white sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl tracking-tighter">
                  Bayern makes 9, Madrid suffers but win and Liverpool get 3
                  points at San Siro
                </h2>
              </div>
            </div>

            <div className=" col-span-1 w-full h-full flex flex-col lg:grid-cols-4 lg:bg-bgCLPattern lg:bg-cover border-2 border-white rounded-xl  text-white gap-1">
              <News
                className=" items-center "
                imgSrc="/Champions-League/matches/atalantaVSarsenal.webp"
                alt="atalantaVSarsenal"
                description="Watch Raya's heroic double save"
              />
              <News
                className=" items-center"
                imgSrc="/Champions-League/matches/monacoVSbarcelona.webp"
                alt="monacoVSbarcelona"
                description="Champions League youngest goalscorers"
              />
              <News
                className=" items-center"
                imgSrc="/Champions-League/matches/feyenoordVSleverkusen.webp"
                alt="feyenoordVSleverkusen"
                description="Boniface no-look pass bamboozles Feyenoord"
              />
            </div>
          </div>

          <div className=" m-auto w-full flex flex-col pb-12 pl-8 pr-8 pt-3 sm:pt-4 lg:pt-8 ">
            <h2 className=" font-bold text-white text-2xl sm:text-3xl lg:text-5xl py-4 tracking-tight">Next Fixtures </h2>
            <div className="flex flex-col gap-4">
              <div className=" flex flex-col py-4 gap-6">
                <p className=" w-fit rounded-lg bg-violet-700 p-2 lg:text-xl sm:text-lg text-sm font-semibold tracking-tight border-2 border-white">day.month.year</p>
                <div className=" m-auto sm:m-2 lg:m-4 grid grid-cols-1 gap-3 xl:grid-cols-4 xl:gap-12 lg:grid-cols-3 lg:gap-8 sm:grid-cols-2 sm:gap-4 sm:place-items-center lg:place-items-center place-content-center">
                  <Fixture
                    hour="12:00 pm"
                    team1="Barcelona"
                    team2="Bayern"
                    result1="4"
                    result2="3"
                  />
                  <Fixture
                    hour="12:00 pm"
                    team1="Girona"
                    team2="PSG"
                    result1="1"
                    result2="2"
                  />
                  <Fixture
                    hour="3:00 pm"
                    team1="B.Leverkusen"
                    team2="Milan"
                    result1="2"
                    result2="0"
                  />
                  <Fixture
                    hour="3:00 pm"
                    team1="Real Madrid"
                    team2="Lille"
                    result1="0"
                    result2="1"
                  />
                </div>
              </div>
              <div className=" flex flex-col py-4 gap-6">
                <p className=" w-fit rounded-lg bg-violet-700 p-2 text-xl font-semibold tracking-tight border-2 border-white">day.month.year</p>
                <div className=" m-auto sm:m-2 lg:m-4 grid grid-cols-1 gap-3 xl:grid-cols-4 xl:gap-12 lg:grid-cols-3 lg:gap-8 sm:grid-cols-2 sm:gap-4 sm:place-items-center lg:place-items-center  place-content-center ">
                  <Fixture
                    hour="12:00 pm"
                    team1="M.City"
                    team2="Leipzig"
                    result1="4"
                    result2="2"
                  />
                  <Fixture
                    hour="12:00 pm"
                    team1="Internazionale"
                    team2="Feyenoord"
                    result1="2"
                    result2="1"
                  />
                  <Fixture
                    hour="3:00 pm"
                    team1="Liverpool"
                    team2="Bologna"
                    result1="3"
                    result2="1"
                  />
                  <Fixture
                    hour="3:00 pm"
                    team1="A.Madrid"
                    team2="Benfica"
                    result1="0"
                    result2="3"
                  />
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
