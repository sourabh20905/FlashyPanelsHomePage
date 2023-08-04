import { apple,  google } from "../assets";
import styles, { layout } from "../style";
import {c1} from "../assets/index"

const Tool = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={c1}  className="w-[100%] h-[100%] relative z-[5] rounded-2xl" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Why Choose FlashyPanels?</p>
      <h2 className={styles.heading2}>
        Access Advanced Social  <br className="sm:block hidden" /> Media Marketing Tools
        
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Advanced AI-powered algorithms that help you optimize your marketing campaigns and drive revenue growth
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Tool;
