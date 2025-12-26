import MultipleImageUpload from "@/components/MultipleImageUpload";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { FileMetadata } from "@/hooks/use-file-upload";
import { cn } from "@/lib/utils";
import { useGetAllDivisionQuery } from "@/redux/features/division/division.api";
import { useAddTourMutation, useGetTourTypeQuery } from "@/redux/features/tour/tour.api";
import {format, formatISO} from "date-fns";
import { CalendarIcon} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";


export default function AddTour() {
  const [images,setImages] = useState<(File | FileMetadata)[] | []>([])
  const {data: tourTypeData,isLoading:tourTypeLoading} = useGetTourTypeQuery(undefined)
  const {data: divisionData,isLoading:divisionLoading} = useGetAllDivisionQuery(undefined)
  const [addTour] = useAddTourMutation()

  
  const divisionOptions = divisionData?.data?.map((item:{_id:string,name:string}) =>({value:item._id,label:item.name}))
  console.log(divisionOptions)

  const tourOptions = tourTypeData?.map((item:{_id:string,name:string})=>(
    {value:item._id,
    label:item.name
    }
  ))
  console.log(tourOptions)

  const form = useForm({
    defaultValues:{
      title:"",
      addDivision:"",
     addTourType:"",
      description:"",
      startDate:"",
      endDate:""
    }
  })

  const onSubmit = async(data) =>{
      const tourData = {
        ...data,
      startDate:formatISO(data.startDate),
      endData:formatISO(data.endDate)
      }
      const formData = new FormData()
      formData.append("data",JSON.stringify(tourData))
      images.forEach((image)=> formData.append("files",image as File))
    
      try {
        const response = await addTour(formData).unwrap()
        console.log(response)
      } catch (error) {
        console.error(error)
      }
  }
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Add New Tour</h1>
        <p className="text-muted-foreground text-sm text-balance">
         Add New Tour For us.
        </p>
      </div>
      <div className="grid gap-6">
          <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
         <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="title" type="text" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* add tour and divisions */}
          <div className="flex justify-between items-center gap-5">
          <FormField
          control={form.control}
          name="addTourType"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
               <Select onValueChange={field.onChange} disabled={tourTypeLoading}>
               <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
               </SelectTrigger>
              <SelectContent>
               {
                tourOptions?.map((item:{value:string,label:string})=>(
                   <SelectItem value={item.value}>{item.label}</SelectItem>
                ))
               }
              
              
             </SelectContent>
            </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/*  */}
          <FormField
          control={form.control}
          name="addDivision"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add Division</FormLabel>
              <FormControl>
              <Select onValueChange={field.onChange} disabled={divisionLoading}>
               <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
               </SelectTrigger>
              <SelectContent>
              {
                divisionOptions?.map((item:{label:string,value:string})=>(
                   <SelectItem value={item.value}>{item.label}</SelectItem>
                ))
              }
             </SelectContent>
            </Select>
              </FormControl>
              <FormDescription className="sr-only">
               Add Division
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
 {/* date picker */}
      
  <div className="flex gap-5">
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col flex-1">
                      <FormLabel>Start Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={new Date(field.value)}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date <
                              new Date(
                                new Date().setDate(new Date().getDate() - 1)
                              )
                            }
                            captionLayout="dropdown"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col flex-1">
                      <FormLabel>End Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={new Date(field.value)}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date <
                              new Date(
                                new Date().setDate(new Date().getDate() - 1)
                              )
                            }
                            captionLayout="dropdown"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
   </div>
    {/* description  and multiple image uploader*/}
     <div className="flex w-full gap-5 items-start">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Description" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
               Description
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       <div className="flex-1 mt-5">
         <MultipleImageUpload onChange={setImages}></MultipleImageUpload>
       </div>

     </div>
       
       
      
       
        <Button className="w-full" type="submit">Submit</Button>
        </form>
       </Form>
       
      </div>
    </div>
  )
}
