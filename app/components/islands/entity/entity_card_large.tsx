import {EntityType} from "~/models/entity.type";
import {Card} from "~/components/ui/card";
import {parseAndFormatDateTime} from "~/utils/parse_and_format_date_time";
import {Button} from "~/components/ui/button";
import {ImageCarousel} from "~/components/ui/image_carousel";



function NameGroup(
  {
    name,
    text
  }:{
    name: string,
    text: string
  }
) {

  return (

    <div className={`flex flex-col justify-start items-start`}>
      <span className={`text-sm opacity-65`}>{name}</span>
      <span>{text}</span>
    </div>

  )
}



function NameDateGroup(
  {
    name,
    date,
    relativeTime=false
  }:{
    name: string,
    date: string,
    relativeTime?:boolean
  }
) {

  const {formatted, relative} = parseAndFormatDateTime(date)
  const text = relativeTime?relative:formatted

  return <NameGroup name={name} text={text} />


}


export function EntityCardLarge(
  {
    entity
  }:{
    entity:EntityType
  }
) {

  return(
    <div className={`
    flex flex-col justify-start items-stretch
    gap-y-4
    `}>
      <div className={`

      `}>
        <ImageCarousel images={entity.images} />
      </div>

      <div className={`
      grid grid-cols-2 gap-4 px-8 md:px-2
      `}>
        <NameDateGroup name={"Created"} date={entity.created_at}/>
        <NameDateGroup name={"Updated"} date={entity.updated_at} relativeTime={true}/>
        <NameGroup name={"Children"} text={`${entity.children?.length}`}/>
      </div>

      <div className={`
      grid grid-cols-2 gap-x-1 gap-y-2 p-2 md:p-0
      `}>
        <Button variant={"outline"}>Edit details</Button>
        <Button variant={"outline"}>Add children</Button>
        <Button variant={"default"} className={`col-span-2`}>View</Button>
      </div>


    </div>
  )

}