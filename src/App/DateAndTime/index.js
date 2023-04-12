import {useState, useEffect} from 'react';
import "./style.css";

const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
}

const dateOptions = {
    month: "long",
    weekday: "long", 
    day: "numeric",
    year: "numeric",
}

export const DateAndTime = () => {
    const time = new Date().toLocaleTimeString(undefined, timeOptions);
    const date = new Date().toLocaleDateString(undefined, dateOptions);
    const [actualDateAndTime, setActualDateAndTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActualDateAndTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [actualDateAndTime]);

    
    return <p className="actualDateAndTime">{`Dzisiaj jest ${date}, ${time}`}</p>
};