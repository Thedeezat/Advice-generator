import divider from '../images/pattern-divider-desktop.svg'
import dice from '../images/icon-dice.svg'
import mobileDice from '../images/pattern-divider-mobile.svg'
import { useState, useEffect } from "react"

const Advice = () => {
  const Api_url = 'https://api.adviceslip.com/advice';

  const [adviceId, setAdviceId] = useState("ADVICE #117")
  const [advice, setAdvice] = useState(
    `It is easy to sit up and take notice,
    what's difficult is getting up and taking action.`);

  const [update, updateAdvice] = useState("")
  const [id, updateID] = useState("")

  const fetchItems = async () => {
    try {
      const response = await fetch(Api_url)
      const randomSlip = await response.json();
      updateAdvice(randomSlip.slip.advice);
      updateID(randomSlip.slip.id)
    } catch (err) {
      console.log(err.stack)
    }
  }

  useEffect(() => {
    (async () => await fetchItems())()
  })

  return (
    <section className="advice_wrapper--inner">
      <p className="advice_counter"> {adviceId} </p>
      <q className="advice_text"> {advice} </q>

      <figure className="pattern_divider">
        <img src={divider} className="desktop_divider" alt="" />
        <img src={mobileDice} className="mobile_divider" alt="" />
      </figure>

      <figure className="dice_wrapper" onClick={() => { setAdvice(update); setAdviceId(`Advice #${id}`) }}>
        <img src={dice} alt="" />
      </figure>
    </section>
  );
}

export default Advice;