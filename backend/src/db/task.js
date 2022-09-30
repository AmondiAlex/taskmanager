//description- string
//completed- boolean
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Joy_Raburu:Cranberry@cluster0.bk2wnhj.mongodb.net/task-manager-api");
const Task = mongoose.model('Task', {
    name:{
        type: String
    },
    age: {
        type: Number
    },
    description:{
        type: String,
    },
    completed:{
        type: Boolean,
    },
});
const task = new Task({
    name: 'Andrew',
    age: 25,
    Description:'wash dishes',
    completed: false,
});
task
.save()
.then(()=>{
    console.log(task);
})
.catch((error)=>{
    console.log("Error", error);
});