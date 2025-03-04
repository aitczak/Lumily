import { ExerciseListProps, ExerciseProps } from "../types";
import Dashboard from "./Dashboard";
import Card from "./Card";
import { useLocation } from "react-router";

const Exercises: React.FC = () => {
const location = useLocation();
const {exercise} = location.state || {exercise:[]}
  return (
    <div>
      <Card>
        <h2>
          {exercise.map((exe: ExerciseProps) => (
            <div key="{exe.id}">
              {" "}
              {exe.id}
              <h1>{exe.name}</h1>
            </div>
          ))}
        </h2>
      </Card>
    </div>
  );
};

export default Exercises;
