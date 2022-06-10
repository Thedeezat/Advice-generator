import divider from "../images/pattern-divider-desktop.svg";
import dice from "../images/icon-dice.svg";
import mobileDice from "../images/pattern-divider-mobile.svg";

// you will notice there is not any logic or event handlers here
// the parent tells this component what to render
// this component does not need to know anything except what to render
// this is an example of a controlled component, it is easier to maintain components like this
// keep your logic in one place, this component is also more reusable
// because there isn't any logic we can use it in other apps, it only needs adviceId, adviceContent, onChangeAdvice event
// it does not care how you get these props it just needs the raw data
// it also does not have any state, the parent can control that

const Advice = ({ adviceId, adviceContent, onChangeAdvice }) => {
  return (
    <div className="advice_wrapper--inner">
      <p className="advice_counter"> {`ADVICE #${adviceId}`} </p>
      <p className="advice_text"> {adviceContent} </p>

      <div className="pattern_divider">
        <img src={divider} className="desktop_divider" alt="" />
        <img src={mobileDice} className="mobile_divider" alt="" />
      </div>

      <div className="dice_wrapper" onClick={onChangeAdvice}>
        <img src={dice} alt="dice" />
      </div>
      <div className="dice_wrapper" onClick={onChangeAdvice}>
        <img src={dice} alt="" />
      </div>
    </div>
  );
};

export default Advice;
