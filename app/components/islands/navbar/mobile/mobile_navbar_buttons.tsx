import {ReactNode} from "react";
import {Link} from "@remix-run/react";


export function MobileNavbarButton(
  {
    children,
    target="/",
  }:{
    children: ReactNode,
    target?:string
  }
){

  return(
    <Link to={target}>
      <div className={`p-2 aspect-square`}>
        {children}
      </div>
    </Link>
  )

}