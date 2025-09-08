import { Link } from 'react-router';
import navBg from '../../assets/more/15.jpg'
import Logo from '../../assets/more/logo1.png'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Nav = () => {
    const {user}=useContext(AuthContext)
    return (
        <div style={{
            backgroundImage:`url(${navBg})`,
            backgroundRepeat:'no-repeat'
        }}  className='text-white py-[17px] lg:flex-row flex-col flex gap-2.5 items-center justify-around'>
            <div>
                <p className='text-[18px] font-rancho text-white'>{user?.email}</p>
            </div>
            <div className='flex items-center'>
                <img className='h-[50px] w-[50px]' src={Logo} alt="" />
            <p className='font-rancho text-[37px]'><Link to={'/'}>Espresso Emporium</Link></p>
            </div>
            <div>
                <button className="bg-[#E3B577]  text-[18px] font-rancho py-1 px-2.5 rounded text-white text-shadow-black text-shadow-md border-2 border-black"><Link to={'/login'}>Login</Link></button>
            </div>
        </div>
    );
};

export default Nav;