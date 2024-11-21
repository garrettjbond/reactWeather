import * as React from 'react';
import WeatherLocation from '../WeatherLocation/WeatherLocation';
import WeatherDailyData from '../WeatherDailyData/WeatherDailyData';
import WeatherImage from '../WeatherImage/WeatherImage';
import WeatherWeeklyData from '../WeatherWeeklyData/WeatherWeeklyData';

const WeatherContainer: React.FC = () => {
    return (
        <div>
            <WeatherLocation></WeatherLocation>
            <WeatherImage></WeatherImage>
            <WeatherWeeklyData></WeatherWeeklyData>
            <WeatherDailyData></WeatherDailyData>
        </div>
    );
};

export default WeatherContainer;
