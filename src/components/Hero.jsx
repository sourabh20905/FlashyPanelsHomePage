import styles from "../style";
import { discount } from "../assets";
import GetStarted from "./GetStarted";
import Banner from "../assets/Banner.mp4"

const Hero = () => {
  
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-black">Get</span> Your $2 {" "}
            <span className="text-black">First Month</span> 
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[50px]">
            SMM Business with the Ultimate Solution!<br className="sm:block hidden" />{" "}
            {" "}
          </h1>
          
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Unleash Your Entrepreneurial Spirit: Create Your Thriving Digital Empire with Global SMM Services!
        </p>
      </div>

    <div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        
        <video
            className="w-[100%] h-[100%] relative z-[5]- "
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
        
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
    </div>
    </section>
  );
};

export default Hero;
