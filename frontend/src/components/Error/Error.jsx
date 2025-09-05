import ErrImg from '../../assets/404/404.gif'
import { Link } from 'react-router';
import { FaLongArrowAltLeft } from 'react-icons/fa';
const Error = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <h1 className='py-14 text-center'><Link to={'/'} className='flex items-center'><FaLongArrowAltLeft className='w-10'></FaLongArrowAltLeft> <span className='font-rancho text-shadow-lg text-[20px]'>Back to home</span></Link></h1>
            </div>
            <img className='mx-auto' src={ErrImg} alt="" />
            
        </div>
    );
};

export default Error;