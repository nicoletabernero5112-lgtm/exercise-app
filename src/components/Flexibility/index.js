import React from "react";

function FlexibilityExercise( {exerciseName}) {
    let [duration, setDuration] = React.useState(0);
    let [doingYoga, setDoingYoga] = React.useState(false);

    React.useEffect(() => {
        let intervalId;
        if (doingYoga) {
            intervalId = setInterval(() => {
                setDuration((prevDuration) => prevDuration + 10);
            }, 10);
        } else {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);
    }, [doingYoga]);
    
    const formatDuration = (duration) => {
    let minutes = Math.floor(duration / 60000);
    let seconds = Math.floor(duration / 1000);
    return `${minutes}:${seconds}`;

    };
    return (
        <div>
            <h1>Flexibility Exercise Timer</h1>
            <p>Timer: {formatDuration(duration)}</p>
            {! doingYoga ? (
                <button onClick ={() => setDoingYoga(true)}>
                    Start
                </button>
            ) : (
                <button onClick ={() => setDoingYoga(false)}>
                    Stop
                </button>
            )}
            <button onClick ={() => {setDuration(0); 
                setDoingYoga(false);
            }}>
            Reset
            </button>
        </div>
    );
}
                
export default FlexibilityExercise;