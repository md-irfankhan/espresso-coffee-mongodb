import { RiCupLine } from 'react-icons/ri';
import {Link} from 'react-router'
import bg4 from '../../assets/more/4.png'
import bg5 from '../../assets/more/5.png'
import ProductCard from './ProductCard/ProductCard';
const ProductPage = () => {
    return (
        <div className='relative mt-4'>
            <img className='absolute top-0 -left-40 -z-10' src={bg4} alt="" />
            <img className='absolute bottom-0 -right-40 -z-10' src={bg5} alt="" />
            <div className="text-center">
                <h3 className="font-montserrat">--- Sip & Savor ---</h3>
                <h1 className="font-rancho text-[33px] text-shadow-lg text-[#331A15]">Our Popular Products</h1>
                <button className="bg-[#E3B577]  text-[18px] font-rancho py-1 px-1.5 rounded text-white text-shadow-black text-shadow-md border-2 border-black"><Link className='flex items-center gap-1'>Add Coffee <RiCupLine className='text-black'></RiCupLine></Link> </button>
            </div>

            <div className='mt-4 max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-2'>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
            
        </div>
    );
};

export default ProductPage;