import React from "react";
// import BooksDisplayStatus from './components/BooksDisplayStatus'
import "./App.css";
import NavbarBookDisplay from "./components/NavbarBookDisplay";
// import data from './data.json'

// import axios from "axios";

class App extends React.Component {

  

  
  // componentDidMount() {
  //   console.log(data);
    // console.log('hhhhhhhhh');
    // const URL = "./books.json";

    // axios
    //   .get("./data.json")
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => console.error(error.response));
  // }
  

  render() {
    return (
      <div className="App">
        <NavbarBookDisplay />
      </div>
    );
  }
}
export default App;
