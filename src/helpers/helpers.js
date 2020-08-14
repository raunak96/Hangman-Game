export const displayNotification= (setShowNotification)=>{
    setShowNotification(true);
    setTimeout(()=>setShowNotification(false),2000);
};

export const checkWin = (correctLetters,wrongLetters,selectedWord)=>{
    var status='win';
    if(wrongLetters.length>=6)
        status='lose';
    else{
        selectedWord.split('').forEach(letter=>{
            if(!correctLetters.includes(letter))
                status=''; // not lost yet
        })
    }
    return status; 
}