import React, { useState } from "react";
import DurationExercise from "./components/DurationExercise";
import RepetitionExercise from "./components/RepetitionExercise";

function App() {
  let [exerciseChoice, setExerciseChoice] = useState("null");
  let exercises = [
    { exerciseName: "Push Ups", exerciseType: "repetition" },
    { exerciseName: "Plank", exerciseType: "duration" },
    { exerciseName: "Running", exerciseType: "duration" },
  ];
  if (exerciseChoice) {
    if (exerciseChoice.exerciseType === "repetition") {
      return (<RepetitionExercise />
      );
    } else {
      return (<DurationExercise />
      );
    }
  }

  return (
  <div>
    <h1>Exercise Mania</h1>
    <p>Select one exercise!</p>
    <div>
    {exercises.map((exercise) => (
      <button key={exercise.exerciseName} 
      onClick={() => setExerciseChoice(exercise.exerciseName)}>
        {exercise.exerciseName}
      </button>
    ))}
    </div>
  </div>
  )
}

export default App;
