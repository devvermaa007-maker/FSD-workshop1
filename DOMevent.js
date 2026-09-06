import {EventEmitter} from "node:events";

function createDOMElement(){
    const emitter=new EventEmitter();

    return {
        addEventListener(eventName , callback){
              emitter.on(eventName , callback);

        },
        removeEventListener(eventName,callback){
            
             emitter.off(eventName , callback);


        },
        dispatchEvent(event){
             emitter.emit(event.type ,event);

             


        },
    };
}
const button=createDOMElement();
button.addEventListener('click',()=>{
    console.log("button clicked");

});
function handleclick(event){

}
button.dispatchEvent({
     
    type:"click",
    detail:"hello from node js",

});
function handleClick(event){
    console.log("button clicked");
     console.log('Event type: $(event.type)');
      console.log('message: ${event.detail} ');

}
function handleclick(){
    console.log("data saved successfully")

}

button.addEventListener("save",handleclick);



