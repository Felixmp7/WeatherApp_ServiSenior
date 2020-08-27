import React, { Component } from "react";
import { Group } from "@vx/group";
import { AxisLeft, AxisBottom } from "@vx/axis";
import { Bar } from "@vx/shape";
import { scaleLinear, scaleBand } from "@vx/scale";
import { connect } from "react-redux";
import "./WeatherGraphics.css";

class WeatherGraphicsTest extends Component {
  state = {
    loading: true,
    innerWidth: 500,
    variationOfTemp: [],
  };

  componentDidMount() {
    // console.log(this.props);
    if (this.props.getVariationTempForNextDays) {
      this.setState({
        variationOfTemp: [...this.props.variationInNextFiveDays],
        loading: false,
      });
    } else {
      console.log(this.props.dataNextWeather);
      const variationOfTemp = this.props.nextWeathersPerHours.map((item) => {
        return {
          average: item.bottomTemperature,
          day: item.hour,
        };
      });
      console.log(variationOfTemp);
      this.setState({
        variationOfTemp: [...variationOfTemp],
        loading: false,
      });
    }
  }


  render() {
    const { variationOfTemp } = this.state;

    const data = variationOfTemp;
    // Define the graph dimensions and margins
    const width = data.length > 5 ? 500 :300;
    const height = 75;
    const margin = { top: 5, bottom: 5, left: 5, right: 5 };

    // Then we'll create some bounds
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    // We'll make some helpers to get at the data we want
    const x = (d) => d.day;
    const y = (d) => d.average;

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
          <svg className="svgContainer" height={"100%"}>
            <Group top={margin.top} left={margin.left}>
              <AxisLeft
                scale={yScale}
                top={0}
                left={0}
                label={"Close Price ($)"}
                stroke={"#1b1a1e"}
                tickTextFill={"#1b1a1e"}
              />
              <AxisBottom
                scale={xScale}
                top={yMax}
                label={"Years"}
                stroke={"#1b1a1e"}
                tickTextFill={"#1b1a1e"}
              />
              {data.map((d, i) => {
                const barHeight = yMax - yPoint(d);
                return (
                  <Bar
                    key={i}
                    x={xPoint(d)}
                    y={yMax - barHeight}
                    height={barHeight}
                    width={xScale.bandwidth()}
                    fill="#a6c1ee"
                  />
                );
              })}
            </Group>
          </svg>
        </div>
      );
    }
  }
}

const mapState = ({ weatherData }) => ({
  // dataNextWeather: weatherData.nextWeatherData,
  variationInNextFiveDays: weatherData.variationTempNextDays,
});

export default connect(mapState, null)(WeatherGraphicsTest);
