//import useRef in order to make use of the <input>
import { useState, useRef } from "react";
import React from "react";

const CoinFlip = () => {
    let [flip, setFlip] = useState(() => {
<<<<<<< HEAD
        return ""; 
    });
    const [numFlips, setNumFlips] = useState(1);
=======
        return "" });
    let numCoins = useRef();
    const [numFlips, setNumFlips] = useState(numCoins);
>>>>>>> c147b1652ca37e9ee8a9fda80035e91da03259da
    const userInputRef = useRef();
    let [userWinLose, setUserWinLose] = useState("");
    let [wins, setWins] = useState(0);
    

    function flipCoin () {
        const userGuess = userInputRef.current.value;
        let flip = Math.floor(Math.random() * 10);

        for(let i = numFlips; i <= numFlips; i++){
            if(flip % 2 == 0){
                setFlip(prevFlip => prevFlip = "Coin Landed On: Heads");
                if(userGuess === "Heads" || userGuess === "heads" || userGuess === "Head" || userGuess === "head"){
                    setUserWinLose(userWinLose = "1 You guessed Heads, and was right!")
                    setWins(wins + 1);
                }
                if(userGuess === "Tails" || userGuess === "tails" || userGuess === "Tail" || userGuess === "tail") {
                    setUserWinLose(userWinLose = "2 You guessed Tails, and was wrong!")
                }

            } else {
                setFlip(prevFlip => prevFlip = "Coin Landed On: Tails");
                if(userGuess === "Tails" || userGuess === "tails" || userGuess === "Tail" || userGuess === "tail"){
                    setUserWinLose(userWinLose = "3 You guessed Tails, and was right!")
                    setWins(wins + 1);

                }
            
                if(userGuess === "Heads" || userGuess === "heads" || userGuess === "Head" || userGuess === "head"){
                    setUserWinLose(userWinLose = "4 You guessed Heads, and was wrong!")
                }
            }
        }
    }

    return(
        <>
        <input ref={numCoins} type="number" id="numCoins" name="numCoins" placeholder="How many coins to flip?"></input>
        <h1>{flip}</h1>
        <h1>{userWinLose}</h1>
        <div>Guess Which Side The Coin Lands On</div>
        <input ref={userInputRef} type="text" id="userGuess" name="userGuess" placeholder="Enter guess here"></input>
        <button onClick={flipCoin}>Flip Coin</button>
        <h2>You have {wins} so far.</h2>
        </>

    )
}


export default CoinFlip;