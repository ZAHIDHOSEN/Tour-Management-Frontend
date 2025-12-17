import { baseApi } from "@/redux/baseApi";




export const divisionApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        addDivision: builder.mutation({
            query:(divisionData) =>({
                url:"/division/create-division",
                method:"POST",
                data:divisionData
            }),
            invalidatesTags:["DIVISION"]
        }),
       
      
        getAllDivision: builder.query({
            query:() =>({
                url:"division/all-division",
                method:"GET",
                }),
                providesTags:["DIVISION"],
                transformResponse:(response) =>response.data
     
        }),
    })
})


export const {
          
             useAddDivisionMutation,
             useLazyGetAllDivisionQuery
            } = divisionApi