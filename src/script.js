"use strict";

// TODO - write your code here.

// arrow function name #randomDamage
// arrow function name #chooseOption , 2 things Opt1 and Opt2
// declare function name #attackPlayer //parameter named health 


//let selected = chooseOption(Opt1,Opt2)
//   console.log(selected);

    
//const attackPlayer = (player1,player2) => `${player1} and ${player2}`;

const chooseOption = (Opt1,Opt2) => {
     let randomNum = Math.floor(Math.random()+0.5) 
         randomNum = (randomNum===0) ? Opt1: Opt2;
         return randomNum;
}

const randomDamage = () =>  {
    let damage = Math.floor(Math.random()*10)
    return damage;
}

const attackPlayer = (health) => {
      health = health - randomDamage();
      return health;
}


const logHealth = (player1,health) => {
    console.log(`${player1} health:${health}`);

}
const logDeath = (winner,loser) => {
    console.log(`${winner} defeated:${loser}`)
}
const isDead = (health) => {
    //Boolean(health<=0)
    if (health <= 0) {
    return true;
    }
    
}


const fight = (player1 ,player2 ,player1Health ,player2Health) => {

while (true) { 
//debugger;

    let attacker = (chooseOption(player1,player2));
    if (isDead (player2Health)) {
        logDeath(player1,player2) 
        break; 
    } 
    if (isDead (player1Health)) {
        logDeath(player2,player1);
        break;
    } 

    if (attacker === player1) {
        player2Health = attackPlayer(player2Health);
        logHealth(player2,player2Health);
    } else {
        player1Health = attackPlayer(player1Health)
        logHealth(player1,player1Health);
    }
}
   
}

fight  ("Mitch","Adam",100,100); 