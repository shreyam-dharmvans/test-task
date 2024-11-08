import React from 'react'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';

const Header = ({ setUser }: { setUser: React.Dispatch<React.SetStateAction<User | null>> }) => {
    const navigate = useNavigate();
    const { toast } = useToast()

    const handleSignin = () => {
        navigate('/signin')
    }

    const handleSignup = () => {
        navigate('/signup')
    }

    const handleSignout = async () => {
        const res: { data: { success: boolean, message: string } } = await axios.get('/user/signout');

        if (res.data.success) {
            //console.log('user successfully signed out');
            toast({
                title: "sign out",
                description: "user successfully signed out",
            })
            setUser(null);
        }
    }

    const handleHome = () => {
        navigate('/');
    }

    return (
        <div className='flex justify-between p-6 bg-blue-700'>
            <Button className='text-white text-2xl' onClick={handleHome}>Test- Task</Button>
            <div className='text-white flex space-x-2'>
                <Button onClick={handleSignin}>Signin</Button>
                <Button onClick={handleSignup}>Signup</Button>
                <Button onClick={handleSignout}>Signout</Button>
            </div>
        </div>
    )
}

export default Header