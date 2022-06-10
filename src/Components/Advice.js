import divider from '../images/pattern-divider-desktop.svg'
import dice from '../images/icon-dice.svg'
import mobileDice from '../images/pattern-divider-mobile.svg'

const Advice = ({ adviceId, adviceContent, onChangeAdvice }) => {
  return (
    <section>
      <div className="advice_wrapper--inner">
        <p className="advice_counter"> {`ADVICE #${adviceId}`} </p>
        <q className="advice_text"> {adviceContent} </q>

        <figure className="pattern_divider">
          <img src={divider} className="desktop_divider" alt="" />
          <img src={mobileDice} className="mobile_divider" alt="" />
        </figure>

        <div className="dice_wrapper" onClick={onChangeAdvice}>
          <img src={dice} alt="dice" />
        </div>
      </div>
    </section>
  );
};

export default Advice;
