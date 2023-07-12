import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experienced and knowledgeable professionals is committed
          to delivering personalized service and building long-lasting
          relationships with our customers. We take the time to listen to your
          needs, understand your financial objectives, and provide you with
          tailored solutions that help you achieve your goals.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" />
      </div>
    </section>
  );
};

export default CardDeal;
