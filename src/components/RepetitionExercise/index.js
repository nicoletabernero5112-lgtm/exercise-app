import React from "react";

function RepetitionExercise() {
    let [count, setCount] = React.useState(0);
    return (
    <div>
        <h1>Repetition Exercise</h1>
        <p>Counts: {count}</p>
        <button onClick={() => setCount(count + 1)}>
            Complete repetition
        </button>
        <button onClick={() => setCount(0)}>
            Reset
        </button>
    </div>
    );
}
export default RepetitionExercise;