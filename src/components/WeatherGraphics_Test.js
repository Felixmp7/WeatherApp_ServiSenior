import React, { Component } from 'react'
import { Group } from "@vx/group";
import { letterFrequency } from "@vx/mock-data";
import { Bar } from "@vx/shape";
import { scaleLinear, scaleBand } from "@vx/scale";
import { connect } from "react-redux";
import "./WeatherGraphics.css";


class WeatherGraphicsTest extends Component {
  state = {
    loading: true,
    innerWidth: 500,
    variationInNextFiveDays: []
  };

  componentDidMount() {
    window.addEventListener("resize", this.reportWindowSize);
    this.setState({ 
      variationInNextFiveDays: [...this.props.variationInNextFiveDays],
      loading: false
    });
  }

  reportWindowSize = (event) => {
    console.log(event);
    const windowWidth = window.innerWidth;
    this.setState({ innerWidth: windowWidth });
  };

  render() {
    const { innerWidth, variationInNextFiveDays } = this.state;

    const data = variationInNextFiveDays;
    // Define the graph dimensions and margins
    const width = innerWidth;
    console.log(width);
    const height = width * .4;
    const margin = { top: 5, bottom: 5, left: 5, right: 5 };

    // Then we'll create some bounds
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    // We'll make some helpers to get at the data we want
    const x = (d) => d.day;
    const y = (d) => +d.average * 10;

    // And then scale the graph by our data
    const xScale = scaleBand({
      range: [0, xMax],
      round: false,
      domain: data.map(x),
      padding: 0.6,
    });
    const yScale = scaleLinear({
      range: [yMax, 0],
      round: false,
      domain: [0, Math.max(...data.map(y))],
    });

    // Compose together the scale and accessor functions to get point functions
    const compose = (scale, accessor) => (data) => scale(accessor(data));
    const xPoint = compose(xScale, x);
    const yPoint = compose(yScale, y);

    if (this.state.loading) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="graphicsContainer">
          <svg width={"100%"} height={"100%"}>
            {data.map((d, i) => {
              const barHeight = yMax - yPoint(d);
              return (
                <Group key={`bar-${i}`}>
                  <Bar
                    x={xPoint(d)}
                    y={yMax - barHeight}
                    height={barHeight}
                    width={xScale.bandwidth()}
                    fill="#a6c1ee"
                  />
                </Group>
              );
            })}
          </svg>
        </div>
      );
    }
  }
}

const mapState = ({ weatherData }) => ({
  dataNextWeather: weatherData.nextWeatherData,
  variationInNextFiveDays: weatherData.variationTempNextDays,
});

export default connect(mapState,null)(WeatherGraphicsTest);
