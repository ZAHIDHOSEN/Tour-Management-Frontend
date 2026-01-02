import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";
import type { ITourPackage } from "@/types/tour.type";




export const tourApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        addTour: builder.mutation({
            query:(tourData) =>({
                url:"/tour/create-tour",
                method:"POST",
                data:tourData
            }),
            invalidatesTags:["TOUR"]
        }),
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
                url:`/tour/tour-type/${tourId}`,
                method:"DELETE",
                
            }),
            invalidatesTags:["TOUR"]
        }),
      
        getAllTour: builder.query<ITourPackage[],unknown>({
            query:() =>({
                url:"tour/all-tour",
                method:"GET",
                }),
                providesTags:["TOUR"],
                transformResponse:(response:IResponse<ITourPackage[]>) =>response.data
     
        }),
        
        getTourType: builder.query({
            query:(params) =>({
                url:"tour/all-tour-type",
                method:"GET",
                params:params
                }),
                providesTags:["TOUR"],
                transformResponse:(response) =>(response.data)
     
        }),
    })
})


export const {
            useAddTourTypeMutation,
            useGetTourTypeQuery,
            useRemoveTourTypeMutation,
            useAddTourMutation,
            useGetAllTourQuery
             
            } = tourApi