import { baseApi } from "@/redux/baseApi";




export const tourApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        addTourType: builder.mutation({
            query:(tourTypeName) =>({
                url:"/tour/create-tour-type",
                method:"POST",
                data:tourTypeName
            })
        }),
      
        getTourType: builder.query({
            query:() =>({
                url:"tour/all-tour-type",
                method:"GET",
                }),
                transformResponse:(response) =>response.data
     
        }),
    })
})


export const {
            useAddTourTypeMutation,
            useGetTourTypeQuery
             
            } = tourApi