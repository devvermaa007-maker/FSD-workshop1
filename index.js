import{EventEmitter} from "node:events";
const task = new EventEmitter();

//register listeners

task.on("greet",(name)=>{
    console.log(` hello,${name}!Welcome to the session `);
});

task.on("greet",(reason)=>{
    console.log(`this is the reason: ${reason}`);
});

task.on("greet",()=>{
    console.log('class started at this pm');
});

task.on("greet",(exit)=>{
    console.log('this is the exit');
});
task.emit("greet","student");
task.emit("exit","class completed");
task.emit("start","dsa");
