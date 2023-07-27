
import styles, { layout } from "../style";
import Button from "./Button";
import {c2} from "../assets/index"

const Course = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <p className={`${styles.paragraph} max-w-[470px] mt-51`}>How we help you get the best solution?</p>
      <h2 className={styles.heading2}>
      Gain knowledge <br className="sm:block hidden" /> about panel <br className="sm:block hidden" /> growth security.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our platform offers you expert-level designed and streamlined social media tactics. You have our word for it!.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      <img src={c2} className="rounded-2xl"/>
    </div>
  </section>
);

export default Course;
