import Advice from "./Components/Advice";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="advice_wrapper">
          <Suspense fallback={<p>Loading</p>}>
            <Advice />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

const suspend = (promise) => {
  let result;
  let status = "pending";
  const suspender = promise.then(
    (response) => {
      status = "success";
      result = response;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );
  return () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw result;
      default:
        return result;
    }
  };
};

export default App;
