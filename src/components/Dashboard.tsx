import {useState } from "react";
import Exercises from "./Exercises"
import { ExerciseListProps, ExerciseProps } from "../types";

const Dashboard: React.FC = () => {
    //managing state and API calls? define state here top level dashboard 
    //input box for exercise-- API call?
    //displays categories of activites , What to do, where to stay, where to eat , how to get around 

    const [destination, setDestination] = useState('')
    const [activityList, setActivityList] =useState<ExerciseProps[]>([{id: '1', name: 'Squats'}])

    const handleDestinationSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    //api call
    const response = await fetch('/api/exercises');
    const data = await response.json();
    setActivityList(data);
    setDestination('')
    
    }

    return(
        <div>
           <form onSubmit={handleDestinationSubmit}>
            <input value={destination} type= 'text' placeholder="Enter exercise here" onChange={(e)=> setDestination(e.target.value)}></input>
           <button type='submit'>Search</button>
           </form>
           <Exercises exercise ={activityList}/>
        </div>
    )
}

export default Dashboard;

