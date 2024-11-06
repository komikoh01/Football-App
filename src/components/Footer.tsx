import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";

function Footer() {
  return (
    <footer className=" bg-bgPLPattern bg-cover">
      <MaxWidthWrapper className=" text-white max-w-screen-xl border-t-4 border-white m-auto p-7">
        <section className=" grid grid-cols-5 gap-3 p-7 h-[230px]">
          <div className=" pt-4">
            <div className=" w-24 h-24 flex justify-center items-center gap-2 text-2xl font-semibold">
              <span>Next</span>
              <img src="/Futbol-logo.png" alt="futbol logo" className="w-full h-full object-cover" />
              <span>Futbol</span>
            </div>
          </div>
          <div className=" flex flex-col gap-2 text-sm  font-semibold pl-3">
            <Link href="/">Matches</Link>
            <Link href="/">Table</Link>
            <Link href="/">Video</Link>
            <Link href="/">Gaming</Link>
            <Link href="/">Stats</Link>
          </div>
          <div className=" flex flex-col border-r-2 border-white gap-2 text-sm  font-semibold">
            <Link href="/">Teams</Link>
            <Link href="/">New format</Link>
            <Link href="/">News</Link>
            <Link href="/">History</Link>
            <Link href="/">About</Link>
            <Link href="/">Store</Link>
          </div>
          <div className=" flex flex-col gap-2 pl-3 border-r-2 border-white">
            <p className=" text-lg font-bold">ALSO VISIT</p>
            <Link href="/" className=" text-sm font-semibold ">
              UEFA.com
            </Link>
            <Link href="/" className=" text-sm font-semibold ">
              UEFA Foundation
            </Link>
          </div>

          <div className=" flex flex-col gap-2 pl-3 ">
            <p className=" text-lg font-bold">CHANGE LANGUAGE</p>
            <Link href="/" className=" text-sm font-semibold ">
              English
            </Link>
            <Link href="/" className=" text-sm font-semibold ">
              Français
            </Link>
            <Link href="/" className=" text-sm font-semibold ">
              Deutsch
            </Link>
            <Link href="/" className=" text-sm font-semibold ">
              Русский
            </Link>
            <Link href="/" className=" text-sm font-semibold ">
              Español
            </Link>
            <Link href="/" className=" text-sm font-semibold ">
              Italiano
            </Link>
            <Link href="/" className=" text-sm font-semibold ">
              Português
            </Link>
          </div>
        </section>
      </MaxWidthWrapper>
      <MaxWidthWrapper className=" text-white m-auto p-8 pt-24">
        <section className=" flex flex-col">
          <div className=" flex justify-between w-full">
            <div className=" flex gap-4 items-center">
              <label className=" pr-2 text-lg font-semibold">Follow us on</label>
              <Link href="https://"><Image src="/Social-Media/X.png" alt="twitter" width={50} height={50} /></Link>
              <Link href="https://"><Image src="/Social-Media/Facebook.png" alt="facebook" width={50} height={50} /></Link>
              <Link href="https://"><Image src="/Social-Media/Youtube.png" alt="youtube" width={80} height={80} /></Link>
              <Link href="https://"><Image src="/Social-Media/Instagram.png" alt="instagram" width={50} height={50} /></Link>
            </div>
            <div className=" flex justify-center items-center gap-5">
              <Link href="/"><Image src="/Social-Media/AppStore.png" alt="App Store" width={170} height={70}/></Link>
              <Link href="/"><Image src="/Social-Media/GooglePlay.png" alt="Google Play" width={200} height={70}/></Link>
            </div>
          </div>

          <div className=" flex gap-12 items-center pt-36 mx-auto text-md font-semibold">
            <Link href="https://">Privacy</Link>
            <Link href="https://">Terms and conditions</Link>
            <Link href="https://">Cookie policy</Link>
          </div>

          <div className=" flex flex-col gap-4 items-center pt-14 mx-auto text-pretty tracking-tight text-center text-slate-400 font-medium">
            <p>© 1998-2024 UEFA. All rights reserved.</p>
            <p className=" w-[1000px]">
              The UEFA word, the UEFA logo and all marks related to UEFA
              competitions, are protected by trademarks and/or copyright of
              UEFA. No use for commercial purposes may be made of such
              trademarks. Use of UEFA.com signifies your agreement to the Terms
              and Conditions and Privacy Policy.
            </p>
          </div>
        </section>
      </MaxWidthWrapper>
    </footer>
  );
}

export default Footer;
