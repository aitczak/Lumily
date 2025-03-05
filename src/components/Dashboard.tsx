import {useState } from "react";
import Exercises from "./Exercises"
import { ExerciseListProps, ExerciseProps } from "../types";
import { useNavigate } from "react-router";

const Dashboard: React.FC = () => {
    //managing state and API calls? define state here top level dashboard 
    //input box for exercise-- API call?
    //displays categories of activites , What to do, where to stay, where to eat , how to get around 
    const navigate = useNavigate()
    const [exercise, setExercise] = useState('')
    const [exerciseList, setExeriseList] =useState<ExerciseProps[]>([])

    const handleExerciseSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    //api call
    const response = await fetch('/api/exercises');
    const data = await response.json();
    setExeriseList(data);
    setExercise('')
    
    }

    const handleViewExClick = ()=>{
    //     //fetch to API to get exerciseList using username/ID? 
    //     //set up contextAPI to hold user state
    //     try {
    //         fetch('/api/exerciseList/:id',
    //             {

    //             }
    //         )
    //         if (result.ok){
             navigate('/exercises', {state: {exerciseList} })
    //         }
    //     }
    //     catch(

    //     )
      
     //make context API to hold user id
    }

    return(
        <div>
            <div>
                <h1>My Goals</h1>
                <h2>Edit Goals</h2>
                <h2>Set New Goal</h2>
            </div>
            <div>
                My Journal
            </div>
            <div>Progress</div>
           <form onSubmit={handleExerciseSubmit}>
            <input value={exercise} type= 'text' placeholder="Enter exercise here" onChange={(e)=> setExercise(e.target.value)}></input>
           <button type='submit'>Search</button>
           </form>
           <button onClick={handleViewExClick}>View my exercises</button>
          
        </div>
    )
}

export default Dashboard;

