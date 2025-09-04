import BannerImg from '../../assets/more/3.png'

const Banner = () => {
    return (
        <div
        style={{
            backgroundImage:`url(${BannerImg})`,
            backgroundRepeat:'no-repeat'
        }}

        className=' py-30 bg-cover'
        
        >

            <div className='flex justify-end items-end max-w-[1300px]'>
                <div className='max-w-[800px] lg:pr-2.5'>
                <h1 className='text-white font-rancho text-[40px]'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='text-white font-montserrat text-[14px] opacity-[0.7] py-2'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>

                <button className='bg-[#E3B577] font-rancho py-2 px-3 text-[20px] hover:border-1 hover:border-white hover:text-white hover:bg-transparent'>Learn More</button>
            </div>
            </div>
            
        </div>
    );
};

export default Banner;