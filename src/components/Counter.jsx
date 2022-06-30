import React, {useState} from "react";

const Counter = function(){
      const[count,setCount] = useState(0)


         function increament(){
         setCount(count +1)
      
         }
    
    
         function decreament(){
          setCount(count -1)
          
         }
    

      return(
        <div>
        <h1>{count}</h1>
        <button onClick={increament}>Increament</button>
        <button onClick={decreament}>Decreament</button>
        </div>
      )
      }

export default Counter