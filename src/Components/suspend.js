// this function takes a promise then returns the status, for example, success, pending, error
// The point of this is to inform the component whether or not the data is done fetching
// If the data is pending we can have loading text showing until the data fetches
// if the data has finished fetching we can go ahead and render the Advice component, the
// component will not throw an error because it will only render if it currently had an advice slip to show

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

const Api_url = "https://api.adviceslip.com/advice";

// this is our promise object
const fetchAdvice = () => fetch(Api_url).then((response) => response.json());

// we want to export the suspend function with our promise object in it
// that way we can import this into another component like Advice.js or App.js
// since we used a default export, you can import it as any name you choose
// you will notice I imported this as adviceData in App.js because I like this name
export default suspend(fetchAdvice());
