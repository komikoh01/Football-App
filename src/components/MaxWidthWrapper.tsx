import { cn } from "../lib/utils";
import { ReactNode } from "react";

function MaxWidthWrapper ( 
  { className, children }
  :
  {className?: string, children: ReactNode}
){
  return (
    <div className={cn('w-full h-full max-w-screen-2xl ',
      className)
    }> 
      {children} 
    </div>
  )
}

export default MaxWidthWrapper