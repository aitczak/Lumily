import { useNavigate } from "react-router";


const Landing = (): JSX.Element => {

    const navigate = useNavigate();

    const gotosignup = () =>{
       
        navigate('/signup')

    }
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className=" rounded  text-center">
          <h1 className="text-8xl font-bold text-cream">LUMILY</h1>
          <h3 className="text-darkblue font-bold text-2xl">
            Feel Alive, Live On
          </h3>
          <button onClick={gotosignup} className="m-10 rounded text-center text-cream font-bold bg-darkblue px-4 py-2">
            Get Started
          </button>
        </div>
        </div>
     
    );
}

export default Landing