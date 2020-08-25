
import {
  mdiWhiteBalanceSunny,
  mdiWeatherCloudy,
  mdiWeatherPouring,
  mdiWeatherLightning,
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
    iconPath: mdiWeatherLightning,
    color: "#555",
  },
  Snow: {
    iconPath: mdiWeatherSnowy,
    color: "#aaa",
  },
};

export const getIcon = (icon) => {
  const iconTransformed = iconRelation[icon];
  return iconTransformed;
};
