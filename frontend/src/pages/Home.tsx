import homeSvg from '@/assets/home.svg'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
const Home = () => {

    const navigate = useNavigate();

    const handleDashboard = () => {
        navigate('/dashboard');
    }

    const handleUnrestricted = () => {
        navigate('/unrestricted');
    }

    return (
        <div className='flex justify-center mt-16 flex-col'>
            <img src={homeSvg} alt="" className='h-60' />
            <div className='flex justify-center mt-10 gap-x-10'>
                <Button className='bg-blue-700' onClick={handleDashboard}>Dashboard restricted route</Button>
                <Button className='bg-blue-700' onClick={handleUnrestricted}>Unrestricted Route</Button>
            </div>

        </div>

    )
}

export default Home