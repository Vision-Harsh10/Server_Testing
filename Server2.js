const express = require('express');
const app  = express();
const Database = require('./Database.js'); 
const task = require('./Models/task.js');

var TaskList = task.TaskList; 

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/Start' , (req,res)=>{
    res.send('Server is Working');
});

// Post API -- TASK
app.post('/task' , async (req,res)=>{
    try{
        const TaskData = req.body;
        const CreateData = new TaskList(TaskData);
        const response = await CreateData.save();
        console.log('Task Saved');
        res.status(201).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error :'Internal server error'});
    }
})

app.get('/task', async (req,res)=>{
    try{
        const task = await TaskList.find();
        console.log('Task Data Fetch')
        res.status(201).json(task);

    }catch(err){
        console.log(err);
        res.status(500).json({error :'Internal server error'});
    }
})

app.listen(3002, () => {
    console.log('Server is listening on port 3002');
  });

  // Never Give up! -> One Day