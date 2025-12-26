import SingleImageUploader from "@/components/SingleImageUploader"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useAddDivisionMutation } from "@/redux/features/division/division.api"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"




interface IDivision {
  name:string,
  description:string
}





export function AddDivisionModel() {
  const [image,setImage] = useState<File | null>(null)
   
   const[addDivision] = useAddDivisionMutation()
   const [open,setOpen] = useState(false)
   const form = useForm<IDivision>()
  
    

    const onsubmit = async(data:IDivision) =>{
     const formData = new FormData();

     formData.append("data",JSON.stringify(data))
     formData.append("file",image as File)

    //  console.log(formData.get("data"))
    //  console.log(formData.get("file"))

    try {
        await addDivision(formData).unwrap()
         toast.success("Division Added")
         setOpen(false)
         form.reset()
         setImage(null)
      
    } catch (error) {
      console.error(error)
      
    }

 
     
    
    

    }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <Button>Add Division</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Division</DialogTitle>
            <DialogDescription>
              {/* Make changes to your profile here. Click save when you&apos;re
              done. */}
            </DialogDescription>
          </DialogHeader>
           <Form {...form}>
            <form id="add-division" onSubmit={form.handleSubmit(onsubmit)}>
                <FormField
                    control={form.control}
                            name="name"
                            render={({ field }) => (
                    <FormItem>
                     <FormLabel>Division</FormLabel>
                     <FormControl>
                      <Input placeholder="Division name" type="name" {...field} />
                      </FormControl>
                       <FormDescription className="sr-only">
                              This is division name
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                            )}>
                   </FormField>
                   {/* description */}
                   <FormField
                    control={form.control}
                            name="description"
                            render={({ field }) => (
                    <FormItem>
                     <FormLabel className="my-2">Division Description</FormLabel>
                     <FormControl>
                      <Textarea placeholder="Division Description" {...field} />
                      </FormControl>
                       <FormDescription className="sr-only">
                              This is division description
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                            )}>
                   </FormField>
              </form>
               <SingleImageUploader onChange={setImage}></SingleImageUploader>
           </Form>
           
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button form="add-division" type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      
      </form>
     
    </Dialog>
  )
}
