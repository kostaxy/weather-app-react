import clearDaySvg from '../weather/svg/clear-day.svg'
import clearNightSvg from '../weather/svg/clear-night.svg'
import partlyCloudyDaySvg from '../weather/svg/partly-cloudy-day.svg'
import partlyCloudyNightSvg from '../weather/svg/partly-cloudy-night.svg'
import cloudySvg from '../weather/svg/cloudy.svg'
import drizzleSvg from '../weather/svg/drizzle.svg'
import fogSvg from '../weather/svg/fog.svg'
import hailSvg from '../weather/svg/hail.svg'
import mistSvg from '../weather/svg/mist.svg'
import overcastSvg from '../weather/svg/overcast.svg'
import rainSvg from '../weather/svg/rain.svg'
import snowSvg from '../weather/svg/snow.svg'
import thunderSvg from '../weather/svg/thunderstorms.svg'
import sleetSvg from '../weather/svg/sleet.svg'
import thunderRainSvg from '../weather/svg/thunderstorms-rain.svg'
import thunderSnowSvg from '../weather/svg/thunderstorms-snow.svg'
import windSnowSvg from '../weather/svg/wind-snow.svg'



const iconCode = [
    //Sunny
    {
        code: 1000,
        iconUrl: clearDaySvg,
        isDay: 1
    },
    //clear night
    {
        code: 1000,
        iconUrl: clearNightSvg,
        isDay: 0
    },
    //Partly cloudy day
    {
        code: 1003,
        iconUrl: partlyCloudyDaySvg,
        isDay: 1
    },
    //Partly cloudy night
    {
        code: 1003,
        iconUrl: partlyCloudyNightSvg,
        isDay: 0
    },
    //Cloudy
    {
        code: 1006,
        iconUrl: cloudySvg,
    },
    //Overcast
    {
        code: 1009,
        iconUrl: overcastSvg,
    },
    //Mist
    {
        code: 1030,
        iconUrl: mistSvg,
    },
    //Patchy rain possible
    {
        code: 1063,
        iconUrl: rainSvg,
    },
    //Patchy snow possible
    {
        code: 1066,
        iconUrl: snowSvg,
    },
    //Patchy sleet possible
    {
        code: 1069,
        iconUrl: sleetSvg,
    },
    //Patchy freezing drizzle possible
    {
        code: 1072,
        iconUrl: drizzleSvg,
    },
    //Thundery outbreaks possible
    {
        code: 1087,
        iconUrl: thunderSvg,
    },
    //Blowing snow
    {
        code: 1114,
        iconUrl: windSnowSvg,
    },
    //Blizzard
    {
        code: 1117,
        iconUrl: windSnowSvg,
    },
    //Fog
    {
        code: 1135,
        iconUrl: fogSvg,
    },
    //Freezing fog
    {
        code: 1147,
        iconUrl: fogSvg,
    },
    //Patchy light drizzle
    {
        code: 1150,
        iconUrl: drizzleSvg,
    },
    //Light drizzle
    {
        code: 1153,
        iconUrl: drizzleSvg,
    },
    //Freezing drizzle
    {
        code: 1168,
        iconUrl: drizzleSvg,
    },
    //Heavy freezing drizzle
    {
        code: 1171,
        iconUrl: drizzleSvg,
    },
    //Patchy light rain
    {
        code: 1180,
        iconUrl: rainSvg,
    },
    //Light rain
    {
        code: 1183,
        iconUrl: rainSvg,
    },
    //Moderate rain at times
    {
        code: 1186,
        iconUrl: rainSvg,
    },
    //Moderate rain
    {
        code: 1189,
        iconUrl: rainSvg,
    },
    //Heavy rain at times
    {
        code: 1192,
        iconUrl: drizzleSvg,
    },
    //Heavy rain
    {
        code: 1195,
        iconUrl: rainSvg,
    },
    //Light freezing rain
    {
        code: 1198,
        iconUrl: sleetSvg,
    },
    //Moderate or heavy freezing rain
    {
        code: 1201,
        iconUrl: sleetSvg,
    },
    //Light sleet
    {
        code: 1204,
        iconUrl: sleetSvg,
    },
    //Moderate or heavy sleet
    {
        code: 1207,
        iconUrl: sleetSvg,
    },
    //Patchy light snow
    {
        code: 1210,
        iconUrl: snowSvg,
    },
    //Light snow
    {
        code: 1213,
        iconUrl: snowSvg,
    },
    //Patchy moderate snow
    {
        code: 1216,
        iconUrl: snowSvg,
    },
    //Moderate snow
    {
        code: 1219,
        iconUrl: snowSvg,
    },
    //Patchy heavy snow
    {
        code: 1222,
        iconUrl: snowSvg,
    },
    //Heavy snow
    {
        code: 1225,
        iconUrl: snowSvg,
    },
    //Ice pellets
    {
        code: 1237,
        iconUrl: hailSvg,
    },
    //Light rain shower
    {
        code: 1240,
        iconUrl: rainSvg,
    },
    //Moderate or heavy rain shower
    {
        code: 1243,
        iconUrl: rainSvg,
    },
    //Torrential rain shower
    {
        code: 1246,
        iconUrl: rainSvg,
    },
    //Light sleet showers
    {
        code: 1249,
        iconUrl: sleetSvg,
    },
    //Moderate or heavy sleet showers
    {
        code: 1252,
        iconUrl: sleetSvg,
    },
    //Light snow showers
    {
        code: 1255,
        iconUrl: snowSvg,
    },
    //Moderate or heavy snow showers
    {
        code: 1258,
        iconUrl: snowSvg,
    },
    //Light showers of ice pellets
    {
        code: 1261,
        iconUrl: hailSvg,
    },
    //Moderate or heavy showers of ice pellets
    {
        code: 1264,
        iconUrl: hailSvg,
    },
    //Patchy light rain with thunder
    {
        code: 1273,
        iconUrl: thunderRainSvg,
    },
    //Moderate or heavy rain with thunder
    {
        code: 1276,
        iconUrl: thunderRainSvg,
    },
    //Patchy light snow with thunder
    {
        code: 1279,
        iconUrl: thunderSnowSvg,
    },
    //Moderate or heavy snow with thunder
    {
        code: 1282,
        iconUrl: thunderSnowSvg,
    },

]

export function getIconSrcByCode(code, isDay) {
    for (let i = 0; i < iconCode.length; i++) {
        if (iconCode[i].code === code) {
            if (iconCode[i].hasOwnProperty('isDay') && iconCode[i].isDay === isDay) {
                return iconCode[i].iconUrl;
            } else if (!iconCode[i].hasOwnProperty('isDay')) {
                return iconCode[i].iconUrl;
            }
        }
    }
}