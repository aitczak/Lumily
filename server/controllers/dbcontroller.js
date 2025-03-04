import {client} from '../db.js'





export const addUser = async (req, res, next) => {
const {FirstName, LastName, email, password} = req.body
console.log(req.body)

try {
  const newuser = await client.query (
    `INSERT INTO users(email, firstname, lastname, password)
    VALUES($1, $2, $3, $4)
    RETURNING *`,
    [email, FirstName, LastName, password]
  )
  console.log("new user added", newuser.rows[0]);
  res.locals.newuser = newuser
  return next()
}
catch (error){
  console.log('error querying DB for User Details', error)
}

};


