import React, { useEffect, useState } from 'react';


export default function Timer() {
    const locale = 'fr';
    const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update

    useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every second
        // This will trigger a rerender every component that uses the useDate hook.
        setDate(new Date());
      }, 1000);
      return () => {
        clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
      }
    }, []);

    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

    const hour = today.getHours();
    const minute = today.getMinutes();

    const phrase = [
      "le couvre feu. Reste chez toi !",
      "bon là tu peux te balader",
      "bientôt le couvre feu, hâte toi !",
      "le couvre feu. Reste chez toi !"
    ]

    const wish = `C'est ${
      (hour < 6 && phrase[0]) ||
      ( hour < 17  && phrase[1]) ||
      ( ( hour < 18 && minute < 45 ) && phrase[1]) ||
      ( (18 > hour && 44 < minute) && phrase[2]) ||
      phrase[3]}`;

    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour24: true, minute: 'numeric', second: 'numeric' });

    return (
      <div>
        <h4>{ date } { time }</h4>
        <h2>{ wish }</h2>
      </div>
    );
  };