import express, {NextFunction, Request, Response, ErrorRequestHandler} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import {initDB} from './db'
import {addUser, getUserExerciseList} from './controllers/dbcontroller.js'



dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
const PORT: number = 3023


app.post('/api/login', (req: Request, res: Response)=>{
  console.log('in backend login ')
    res.status(200).json({ok: true, message: 'Login Successful'})
})

app.post('/api/signup', addUser, (req: Request, res: Response)=>{
res.sendStatus(200)

})

app.get('/api/exerciseList/:id', getUserExerciseList, (req: Request, res: Response)=>{
console.log('in server get exercise list');
res.status(200).json(res.locals.UserExerciseList)
})
//make sure this works


app.get('/api/exercises:', (req: Request,res: Response) =>{
res.status(200).json([{'id': 2, 'name': 'Deadlift'}])
}  )

app.use("*", (req, res) => {
  res.status(404).send("Page Not Found");
});


app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})
