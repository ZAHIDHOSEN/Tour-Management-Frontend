import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useGetAllDivisionQuery } from "@/redux/features/division/division.api";
import { useGetTourTypeQuery } from "@/redux/features/tour/tour.api";
import { formatISO } from "date-fns";
import { ChevronDownIcon } from "lucide-react";



import { useForm } from "react-hook-form";


export default function AddTour() {
  const {data: tourTypeData,isLoading:tourTypeLoading} = useGetTourTypeQuery(undefined)
  const {data: divisionData,isLoading:divisionLoading} = useGetAllDivisionQuery(undefined)
  
  
  const divisionOptions = divisionData?.data?.map((item:{_id:string,name:string}) =>({value:item._id,label:item.name}))
  console.log(divisionOptions)

  const tourOptions = tourTypeData?.map((item:{_id:string,name:string})=>(
    {value:item._id,
    label:item.name
    }
  ))
  console.log(tourOptions)

  const form = useForm({
    // defaultValues:{
    //   email:"",
    //   addDivision:"",
    //  addTourType:"",
    //   description:"",
    //   startDate:"",
    //   endDate:""
    // }
  })

  const onSubmit = async(data) =>{
      const tourData = {
        ...data,
      startDate:formatISO(data.startDate),
      endData: formatISO(data.endDate)
      }
      console.log(tourData)
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@email.com" type="email" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/*  */}
          <div className="flex flex-row items-center gap-5">
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
  {/* First Date Field */}
  <FormField
    control={form.control}
    name="startDate" 
    render={({ field }) => (
      <FormItem className="flex flex-col">
        <FormLabel>Start Date</FormLabel>
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
                variant={"outline"}
                className={cn(
                  "w-48 justify-between font-normal",
                  !field.value && "text-muted-foreground"
                )}
              >
                {field.value ? field.value.toLocaleDateString() : <span>Pick a date</span>}
                <ChevronDownIcon className="h-4 w-4 opacity-50" />
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              captionLayout="dropdown"
              fromYear={1900}
              toYear={new Date().getFullYear()}
              selected={field.value}
              onSelect={field.onChange}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <FormMessage />
      </FormItem>
    )}
  />

  {/* Second Date Field - Note the different Name */}
  <FormField
    control={form.control}
    name="endDate" 
    render={({ field }) => (
      <FormItem className="flex flex-col">
        <FormLabel>End Date</FormLabel>
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
                variant={"outline"}
                className={cn(
                  "w-48 justify-between font-normal",
                  !field.value && "text-muted-foreground"
                )}
              >
                {field.value ? field.value.toLocaleDateString() : <span>Pick a date</span>}
                <ChevronDownIcon className="h-4 w-4 opacity-50" />
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              captionLayout="dropdown"
              fromYear={1900}
              toYear={new Date().getFullYear()}
              selected={field.value}
              onSelect={field.onChange}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <FormMessage />
      </FormItem>
    )}
  />
</div>

        {/* description */}
            <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
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
       
      
       
        <Button className="w-full" type="submit">Submit</Button>
        </form>
       </Form>
       
      </div>
    </div>
  )
}
