
import cup1 from '../../assets/cups/Rectangle 9.png'
import cup2 from '../../assets/cups/Rectangle 10.png'
import cup3 from '../../assets/cups/Rectangle 11.png'
import cup4 from '../../assets/cups/Rectangle 12.png'
import cup5 from '../../assets/cups/Rectangle 13.png'
import cup6 from '../../assets/cups/Rectangle 14.png'
import cup7 from '../../assets/cups/Rectangle 15.png'
import cup8 from '../../assets/cups/Rectangle 16.png'
const Instagram = () => {
    return (
        <div className='mb-2.5'>
            <div className="text-center my-2.5">
                <h3 className="font-montserrat">Follow Us Now</h3>
                <h1 className="font-rancho text-shadow-lg text-[32px] text-[#331A15]">Follow on Instagram</h1>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 max-w-[1250px] mx-auto gap-2.5'>
                <img src={cup1} alt="" />
                <img src={cup2} alt="" />
                <img src={cup3} alt="" />
                <img src={cup4} alt="" />
                <img src={cup5} alt="" />
                <img src={cup6} alt="" />
                <img src={cup7} alt="" />
                <img src={cup8} alt="" />

            </div>
        </div>
    );
};

export default Instagram;