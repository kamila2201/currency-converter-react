import "./style.css";
import { useState, useEffect } from 'react';

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])


    return (
        <p>
            Today is {date.toLocaleDateString("en-US",{
                 weekday: "long",
                 month: "long",
                 day: "numeric",
                 hour: "2-digit",
                 minute: "2-digit",
                 second: "2-digit",
            })}
        </p>
    )

}

export default Clock;