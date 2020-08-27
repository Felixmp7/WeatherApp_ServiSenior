
import {
  mdiWhiteBalanceSunny,
  mdiWeatherCloudy,
  mdiWeatherPouring,
  mdiMoonWaxingCrescent,
  mdiWeatherSnowy,
} from "@mdi/js";

const iconRelation = {
  Clear: {
    iconPath: mdiWhiteBalanceSunny,
    color: "#f58747",
  },
  Clouds: {
    iconPath: mdiWeatherCloudy,
    color: "#00d8ff",
  },
  Thunderstorm: {
    iconPath: mdiWeatherPouring,
    color: "#999",
  },
  Rain: {
    iconPath: mdiWeatherPouring,
    color: "#555",
  },
  Snow: {
    iconPath: mdiWeatherSnowy,
    color: "#aaa",
  },
  Moon: {
    iconPath: mdiMoonWaxingCrescent,
    color: "#333",
  },
};

export const getIcon = (icon, hour) => {
  const iconTransformed = iconRelation[icon];
  if (hour) {
    const nightCondition = hour.includes("PM");
    const hourExtracted = parseInt(hour.slice(0, 2));
    console.log(nightCondition);
    console.log(hourExtracted);

    if (nightCondition && hourExtracted !== 12 && hourExtracted >= 6 && icon === "Clear") {
      return iconRelation.Moon;
    } else {
      return iconTransformed;
    }
  }
  return iconTransformed;
};
