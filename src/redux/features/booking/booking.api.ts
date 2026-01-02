import { baseApi } from "@/redux/baseApi";





export const bookingApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        addBooking: builder.mutation({
            query:(bookingData) =>({
                url:"booking/create-booking",
                method:"POST",
                data:bookingData
            }),
            invalidatesTags:["BOOKING"]
        }),
       
    })
})


export const {
          
             useAddBookingMutation
            } = bookingApi