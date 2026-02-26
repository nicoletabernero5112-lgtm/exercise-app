import React from "react";

function DurationExercise( {exerciseName}) {
    let [duration, setDuration] = React.useState(0);
    let [isRunning, setIsRunning] = React.useState(false);

    React.useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setDuration((prevDuration) => prevDuration + 10);
            }, 10);
        } else {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);
    }, [isRunning]);
    
    const formatDuration = (duration) => {
    let minutes = Math.floor(duration / 60000);
    let seconds = Math.floor(duration / 1000);
    let milliseconds = duration % 1000;
    return `${minutes}:${seconds}:${milliseconds}`;

    };
    return (
        <div>
            <h1>Duration Exercise</h1>
            <p>Timer: {formatDuration(duration)}</p>
            {! isRunning ? (
                <button onClick ={() => setIsRunning(true)}>
                    Start
                </button>
            ) : (
                <button onClick ={() => setIsRunning(false)}>
                    Stop
                </button>
            )}
            <button onClick ={() => {setDuration(0); 
                setIsRunning(false);
            }}>
            Reset
            </button>
        </div>
    );
}
                
export default DurationExercise;