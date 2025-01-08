import { ExerciseListProps } from "../types";
import Dashboard from "./Dashboard";
import Card from "./Card";

const Exercises: React.FC<ExerciseListProps> = ({ exercise }) => {
  return (
    <div>
      <Card>
        <h2>my card wrapper</h2>
        <h2>
          {exercise.map((exercise) => (
            <div key="{exercise.id}">
              {" "}
              {exercise.id}
              <h1>{exercise.name}</h1>
            </div>
          ))}
        </h2>
      </Card>
    </div>
  );
};

export default Exercises;
