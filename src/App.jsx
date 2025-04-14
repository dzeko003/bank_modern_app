import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, NavBar, Stats, Testimonials, Hero } from "./components";

const App = () => (

    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>NavBar</div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Hero</div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Sats</div>
      </div>
    </div>

)

export default App;
