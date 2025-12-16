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
import { useAddTourTypeMutation } from "@/redux/features/tour/tour.api"
import { useForm } from "react-hook-form"
import { toast } from "sonner"



export function AddTourTypeModal() {
   const form = useForm()
   const [addTourType] = useAddTourTypeMutation()
    

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onsubmit = async(data:any) =>{
       const res = await addTourType({name:data.name}).unwrap();
       if(res.success){
        toast.success("Tour Type Add")
       }

    }
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button>AddTourType</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Tour Type</DialogTitle>
            <DialogDescription>
              {/* Make changes to your profile here. Click save when you&apos;re
              done. */}
            </DialogDescription>
          </DialogHeader>
           <Form {...form}>
            <form id="add-tour-type" onSubmit={form.handleSubmit(onsubmit)}>
                <FormField
                    control={form.control}
                            name="name"
                            render={({ field }) => (
                    <FormItem>
                     <FormLabel>Tour Type</FormLabel>
                     <FormControl>
                      <Input placeholder="Tour Type Name" type="name" {...field} />
                      </FormControl>
                       <FormDescription className="sr-only">
                               This is tour type 
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                            )}>
                   </FormField>
            </form>
           </Form>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button form="add-tour-type" type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
