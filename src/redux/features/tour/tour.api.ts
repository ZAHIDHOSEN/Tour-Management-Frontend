import { baseApi } from "@/redux/baseApi";




export const tourApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        addTourType: builder.mutation({
            query:(tourTypeName) =>({
                url:"/tour/create-tour-type",
                method:"POST",
                data:tourTypeName
            }),
            invalidatesTags:["TOUR"]
        }),
        removeTourType: builder.mutation({
            query:(tourId) =>({
                url:`/tour/tour-type${tourId}`,
                method:"DELETE",
                
            }),
            invalidatesTags:["TOUR"]
        }),
      
        getTourType: builder.query({
            query:() =>({
                url:"tour/all-tour-type",
                method:"GET",
                }),
                providesTags:["TOUR"],
                transformResponse:(response) =>response.data
     
        }),
    })
})


export const {
            useAddTourTypeMutation,
            useGetTourTypeQuery,
            useRemoveTourTypeMutation
             
            } = tourApi