import * as React from 'react';
import WeatherLocation from '../weatherLocationA/weatherLocationA';
import WeatherDailyData from '../weatherDailyDataA/weatherDailyDataA';
import WeatherImage from '../weatherImageA/weatherImageA';
import WeatherWeeklyData from '../weatherWeeklyDataA/weatherWeeklyDataA';

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
