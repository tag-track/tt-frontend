import {Carousel, CarouselApi, CarouselContent, CarouselNext, CarouselPrevious} from "~/components/ui/carousel";
import {useEffect, useState} from "react";
import {range} from "~/utils/range";
import {ArchiveX} from "lucide-react";
import {useIsMobile} from "~/hooks/use-mobile";


export function ImageCarousel(
  {
    images,
  }:{
    images: string[]
  }
) {

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const isMobile = useIsMobile()

  useEffect(()=>{
    if(!api){
      return
    }

    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })

  }, [api])

  return(
    <Carousel className={`rounded overflow-hidden aspect-square relative group`} setApi={setApi}>
      <CarouselContent>
        {images.map(i => {
          return(
            <img className={`
            object-cover aspect-square w-full first:rounded-l last:rounded-r 
            ${images}
            `} src={i} key={i} alt={""}/>
          )
        })}

        {images.length == 0 &&
            <div className={`
            aspect-square bg-zinc-400 flex flex-col justify-center items-center text-zinc-200
            w-full rounded
            `}>
                <ArchiveX size={128}/>
            </div>
        }
      </CarouselContent>

      <div className={`
      absolute bottom-2 left-0 right-0
      flex flex-col justify-center items-center
      pointer-events-none
      `}>
        <div className={`
        rounded-full bg-zinc-950 bg-opacity-45
        flex flex-row justify-center items-center gap-1
        p-1
        ${images.length<=1?"hidden":""}
        `}>
          {
            range(images.length).map(n => {
              return(
                <div key={n} className={`
                transition-opacity
                w-1 h-1
                md:w-1.5 md:h-1.5
                rounded-full bg-white
                ${n==current?"":"opacity-50"}
                `} />
              )
            })
          }
        </div>
      </div>
      {
        !isMobile&&images.length>1&&
        <>
          <CarouselPrevious className={`
          absolute left-3
          transition-opacity
          `}/>
          <CarouselNext className={`
          absolute right-3
          transition-opacity
          `}/>
        </>
      }
    </Carousel>
  )
}