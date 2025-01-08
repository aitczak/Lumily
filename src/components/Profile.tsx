import { useNavigate } from "react-router"
import Dashboard from "./Dashboard";


const Profile = (): JSX.Element  => {
    //will have state of username and pw, and validate it on clicks to anywhere else (sessions and cookies)
     const navigate = useNavigate();

    const pressedExerciseButton= () => {
        navigate('/dash')
    }

    const pressedNutritionButton = () => {

    }

    return (
        <div>
            <button onClick={pressedExerciseButton}>View and add exercises </button>
            <button onClick={pressedNutritionButton}>View your nutrition</button>
        </div>
    )
}



export default Profile