import http from "http";

const userdata = [
    { id: 1, name: "John", email: "john@example.com" },
    { id: 2, name: "Jane", email: "jane@example.com" },
    { id: 3, name: "Bob", email: "bob@example.com" }
];

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
   //es.setHeader("Content-Type", "text/plain; charset=utf-8");
   //es.end("Hello server");
   if(url=='/msg'&&method=="GET"){
    res.end("this is welcome message from");
   }
 else if(url=='/users'&&method=="GET"){
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(userdata));
 }
 else if(url.startsWith('/users/')&&method=="GET"){  
    const userId=url.split('/')[2];
    console.log(userId);
    const user = userdata.find((user) => user.id === parseInt(userId));
    if(!user){
        res.writeHead(404, {"Content-Type": "text/plain"});
        return res.end("User not found");
    }
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(user));
 }
 else if(url=='/users'&&method=="POST"){
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({message: "User created"}));
 }
});
server.listen(3000,()=>{
    console.log("server is running on 3000");
});

/* /create/read/update/delete
//assignment 2
//http server main end point banane hai
//js1 file se data lena hai aur usko response me bhejna hai
*/