import {ReactNode, useEffect, useState} from "react";
import {useMeasureHeight} from "~/hooks/use-measure-height";
import {MobileNavbarButton} from "~/components/islands/navbar/mobile/mobile_navbar_buttons";
import {House, PackagePlus, PackageSearch} from "lucide-react";


function ActualMobileNavbar(
  {
    updateHeight=()=>{}
  }:{
    updateHeight?:(h: number)=>void
  }
){

  const {ref, height} = useMeasureHeight<HTMLDivElement>()

  useEffect(()=>{
    updateHeight(height)
  },[height, updateHeight])



  return (
    <div ref={ref} className={`
    fixed bottom-0 z-10
    w-full
    py-2
    bg-white shadow border-t border-t-zinc-200
    text-white
    flex flex-row justify-around items-center
    `}>
      <MobileNavbarButton target={"/"}>
        <House className={`text-zinc-500`} size={28} strokeWidth={1.5} />
      </MobileNavbarButton>
      <MobileNavbarButton target={"/create"}>
        <PackagePlus className={`text-zinc-500`} size={28} strokeWidth={1.5}/>
      </MobileNavbarButton>
      <MobileNavbarButton target={"/search"}>
        <PackageSearch className={`text-zinc-500`} size={28} strokeWidth={1.5}/>
      </MobileNavbarButton>
    </div>
  )
}

export function MobileNavbar(
  {
    children
  }:{
    children:ReactNode
  }
){

  const [navbarHeight, setNavBarHeight] = useState<number>(0)


  return(
    <div style={{paddingBottom:`${navbarHeight}px`}} className={`
    w-full relative
    `}>
      {children}
      <ActualMobileNavbar updateHeight={setNavBarHeight}/>
    </div>
  )
}