import { useToast } from '@/hooks/use-toast';
import { User } from '@/types/UserType'
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { signupSchema as formSchema } from '@/zodSchemas/signupSchema';
import { z } from 'zod';
import axios from 'axios';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const { toast } = useToast();

    const [isLoading, setIsLoading] = useState<boolean>(false);
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
            setIsLoading(true);
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

        setIsLoading(false);
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