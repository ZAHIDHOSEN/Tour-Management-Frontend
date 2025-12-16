import { AddTourTypeModal } from "@/components/modules/admin/tourType/AddTourTypeModal"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useGetTourTypeQuery } from "@/redux/features/tour/tour.api"
import { Trash2 } from "lucide-react"



export default function AddTourType() {
   const {data} = useGetTourTypeQuery(undefined)
   console.log(data)
  
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
        data?.map((item:{name:string})=> (
        <TableRow>
        <TableCell className="font-medium w-full">{item.name}</TableCell>
        <TableCell><Button size="sm"><Trash2></Trash2></Button></TableCell>
      </TableRow>
        ))
      }

  </TableBody>
</Table>
</div>
    </div>
  )
}
