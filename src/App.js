import Advice from "./Components/Advice";
import { Suspense, useState } from "react";
import adviceData from "./Components/suspend";

function App() {
  const [currentAdvice, setCurrentAdvice] = useState(adviceData());
  const handleChangeAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setCurrentAdvice(data));
  };

  return (
    <main className="App">
      <div className="container">
        <div className="advice_wrapper">
          <Suspense fallback={<p className="loading">Loading</p>}>
            <Advice
              adviceId={currentAdvice.slip.id}
              adviceContent={currentAdvice.slip.advice}
              onChangeAdvice={handleChangeAdvice}
            />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

export default App;
