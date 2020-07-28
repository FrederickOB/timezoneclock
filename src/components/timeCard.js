import React from "react";
import "../tailwind.output.css";
import axios from "axios";

class TimeCard extends React.Component {
  state = { loading: true, data: [], newData: [] };

  getData = () => {
    axios
      .get(
        `https://api.ipgeolocation.io/timezone?apiKey=a55c6f737c2f403c9e3b87aa3b5ea0aa`
      )
      .then((res) => {
        const data = res.data;
        this.setState({ data });
        console.log(data);
      });
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState.term !== this.props.term) {
      axios
        .get(
          `https://api.ipgeolocation.io/timezone?apiKey=a55c6f737c2f403c9e3b87aa3b5ea0aa&tz=${this.props.term}`
        )
        .then((res) => {
          const newData = res.data;
          this.setState({ newData });
          console.log(newData);
        });
    }
  }

  render() {
    return (
      <div
        className="flex justify-around
      "
      >
        <div class=" mt-10 py-5 px-8  border rounded-lg w-1/4 h-64 border-black">
          <div>
            {/* <h1 class="text-xl mb-5">{this.state.data.}</h1> */}
            <p class="mb-5">{this.state.data.timezone}</p>
            <p class="mb-5">{this.state.data.timezone_offset}</p>
            <h1 class="text-4xl">{this.state.data.time_12}</h1>
          </div>
        </div>

        <div class=" mt-10 py-5 px-8  border rounded-lg w-1/4 h-64 border-black">
          <div>
            <h1 class="text-xl mb-5">{this.props.term}</h1>
            <p class="mb-5">TimeZone: {this.state.newData.timezone}</p>
            <p class="mb-5">
              TIme difference (from GMT): {this.state.newData.timezone_offset}
            </p>
            <h1 class="text-4xl">Time: {this.state.newData.time_12}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeCard;



