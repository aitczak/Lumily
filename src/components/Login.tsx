
import {useState} from 'react'
import { useNavigate } from "react-router";




const Login = () => {
  const navigate = useNavigate();

    const[ Email, setEmail] = useState('');
    const [PassWord, setPassWord] = useState('');

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>, Email: string, PassWord: string): Promise<void> => {
        event.preventDefault();
        console.log(Email, PassWord)
        try {
          const response = await fetch('/api/login', {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify({email: Email, password: PassWord})
        });

        const data = await response.json();
        console.log(data)
        if (data.ok){
          navigate('/list')
        }
      
       
        }
        catch (error){
          console.log(`error`)
        }
        
    }
   
    return (
    <>
    <div>
      <form id='loginformcontainer'
      onSubmit={(event)=> handleLogin(event, Email, PassWord)}>
      <input value={Email} type='text' placeholder='Enter Email' required onChange={(e)=> setEmail(e.target.value)}></input>
      <input value={PassWord} type='password' placeholder="Enter Password" required onChange={(e)=> setPassWord(e.target.value)}></input>
      <button type='submit'> Login </button>
      </form>
      </div>
  <button onClick={(e)=> navigate('/signup')}>Need an Account? Sign Up Here!</button>
    </>
    )
}

export default Login