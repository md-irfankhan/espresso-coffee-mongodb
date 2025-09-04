import i1 from '../../assets/icons/1.png'
import i2 from '../../assets/icons/2.png'
import i3 from '../../assets/icons/3.png'
import i4 from '../../assets/icons/4.png'
const Features = () => {
    return (
        <div className="bg-[#ECEAE3] flex-col lg:flex-row justify-center items-center flex lg:justify-around gap-3 lg:gap-2 py-18">
            <div className='max-w-[200px]'>
                <img src={i1} alt="" />
                <h3 className='font-rancho text-[23px] py-1.5'>Awesome Aroma</h3>
                <p className='font-montserrat text-[13px]'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='max-w-[200px]'>
                <img src={i2} alt="" />
                <h3 className='font-rancho text-[23px] py-1.5'>High Quality</h3>
                <p className='font-montserrat text-[13px]'>We served the coffee to you maintaining the best quality</p>
            </div>
            <div className='max-w-[200px]'>
                <img src={i3} alt="" />
                <h3 className='font-rancho text-[23px] py-1.5'>Pure Grades</h3>
                <p className='font-montserrat text-[13px]'>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className='max-w-[200px]'>
                <img src={i4} alt="" />
                <h3 className='font-rancho text-[23px] py-1.5'>Proper Roasting</h3>
                <p className='font-montserrat text-[13px]'>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
            
        </div>
    );
};

export default Features;