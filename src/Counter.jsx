import {useState} from "react"

function Counter({color}){
    const [count , setCount] = useState(10);
    const str = "$";
    const handleLower = () =>{
        if(count > 10){
            setCount(count - 10)
        }
    }

    return(
        <div>
            <h1 style={{color : color ? "black":"gold"}}>Gambling</h1>
            <h1 style={{color : color ? "lightgreen":"green"}}>Avg.Bet : $10 </h1>
            <h1 style={{color : color ? "gray":"gray"}}>Your Bet : {str}{count}</h1>
            <button onClick={() => setCount(count + 10)} >BET $10</button>
            <button onClick={() => setCount(count + 100)} >BET $100</button><br />
            <button onClick={handleLower} >LOWER $10</button>
            <button onClick={() =>  setCount(count>110?count - 100: 10)} >LOWER $100</button>
        </div>
    )
}

export default Counter