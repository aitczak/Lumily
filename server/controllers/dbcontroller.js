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


export const getUserExerciseList = async (req, res,next)=>{
  const {id} = req.params

  const text = `SELECT * FROM exercises WHERE id = $1 `
  const params = [id]
  //need to make exercise table, join with user /foreign key
  try {
    const resultList = await client.query(text, params);
    if (resultList) {
      res.locals.exerciseList = resultList.rows[0]
      return next();
    } else console.log('user exercise list not found', error)
  } 
  catch(error)
   {
    return next({
      log: `${error} occurred while searching for user exercise list in database`,
    })
};
}