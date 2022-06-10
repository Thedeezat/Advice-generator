import React from "react";
import { Suspense, useState } from "react";
import adviceData from "./Components/suspend";

const Advice = React.lazy(() => import("./Components/Advice"));
// this will lazy load your advice componenet. That means React will not load the Javascript until it the page has finished loading. 
// This is a useful technique for getting faster page loading speeds
// We can give the user a smaller page to download by only including what we need initially
// Tiktok does this by only loading the video the user can see, when the user scrolls down it will load more videos.
// this also makes the loading bar show on the suspense, if you throttle your network in Google Chrome,
// you will see loading text when the page first loads

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
