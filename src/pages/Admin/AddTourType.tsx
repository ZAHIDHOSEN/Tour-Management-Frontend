import { AddTourTypeModal } from "@/components/modules/admin/tourType/AddTourTypeModal"
import { Button } from "@/components/ui/button"
import { DeleteConfirmation } from "@/components/ui/DeleteConfirmation"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useGetTourTypeQuery, useRemoveTourTypeMutation} from "@/redux/features/tour/tour.api"
import { Trash2 } from "lucide-react"
import { toast } from "sonner"



export default function AddTourType() {
   const {data} = useGetTourTypeQuery(undefined)
   const [removeTourType] = useRemoveTourTypeMutation()

   const handleRemoveTourType = async(tourId:string) =>{
    const toastId = toast.loading("Removing...")
    try {
      const res = await removeTourType(tourId).unwrap()

      if(res.success){
        toast.success("Remove",{id:toastId})
      }
      
    } catch (error) {
      console.error(error)
      
    }
    
 
   }
  
  return (
    <div className="w-full max-w-7xl mx-auto px-5">
    <div className="border border-muted rounded-md">
    <div className="flex justify-between my-2">
      <h3 className="font-semibold text-xl">Tour Type</h3>
      <AddTourTypeModal></AddTourTypeModal>
    </div>
    <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow> 
      <TableHead className="w-[100px]">Name</TableHead>
     
      <TableHead className="text-right">Action</TableHead>
    </TableRow>
    </TableHeader>
    <TableBody>
      {
        data?.map((item:{_id:string,name:string})=> (
        <TableRow>
        <TableCell className="font-medium w-full">{item.name}</TableCell>
        <TableCell>
          <DeleteConfirmation onConfirm={()=>handleRemoveTourType(item._id)}>
               <Button size="sm"><Trash2></Trash2></Button>
          </DeleteConfirmation>
          
          </TableCell>
      </TableRow>
        ))
      }

  </TableBody>
</Table>
</div>
    </div>
  )
}
