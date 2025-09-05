import Coffee from '../../../assets/1.png'
import { FaEye } from 'react-icons/fa';
import { BiSolidPencil } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router';
const ProductCard = ({data}) => {
    console.log(data);
    const {name,chef,photo,_id}=data
    return (
        <div className="flex items-center bg-[#D2B48C]/[0.2] py-5 px-4 rounded">
            <div>
                <img className='h-[200px] w-[130px]' src={photo} alt="" />

            </div>
            <div className="flex-1 flex flex-col justify-between">
                <p className="font-montserrat"><span className='font-bold'>Name:</span> {name} </p>
                <p className="font-montserrat"><span className='font-bold'>Chef:</span>{chef} </p>
                <p className="font-montserrat"><span className='font-bold'>Price:</span> 800 Taka</p>

            </div>
            <div className='flex flex-col gap-1.5 justify-between'>
                <div>
                    <button  className='p-2 rounded bg-[#D2B48C]'><Link to={`/details/${_id}`}><FaEye className='text-white'></FaEye></Link></button>
                </div>
                <div>
                    <button className='p-2 rounded bg-[#3C393B]'><BiSolidPencil className='text-white'></BiSolidPencil></button>
                </div>
                <div>
                    <button className='p-2 rounded bg-[#EA4744]'><MdDelete className='text-white'></MdDelete></button>
                </div>

            </div>
            
        </div>
    );
};

export default ProductCard;