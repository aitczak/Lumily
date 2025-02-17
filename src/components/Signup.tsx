import { useState } from "react";
import { useNavigate } from "react-router";

const Signup = (): JSX.Element => {
  const [Email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (
    event: React.FormEvent<HTMLFormElement>,
    Email: string,
    PassWord: string,
    FirstName: string,
    LastName: string
  ): Promise<void> => {
    event.preventDefault();

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          FirstName: FirstName,
          LastName: LastName,
          email: Email,
          password: PassWord,
        }),
      });

      if (response.ok) {
        navigate("/dash");
      }
    } catch (error) {
      console.log("error in signup form");
    }
  };

  return (
    <div>
      <form
        id="Signupformcontainer"
        onSubmit={(event) =>
          handleSignup(event, Email, PassWord, FirstName, LastName)
        }
      >
        <input
          value={FirstName}
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <input
          value={LastName}
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <input
          value={Email}
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          value={PassWord}
          type="text"
          placeholder="Enter Password"
          onChange={(e) => setPassWord(e.target.value)}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={(e) => navigate("/login")}>
        Have an existing account? Log in here!
      </button>
    </div>
  );
};

export default Signup;
