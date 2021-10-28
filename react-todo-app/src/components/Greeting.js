import React from "react";

function Greeting() {
    const date = new Date();
    const hours = date.getHours();
    const styles = {
        fontSize: 30
    };
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = "morning";
        styles.color = "#eeee45";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
        styles.color = "#34e4fc";
    } else {
        timeOfDay = "night";
        styles.color = "#D90000";
    }

    return (
        <h1 style={styles}>Good {timeOfDay}!</h1>
    )
}

export default Greeting;