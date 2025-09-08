import { Link, useLoaderData } from 'react-router';
import bg11 from '../../assets/more/11.png'
import { FaLongArrowAltLeft } from 'react-icons/fa';
import swal from 'sweetalert';

const UpdateCoffee = () => {
    const data = useLoaderData();
    const { _id, name, chef, suplier, taste, category, details, photo } = data;
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const chef = form.chef.value;
        const suplier = form.suplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value
        const coffeeDetails = {_id, name, chef, suplier, taste, category, details, photo }
        fetch('http://localhost:3000/update', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffeeDetails)
        }).then(res => res.json()).then(data => {
            console.log(data);
            if (data) {
                swal("Good job!", "You clicked the button!", "success");
                form.reset()
            }

        })

    }
    return (
        <div style={{
            backgroundImage: `url(${bg11})`,
            backgroundRepeat: 'no-repeat'
        }}
            className='bg-cover '>
            <div className='max-w-[1200px] mx-auto'>
                <h1 className='py-14'><Link to={'/'} className='flex items-center'><FaLongArrowAltLeft className='w-10'></FaLongArrowAltLeft> <span className='font-rancho text-shadow-lg text-[20px]'>Back to home</span></Link></h1>
                <div className='flex lg:px-28 flex-col gap-15 mb-14 bg-[#F4F3F0] rounded-2xl py-15'>
                    <div className='text-center flex-1'>
                        <h1 className='font-rancho text-[35px] text-shadow-lg'>Update Existing Coffee Details</h1>
                        <p className='font-montserrat'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>

                    <form onSubmit={handleUpdate} className='grid grid-cols-1 lg:grid-cols-2 place-items-center place-content-center px-11 lg:px-0   gap-2.5'>

                        <div className='flex flex-col gap-1 w-full'>
                            <label className='level font-bold'>Name</label>
                            <input defaultValue={name} name='name' className='input w-full' type="text" placeholder='Enter Coffee Name' />
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <label className='level font-bold'>Chef</label>
                            <input defaultValue={chef} name='chef' className='input w-full' type="text" placeholder='Enter coffee chef' />
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <label className='level font-bold'>Supplier</label>
                            <input defaultValue={suplier} name='suplier' className='input w-full' type="text" placeholder='Enter coffee supplier' />
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <label className='level font-bold'>Taste</label>
                            <input defaultValue={taste} name='taste' className='input w-full' type="text" placeholder='Enter coffee taste' />
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <label className='level font-bold'>Category</label>
                            <input defaultValue={category} name='category' className='input w-full' type="text" placeholder='Enter coffee category' />
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <label className='level font-bold'>Details</label>
                            <input defaultValue={details} name='details' className='input w-full' type="text" placeholder='Enter coffee details' />
                        </div>

                        <div className='flex flex-col gap-1 col-span-2 w-full'>
                            <label className='level font-bold'>Photo</label>
                            <input defaultValue={photo} name="photo" className='input  w-full' type="text" placeholder='Enter photo URL' />
                        </div>

                        <input className='input col-span-2 w-full bg-[#E3B577]  text-[18px] font-rancho' type="submit" value='Update Coffee Details' />

                    </form>

                </div>
            </div>

        </div>
    );
};

export default UpdateCoffee;