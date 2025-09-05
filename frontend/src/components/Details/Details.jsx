import { Link, useLoaderData } from 'react-router';
import bg11 from '../../assets/more/11.png'
import { FaLongArrowAltLeft } from 'react-icons/fa';
import coffee1 from '../../assets/1.png'
const Details = () => {
    const data=useLoaderData()
    const {_id,chef,name,supplier,category,taste,details,photo}=data;
    console.log(data);
    
    return (
        <div style={{
            backgroundImage: `url(${bg11})`,
            backgroundRepeat: 'no-repeat'
        }}
            className='bg-cover'>
            <div className='max-w-[1200px] mx-auto'>
                <h1 className='py-14'><Link to={'/'} className='flex items-center'><FaLongArrowAltLeft className='w-10'></FaLongArrowAltLeft> <span className='font-rancho text-shadow-lg text-[20px]'>Back to home</span></Link></h1>
                <div className='flex lg:flex-row flex-col items-center justify-center gap-15 mb-14 bg-[#F4F3F0] rounded-2xl py-15'>
                    <div>
                        <img src={photo} className='w-[193px] h-[239px]'  alt="" />
                    </div>
                    <div>
                        <h1 className='font-rancho text-[#331A15] text-shadow-lg text-[30px] pb-2.5'>Niceties</h1>
                        <div className='flex flex-col gap-2'>
                            <p className='font-montserrat'><span className='font-bold'>Name:</span>{name}</p>
                            <p className='font-montserrat'><span className='font-bold'>Chef:</span>{chef}</p>
                            <p className='font-montserrat'><span className='font-bold'>Supplier:</span>{supplier}</p>
                            <p className='font-montserrat'><span className='font-bold'>Taste:</span>{taste}</p>
                            <p className='font-montserrat'><span className='font-bold'>Category:</span>{category}</p>
                            <p className='font-montserrat'><span className='font-bold'>Details:</span>{details}</p>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Details;