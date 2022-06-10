import React from "react";
import { Suspense, useState } from "react";
import adviceData from "./Components/suspend";
// you can choose any name you like because we used a default export, I just chose adviceData.
// A default import means there is only one thing in the js file
// so it will just import the one thing, therefore you can name it anything because there is only one thing it could be linked to

const Advice = React.lazy(() => import("./Components/Advice"));
// this will lazy load your advice componenet. That means React will not load the Javascript until it the page has finished loading. 
// This is a useful technique for getting faster page loading speeds
// We can give the user a smaller page to download by only including what we need initially
// Tiktok does this by only loading the video the user can see, when the user scrolls down it will load more videos.
// this also makes the loading bar show on the suspense, if you throttle your network in Google Chrome,
// you will see loading text when the page first loads

function App() {
  // this will equal a promise with pending status until the data finishes fetching, then it will change into your json data
  // When it changed into the json data it will inform the Suspense in App.js that it is ready to be rendered
  // adviceData is called adviceData() because this is a function we got from suspend.js and we need to call it
  const [currentAdvice, setCurrentAdvice] = useState(adviceData());

  // we name event handlers handle... this lets other developers know this is an event handler
  // in the props we name the event onChangeAdvice, use 'on' to let other devs know this is an event, so 'onChangeAdvice'
  // it also makes sure you do not have 2 duplicate names

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
