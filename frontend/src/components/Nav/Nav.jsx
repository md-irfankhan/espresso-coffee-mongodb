import { Link } from 'react-router';
import navBg from '../../assets/more/15.jpg'
import Logo from '../../assets/more/logo1.png'
const Nav = () => {
    return (
        <div style={{
            backgroundImage:`url(${navBg})`,
            backgroundRepeat:'no-repeat'
        }}  className='text-white py-[17px] flex gap-2.5 items-center justify-center'>
            <img className='h-[50px] w-[50px]' src={Logo} alt="" />
            <p className='font-rancho text-[37px]'><Link to={'/'}>Espresso Emporium</Link></p>
        </div>
    );
};

export default Nav;