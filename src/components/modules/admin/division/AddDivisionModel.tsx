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

import { useForm } from "react-hook-form"





export function AddDivisionModel() {
   const form = useForm()
  
    

    const onsubmit = async(data) =>{
      console.log(data)
    
    

    }
  return (
    <Dialog>
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
                     <FormLabel>Tour Type</FormLabel>
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
                            name="name"
                            render={({ field }) => (
                    <FormItem>
                     <FormLabel>Division Description</FormLabel>
                     <FormControl>
                      <Input placeholder="Division Description" type="name" {...field} />
                      </FormControl>
                       <FormDescription className="sr-only">
                              This is division description
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
            <Button form="add-division" type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
