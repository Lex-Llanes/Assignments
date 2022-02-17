import { useState } from "react";

const CoinFlip = () => {
    
    const [flip, setFlip] = useState("")
    const [difficulty, setDiff] = useState(10)
    
    function flipCoin () {

        let flip = Math.floor(Math.random() * 10);


        if(flip % 2 == 0){
            setFlip(flip = "Heads");
        } else {
            setFlip(flip = "Tails");
        }
    }





    return(
        <>
        <h1>{flip}</h1>
        <button onClick={flipCoin}>Flip Coin</button>
        <div>Guess Which Side The Coin Lands On</div>
        <input type="text" id="userGuess" name="userGuess" placeholder="Enter guess here"></input>
        </>

    )
}


export default CoinFlip;