import React, {useState} from "react";
import { letterFrequency } from "@vx/mock-data";
import { Group } from "@vx/group";
import { Bar } from "@vx/shape";
import { scaleLinear, scaleBand } from "@vx/scale";
import './WeatherGraphics.css'
import { connect } from "react-redux";


// We'll use some mock data from `@vx/mock-data` for this.
const data = letterFrequency;
console.log(data)

// Define the graph dimensions and margins
const width = 500;
const height = 100;
const margin = { top: 10, bottom: 10, left: 10, right: 10 };

// Then we'll create some bounds
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

// We'll make some helpers to get at the data we want
const x = (d) => d.letter;
const y = (d) => +d.frequency * 100;

// And then scale the graph by our data
const xScale = scaleBand({
  range: [0, xMax],
  round: true,
  domain: data.map(x),
  padding: 0.4,
});
const yScale = scaleLinear({
  range: [yMax, 0],
  round: true,
  domain: [0, Math.max(...data.map(y))],
});

// Compose together the scale and accessor functions to get point functions
const compose = (scale, accessor) => (data) => scale(accessor(data));
const xPoint = compose(xScale, x);
const yPoint = compose(yScale, y);

const WeatherGraphics = ({
  dataNextWeather,
  getVariationTempForNextDays,
  variationInNextFiveDays,
}) => {
  console.log(variationInNextFiveDays);
  return (
    <div className="graphicsContainer">
      <svg width={width} height={height}>
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
};

const mapState = ({ weatherData }) => ({
  dataNextWeather: weatherData.nextWeatherData,
  variationInNextFiveDays: weatherData.variationTempNextDays,
});

export default connect(mapState,null)(WeatherGraphics);
