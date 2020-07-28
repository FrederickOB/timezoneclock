import React from "react";

import "./tailwind.output.css";
import SearchBar from "./components/searchBar";
import TimeCard from "./components/timeCard";

class App extends React.Component {
  state = { term: "" };

  // onChangeHandler = (event) => {
  //   this.setState({ term: event.target.value });
  // };

  inputSubmit = (input) => (this.input = input);

  onSubmitSearch = (event) => {
    event.preventDefault();
    this.setState({ term: this.input.value });
  };

  render() {
    return (
      <div className="App flex justify-center">
        <div className="  container ">
          <div>
            <SearchBar
              inputSubmit={this.inputSubmit}
              onSubmitSearch={this.onSubmitSearch}
              {...this.state}
            />
          </div>
          <div>
            <TimeCard {...this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
