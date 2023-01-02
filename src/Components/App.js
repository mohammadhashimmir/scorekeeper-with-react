import React,{useState} from "react";
import "./App.css"


function App(){
    // scores 
const [score1,setScore1]=useState(0);
const [score2,setScore2]=useState(0);

// score limit 
const [winningScore,setWinningScore]=useState(3);

// state for disabling score buttons
const [gameState,setGameState]=useState(false);

// state for classNames 
const [firstPlayer,setFirstPlayer]=useState("");
const [secondPlayer,setsecondPlayer]=useState("");


const onValueChange=(e)=>{
    setWinningScore(e.target.value)
    setScore1(0);
    setScore2(0);
    setGameState(false);
    setFirstPlayer("");
    setsecondPlayer("");  
    };
     
const on1st=()=>{
    setScore1(score1 +1)
    if(score1===winningScore-1){
        setGameState(true);
        setFirstPlayer("winner");
        setsecondPlayer("loser");
    };
};
const on2nd=()=>{
    setScore2(score2 +1)
    if(score2===winningScore-1){
        setGameState(true);
        setFirstPlayer("loser");
        setsecondPlayer("winner");
    };
};

const onReset=()=>{
    setScore1(0);
    setScore2(0);
    setGameState(false);
    setFirstPlayer("");
    setsecondPlayer("");  
};

    return ( 
    <div className="main">
        <div className="headingDiv">
        <h1>Score Keeper</h1>
        </div>
        <hr/>
      <p><span className={firstPlayer}>{score1}</span> - <span className={secondPlayer}>{score2}</span></p>

      <div className="selectSection">
      <span className="s3">Playing Upto </span><select className="ui dropdown select1" onChange={onValueChange}> 
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    </select>
      </div>
    <hr/>
    <div className="buttonSection">
    <button onClick={on1st} disabled={gameState} className="ui button">+1 Player 1</button> 
      <button onClick={on2nd} disabled={gameState} className="ui button">+1 Player 2</button>
      <button onClick={onReset} className="ui button">Reset</button >
    </div>
      
        </div>
    )
};
export default App;