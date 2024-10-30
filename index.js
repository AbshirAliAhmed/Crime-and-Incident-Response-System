import express from 'express';


const app = express();

 app.use(express.json)

const port = 8000;


app.get('/' , (req , res) => {
    res.send("hello wolrd")
})

app.listen(port , () =>{

    console.log(`server is runing at Port : ${port}`)
})