import { useState } from "react";
import { stats } from "../constants";
import styles from "../style";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Stats = () => {
   const [counterOn,setCounter] = useState(false);

   return (
    <ScrollTrigger onEnter={()=>{ setCounter(true) } } onExit={()=>{setCounter(false)}}>
    
    <div className="flex justify-center gap-7 mb-[100px] mt-[150px] items-center bg-gradient-to-r from-indigo-500 ... w-11/12">
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20  gap-10 ml-[12px]  mt-11`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >

          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-black">
            {counterOn && <CountUp start={0} end={stat.value} duration={2} delay={0} />}+
          </h4>

          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
    </div>
    
  </ScrollTrigger>
  );
  
};

export default Stats;
