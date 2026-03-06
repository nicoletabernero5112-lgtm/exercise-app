import React, { useState } from "react";
import DurationExercise from "./components/DurationExercise";
import RepetitionExercise from "./components/RepetitionExercise";
import FlexibilityExercise from "./components/Flexibility";

function App() {
  let [exerciseChoice, setExerciseChoice] = useState("null");
  let exercises = [
    { exerciseName: "Push Ups", exerciseType: "repetition" },
    { exerciseName: "Plank", exerciseType: "duration" },
    { exerciseName: "Running", exerciseType: "duration" },
    { exerciseName: "Yoga", exerciseType: "yoga" },
  ];

    if (exerciseChoice.exerciseType === "repetition") {
      return (<RepetitionExercise />
      );
    } else if (exerciseChoice.exerciseType === "duration") {
      return (<DurationExercise />
      );
    } else if (exerciseChoice.exerciseType === "yoga") {
      return (<FlexibilityExercise />
      );
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
