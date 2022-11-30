   type MarkedChar = "green" | "yellow" | "grey"; 
   type MarkedGuess = [MarkedChar, MarkedChar, MarkedChar, MarkedChar, MarkedChar];

function checkGreen(memory: any, result: MarkedGuess, targetArr: string[], guessArr:string[]): MarkedGuess{
for (let index = 0; index<5; index++){ //check for correct positions
    const char = targetArr[index]; //defined char to make easier to read with below
    if (!memory[char]){ //if we're not looking for this letter
        memory[char] = 0; //set a new property for it to equal 0
    } 
    memory[char] += 1; //collect a count for each letter
    if (guessArr[index]===targetArr[index]){ //mark as correct if the guess is in the right space
        result[index] = "green";
        memory[char] -=1; //determined the position of one of the characters so no longer looking for it's position
    }
}
return result
}
function checkYellow(memory: any, result: MarkedGuess, targetArr: string[], guessArr:string[], hiddenTarget: string): MarkedGuess{
    for (let index = 0; index<5; index++){ //second loop to check for correctly positioned guesses
        const char = guessArr[index];
        if (!memory[char]){ //if we're not looking for this letter
            memory[char] = 0; //set a new property for it to equal 0 to prevent an error, probs unnecessary
        } 
        console.log(char, memory[char], hiddenTarget.includes(char), guessArr[index]!==targetArr[index], memory[char] > 0, (guessArr[index]!==targetArr[index] && hiddenTarget.includes(char) && memory[char] > 0));
        //above checks where the condition breaks for testing
        if (guessArr[index]!==targetArr[index] //if the letter is not the correct guess
            && hiddenTarget.includes(char) //but is inside the words
            && memory[char] > 0){ //and we're still expecting another of this character
            result[index] = "yellow"; //state the character is in the wwrong position
        }
        memory[char] -= 1; //expect one fewer of this character
}
return result
}


export function markWordleGuess(guess: string, hiddenTarget: string):MarkedGuess{
        const guessArr:string[] = guess.split(''); //split into characters
        const targetArr:string[] = hiddenTarget.split('');
        let memory:any = {}; //define empty array, think it's any at this point
        let result:MarkedGuess = ["grey", "grey", "grey", "grey", "grey"]
        checkGreen(memory, result, targetArr, guessArr)
        checkYellow(memory, result, targetArr, guessArr, hiddenTarget)
        return result; //returns with alterations for Correct and Wrongly Positioned characters
    }
