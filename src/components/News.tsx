import { cn } from "../lib/utils"
import { HTMLAttributes } from "react"

interface NewsProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string
  alt: string
  description: string
}

function News ({ imgSrc, alt, description, className, ...props  }: NewsProps) {
  return (
    <div className={cn(
      " flex justify-center p-2 rounded-lg border-b-2 border-white lg:border-2 lg:border-x-transparent lg:border-y-white", 
      className)}
      {...props}>
      <div className=" w-3/5 p-2 md:shrink-0 sm:shrink-0 ">
        <img src={imgSrc} alt={alt} className=" w-full h-full rounded-lg" />
      </div>
      <p className=" w-2/5 md:shrink sm:shrink lg:text-lg xl:text-xl md:text-3xl sm:text-2xl text-base tracking-tighter font-bold text-center decoration-white text-pretty underline">{description}</p>
    </div>
  )
}

export default News 