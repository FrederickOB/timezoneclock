import React from "react";
import "../tailwind.output.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div class="self-center">
        <form onSubmit={this.props.onSubmitSearch}>
          <label class="mr-2">Search:</label>
          <input
            class="mt-10 w-1/2 h-10 rounded-lg border rounded--lg border-black"
            type="text"
            name="term"
            // value={this.props.term}
            // onChange={this.props.onChangeHandler}
            ref={this.props.inputSubmit}
          />
          <button type="submit" className="bg-blue-300 px-6 py-2">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
