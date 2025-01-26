import {ReactNode, useState} from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "~/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "~/components/ui/dialog";
import {useIsMobile} from "~/hooks/use-mobile";





export function ResponsiveDialog(
  {
    title,
    description,
    trigger,
    children,
  }:{
    title:string
    description:string
    trigger:ReactNode
    children?:ReactNode
  }
){

  const [open, setOpen] = useState<boolean>(false)
  const isDesktop = !useIsMobile()

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    )
  } else {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          {trigger}
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>
          {children}
        </DrawerContent>
      </Drawer>
    )
  }


}