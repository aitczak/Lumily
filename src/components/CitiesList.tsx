import {useState } from "react";
import Places from "./Places"
import { PlacesListProps, PlacesProps } from "../types";

const Cities: React.FC = () => {
    //managing state and API calls? define state here top level dashboard 
    //input box for city or country you want to travel to -- API call?
    //displays categories of activites , What to do, where to stay, where to eat , how to get around 

    const [destination, setDestination] = useState('')
    const [activityList, setActivityList] =useState<PlacesProps[]>([{id: '1', name: 'Maui'}])

    const handleDestinationSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    //api call
    const response = await fetch('/api/locations');
    const data = await response.json();
    setActivityList(data);
    setDestination('')
    
    }

    return(
        <div>
           <form onSubmit={handleDestinationSubmit}>
            <input value={destination} type= 'text' placeholder="Where are you traveling?" onChange={(e)=> setDestination(e.target.value)}></input>
           <button type='submit'>Search</button>
           </form>
           <Places places ={activityList}/>
        </div>
    )
}

export default Cities;

