/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { Link, useNavigate} from "react-router"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import Password from "../password"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useLoginMutation } from "@/redux/features/auth/auth.api"
import { toast } from "sonner"
import config from "@/config"

const loginSchema = z.object({

  email: z.email(),
  password: z.string().min(8),
 
  
})
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const[login] = useLoginMutation() 
  const navigate = useNavigate()
 


    const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
     
    }
  })


  const onSubmit = async(data: z.infer<typeof loginSchema>) =>{
    
    const userInfo = {
      email: data.email,
      password: data.password
    }

    try {
     const res = await login(userInfo).unwrap()
     console.log(res)

     if(res.success){
      toast.success("Logged In Successfully")
      navigate("/")
     }
   
     
      
     } catch (error:any) {
       console.error(error)
        if(error.data.message ==="password does not match"){
        toast.error("Invalid credential")
      }

      if(error.data.message ==="user is not verified"){

        toast.error("user is not verified")
        navigate("/verify",{state:data.email})
      }
    
     
     }
    
    
  }
  
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
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
         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Password {...field}></Password>
              </FormControl>
              <FormDescription className="sr-only">
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       
        <Button className="w-full" type="submit">Login</Button>
        </form>
       </Form>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        <Button onClick={()=>window.location.href= (`${config.baseUrl}/auth/google`)} variant="outline" className="w-full">
          <svg
            width={10}
            height={8}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"

            role="img">
           <path fill="#4285F4" d="M24 9.5c3.9 0 7.3 1.4 9.9 3.7l7.4-7.4C35.6 2.1 30 0 24 0 14.9 0 6.9 4.4 2.9 11l8.9 6.9C13.9 13.1 18.4 9.5 24 9.5z" />
           <path fill="#34A853" d="M46.5 24c0-1.6-.1-3.1-.4-4.6H24v9.1h12.7c-.5 2.6-2 4.8-4.3 6.2l6.9 5.3C43.9 36.1 46.5 30.7 46.5 24z" />
           <path fill="#FBBC05" d="M11.8 29.9C10.6 27.8 10 25.5 10 23s.6-4.8 1.8-6.9L2.9 9.2C1 12.3 0 16 0 20s1 7.7 2.9 10.8l8.9-6.9z" />
           <path fill="#EA4335" d="M24 48c6 0 11.6-2.1 15.9-5.7l-7.6-6.3c-2.1 1.4-4.8 2.2-8.3 2.2-5.6 0-10.1-3.6-12.2-8.5l-8.9 6.9C6.9 43.6 14.9 48 24 48z" />
           </svg>
          Login with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to={`/register`}>Register</Link>
      </div>
    </div>
  )
  }
 