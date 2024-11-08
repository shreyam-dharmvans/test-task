import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { signupSchema as formSchema } from '@/zodSchemas/signupSchema';
import { z } from 'zod';
import axios from 'axios';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const { toast } = useToast();
    const navigate = useNavigate();


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            let res = await axios.post('/user/signup', values);

            if (res.data.success) {
                toast({
                    title: "Signup",
                    description: "User successfully signed up. Please signin",
                })
                navigate('/signin');
            }
        } catch (error) {
            console.log("Error signup : " + error);
            toast({
                title: "Signup",
                description: "User signup failed",
                variant: "destructive",
            })
        }
        form.reset();

    }


    return (

        <div className='w-[50%] mx-auto mt-6 text-white'>
            <div className='text-3xl text-center mb-10'>Signup</div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="username" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default Signup