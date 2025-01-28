import {useIsMobile} from "~/hooks/use-mobile";
import {MobileNavbar} from "~/components/islands/navbar/mobile/mobile_navbar";
import {DesktopNavbar} from "~/components/islands/navbar/desktop_navbar";
import {ReactNode} from "react";


export function NavbarLayout(
  {
    children
  }:{
    children:ReactNode
  }
){

  const isMobile = useIsMobile()

  if(isMobile){
    return <MobileNavbar>{children}</MobileNavbar>
  }

  return(
    <DesktopNavbar>{children}</DesktopNavbar>
  )
}