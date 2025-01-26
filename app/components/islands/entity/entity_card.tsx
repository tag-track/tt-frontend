import {EntityType} from "~/models/entity.type";
import {Card} from "~/components/ui/card";
import {Button} from "~/components/ui/button";
import {Separator} from "~/components/ui/separator";
import {ArchiveX, Package} from "lucide-react";
import {ResponsiveDialog} from "~/components/wrapper/responsive_dialog";
import {EntityCardLarge} from "~/components/islands/entity/entity_card_large";


export function EntityCard(
  {
    entity
  }:{
    entity:EntityType
  }
) {

  return(
    <div className={`
    w-full overflow-clip max-w-prose
    rounded-xl bg-white
    shadow
    `}>

      <div className={`
      flex flex-row 
      justify-start items-stretch
      `}>
        <div className={`
        max-w-[6rem] md:max-w-[9rem]
        relative
        w-full
        `}>
          {entity.images.length>0 &&
            <img src={`${entity.images[0]}`} alt="" className={`
            object-cover
            aspect-[3/4]
            md:aspect-square
            w-full
            ${entity.images.length > 0 ? "" : "hidden"}
            `}/>
          }
          <div className={`
          bg-zinc-400 text-zinc-200 h-full flex flex-col justify-center items-center 
          aspect-[3/4]
          md:aspect-square
          ${entity.images.length > 0 ? "hidden" : ""}
          `}>
            <ArchiveX size={40}/>
          </div>
        </div>


        <div className={`
        flex flex-col justify-between items-start
        p-2 md:px-6 md:py-4 md:pb-2
        w-full
        `}>

          <div className={`flex-1`}>
            <h2 className={`
            text-base font-normal
            md:text-xl md:font-medium
            line-clamp-1 text-ellipsis
            `}>{entity.name}</h2>
            <p className={`
            text-sm font-light 
            md:text-base md:font-normal 
            opacity-65
            line-clamp-2 text-ellipsis
            `}>{entity.description}</p>
          </div>

          <div className={`
          h-full w-full
          flex flex-col justify-end items-start
          `}>
            <Separator />

            <div className={`
            flex flex-row justify-between items-center
            w-full mt-2
            [&>span]:opacity-65 [&>span]:mx-auto
            `}>

              <span className={`flex flex-row justify-center items-center gap-1 text-sm`}>
                {entity.children?.length} <Package size={14}/>
              </span>

              <Separator orientation={"vertical"}/>

              <span className={``}>
                <ResponsiveDialog title={entity.name} description={entity.description} trigger={<Button variant={"link"} size={"base"}>Details</Button>}>
                  <EntityCardLarge entity={entity} />
                </ResponsiveDialog>
              </span>

              <Separator orientation={"vertical"}/>

              <span className={``}>
                <Button variant={"link"} size={"base"} className={``}>Edit</Button>
              </span>
            </div>

          </div>


        </div>
      </div>
    </div>
  )

}