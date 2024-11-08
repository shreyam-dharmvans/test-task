import { User } from '@/types/UserType'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ user }: { user: User | null }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/signin')
        }

    }, [user])
    return (
        <div className='text-white text-center'>
            <h1 >Restricted Route : Dashboard</h1>
            <h2> Hello , {user?.username}</h2>
        </div>
    )
}

export default Dashboard