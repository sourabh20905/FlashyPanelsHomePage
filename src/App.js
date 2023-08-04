import styles from "./style";
import { Tool, Course, CTA, Footer, Navbar, Stats, Testimonials, Hero, Efficiency,Swiper,Slider } from "./components";

const App = () => (
  <div className="bg-[#FBFBFB] w-full overflow-hidden bg-gradient-to-r from-indigo-500 ...">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-[#FBFBFB] bg-gradient-to-r from-indigo-500 ... ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-[#FBFBFB] ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>

    <div className={`bg-[#FBFBFB] ${styles.paddingX} ${styles.flexCenter}`}>
        <Efficiency/>
        </div> 

        <Stats />

      <div className={`bg-[#FBFBFB] ${styles.paddingX} ${styles.flexCenter}`}>
      <Course />
      </div>   
        
      <div className={`bg-[#FBFBFB] ${styles.paddingX} ${styles.flexCenter}`}>
      <Tool />
      </div>
      
      
        <Slider/>

      <div className={`bg-[#FBFBFB] ${styles.paddingX} ${styles.flexCenter}`}>
      <Testimonials />
      </div>
      
      
      <CTA />
      
      
      <Footer />
        
      </div>
    </div>
  </div>
);

export default App;
