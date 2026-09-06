console.log("start");
process.nextTick(()=>{
    console.log("nexttick");

});

setTimeout(()=>{
    console.log("settimeout");

},5000);
setTimeout(()=>{
    console.log(" secondsettimeout");

},0);
setImmediate(()=>{
    console.log("setimmediate");

});
console.groupCollapsed("end");