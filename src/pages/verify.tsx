
import { Button } from '@/components/ui/button'
import { Card,CardContent,CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { cn } from '@/lib/utils'
import { useSendMutation, useVerifyOTPMutation } from '@/redux/features/auth/auth.api'
import { zodResolver } from '@hookform/resolvers/zod'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router'
import { toast } from 'sonner'
import z from 'zod'



  const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
})



export default function Verify() {
  const location = useLocation()
  const navigate = useNavigate()
  const [email] = useState(location.state)
  const [confirmed,setConfirmed] = useState(false)
  const [sendOtp] = useSendMutation()
  const [verifyOtp] = useVerifyOTPMutation()
  const [timer,setTimer] = useState(12)



  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  })


  const handleSendOTP = async() =>{
    const toastId = toast.loading("sending OTP")
   try {
  
   const result = await sendOtp({email: email}).unwrap();
   if(result.success){
    toast.success("OTP Send",{id:toastId})
    setConfirmed(true)
    setTimer(120)
   }
    
    
   } catch (error) {
    console.log(error)
    
   }
    
  }




  const onSubmit= async(data: z.infer<typeof FormSchema>)=>{
     const userInfo = {
      email,
      otp:data.pin
     }
     const toastId = toast.loading("verifying otp")
   
     try{
         const result = await verifyOtp(userInfo).unwrap();
        if(result.success){
         toast.success("verified otp",{id:toastId})
          setConfirmed(true)
   }
    

     }catch(error){
      console.log(error)
     }

    }

   
  useEffect(()=>{
    if(!email){
      navigate("/")
    }
  },[email,navigate])


  useEffect(()=>{

    if(!email || !confirmed){
      return
    }
    const timerId = setInterval(()=>{
      if(email && confirmed){
        setTimer((prev)=>(prev>0 ? prev-1 :0))
      }

    },1000)

    return () =>clearInterval(timerId)
  },[email,confirmed])
  
  return (
    <div className='grid place-content-center h-screen'>
      {
        confirmed ? ( <Card className='max-w-fit'>
      <CardHeader>
        <CardTitle>Verify your email account</CardTitle>
        <CardDescription>
          Please enter 6 digit code. <br />{email}
        </CardDescription>
      </CardHeader>
      <CardContent>
       {/* otp form */}
         <Form {...form}>
        <form id='otp-form' onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>One-Time Password</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
              <p>  Please enter the one-time password sent to your phone.</p>
              <br />
              <Button onClick={handleSendOTP} type='button' className={cn("p-0 m-0",{
                "cursor-pointer":timer == 0,
                "text-gray-500":timer !==0
              })}
               disabled={timer !==0} variant='link'>Resend OTP:{" "}</Button>
                {" "} {timer}

              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

    
      </form>
      </Form>
      </CardContent>
      <CardFooter className='flex justify-end'>
        <Button form='otp-form' className='w-full' type='submit'>Submit</Button>
      </CardFooter>
     
    </Card>) : ( <Card  className='max-w-fit'>
      <CardHeader>
        <CardTitle>Verify your email address</CardTitle>
        <CardDescription>
          We will send you an OTP <br />{email}
        </CardDescription>
      </CardHeader>
      
      <CardFooter className='flex justify-end'>
        <Button onClick={handleSendOTP} className='w-[300px]'  type='submit'>Submit</Button>
      </CardFooter>
     
    </Card>)
      }
    
    </div>
  )
}















 