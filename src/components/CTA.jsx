import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Establish a strong online presence and launch your success. Ready to launch your?</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Starting your SMM panel is effortless with our powerful tools and comprehensive support from FlashyPanels ⚡️ . Start today! Save time and increase productivity with an efficient workflow, automating panel tasks and enabling you to focus on expanding your business.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
