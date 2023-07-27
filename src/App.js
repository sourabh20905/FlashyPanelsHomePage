import styles from "./style";
import { Tool, Course, CTA, Footer, Navbar, Stats, Testimonials, Hero, Efficiency,Swiper } from "./components";

const App = () => (
  <div className="bg-[#FBFBFB] w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-[#FBFBFB] ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-[#FBFBFB] ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>

        <Stats />
        <Efficiency/>
        
        <Course />
        <Tool />
        
        <Testimonials />
      
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
