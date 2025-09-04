import bgFooter from '../../assets/more/13.jpg'
import bgFooter2 from '../../assets/more/24.jpg'
import Logo from '../../assets/more/logo1.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
const Footer = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${bgFooter})`,
                backgroundRepeat: 'no-repeat'
            }} className='bg-cover py-9 mb-0'>
                <div className='max-w-[1250px] mx-auto'>
                    <img className='h-15 w-15' src={Logo} alt="Logo" />
                </div>

                <div className='max-w-[1250px] mx-auto grid-cols-1 gap-4 grid lg:grid-cols-2'>
                    <div>

                        <h1 className='text-[#331A15] font-rancho text-[35px] text-shadow-lg'>Espresso Emporium</h1>

                        <p className='font-montserrat mt-2.5'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>

                        <div className='flex gap-1.5 mt-2.5'>
                            <FaFacebook className='h-7 w-7'></FaFacebook>
                            <FaTwitter className='h-7 w-7'></FaTwitter>
                            <FaInstagram className='h-7 w-7'></FaInstagram>
                            <FaLinkedin className='h-7 w-7'></FaLinkedin>
                        </div>
                        <h1 className='text-[#331A15] font-rancho text-[33px] text-shadow-lg my-2.5'>Get In Touch</h1>
                        <div className='flex flex-col gap-2'>
                            <p className='flex items-center font-rancho gap-1.5'><FaPhone></FaPhone>+88 01533 333 333</p>
                            <p className='flex items-center font-rancho gap-1.5'><MdEmail></MdEmail>info@gmail.com</p>
                            <p className='flex items-center font-rancho gap-1.5'><FaLocationDot></FaLocationDot> 72, Wall street, King Road, Dhaka</p>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-[#331A15] font-rancho text-[35px] text-shadow-lg '>Connect With Us</h1>
                        <form className='mt-2.5'>
                            <div className='flex flex-col gap-2.5'>
                                <input className='bg-white py-1 rounded' type="text" placeholder='Name'/>
                                <input className='bg-white py-1 rounded' type="email" placeholder='Email'/>
                                <textarea rows={4}  className='bg-white rounded' placeholder='Message' id=""></textarea>
                            </div>
                            <button className='font-rancho bg-transparent border py-1 px-2 rounded-full my-2.5 text-[18px]'>Send Message</button>
                        </form>

                    </div>
                </div>
            </div>
            <div style={{
                backgroundImage:`url(${bgFooter2})`,
                backgroundRepeat:'no-repeat'
            }} className='bg-cover py-5'>
                <h1 className='text-white font-rancho text-[18px] text-center'>Copyright Espresso Emporium ! All Rights Reserved</h1>
            </div>
        </div>
    );
};

export default Footer;