//import useRef ins order to make use of the <input>
import { useState, useRef } from "react";
import React from "react";

const CoinFlip = () => {

    let [flip, setFlip] = useState(() => {
        return "" });
    const [numFlips, setNumFlips] = useState(1);
    const userInputRef = useRef();
    let [userWinLose, setUserWinLose] = useState("")
    const userGuess = userInputRef.current.value;

    function flipCoin () {
        let flip = Math.floor(Math.random() * 10);



        for(let i = numFlips; i <= numFlips; i++){
            if(flip % 2 == 0){
                setFlip(prevFlip => prevFlip = "Coin Landed On: Heads");
                if(userGuess === "Heads" || userGuess === "heads" || userGuess === "Head" || userGuess === "head"){
                 setUserWinLose(userWinLose = "1 You guessed Heads, and was right!")
                
                }
                if(userGuess === "Tails" || userGuess === "tails" || userGuess === "Tail" || userGuess === "tail") {
                    setUserWinLose(userWinLose = "2 You guessed Tails, and was wrong!")
                }

            } else {
                setFlip(prevFlip => prevFlip = "Coin Landed On: Tails");
                if(userGuess === "Tails" || userGuess === "tails" || userGuess === "Tail" || userGuess === "tail"){
                    setUserWinLose(userWinLose = "3 You guessed Tails, and was right!")
                }
            
                if(userGuess === "Heads" || userGuess === "heads" || userGuess === "Head" || userGuess === "head"){
                    setUserWinLose(userWinLose = "4 You guessed Heads, and was wrong!")
                }
            }


        }
    }

    return(
        <>
        <h1>{flip}</h1>
        <h1>{userWinLose}</h1>
        <div>Guess Which Side The Coin Lands On</div>
        <input ref={userInputRef} type="text" id="userGuess" name="userGuess" placeholder="Enter guess here"></input>
        <button onClick={flipCoin}>Flip Coin</button>
        </>

    )
}


export default CoinFlip;