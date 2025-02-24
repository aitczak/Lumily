import {client} from '../db.js'





export const addUser = async (res, req, next) => {
const {FirstName, LastName, email, password} = req.body

try {
  const newuser = await client.query (
    `INSERT INTO user(firstname, lastname, email, password)
    VALUES($1, $2, $3, $4)
    RETURNING *`
  )
  console.log("new user added", result.rows[0]);
  res.locals.newuser = newuser
}
catch (error){
  console.log('error querying DB for User Details')
}

};


//make sure this works