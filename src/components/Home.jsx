import Child from "./Child"
import TripList from "./TripList";


function Home() {
  // This is a variable that will be passed to child or used inside this component
  const name = "Test name";
  // This is a function that will be passwd to child or used inside this component 
  function displayAlert(message) {
    // check if the message is passed empty then it will be object so prevent showing [object object]
    if (typeof message === 'object') {
      alert("Bye without goodbye")
    }
    // show message if passed throw the function argumment
    else {
      alert(`hello ${message}`);
    }
  }
  return (
    <>
      {/* Passing Properties to child component "userName" must be the same as the child props the is takeing the passing variable */}
      {/* The props is ReadOnly inside the child */}
      {/* You can pass functions variables or anything to the child component */}
      {/* Dont call the function displayAlert() | you should pass it without the parentheses  */}
      <Child userName={name} displayAlert={displayAlert} />
      <TripList />

      {/* if we need to pass arguments then we have to make other function  */}
      <button onClick={() => { displayAlert("message") }}>Click Me</button>
    </>
  )
}

export default Home
