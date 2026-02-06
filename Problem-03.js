function finalScore (omr) {
    const right = omr.right;
    const wrong = omr.wrong;
    const skip = omr.skip;
    const result = right + wrong + skip;
    
    if (result === 100) {
        const rightAnswer = right * 1;
        const wrongAnswer = wrong * -0.5;
        const skipAnswer = skip * 0;
        const finalResult = rightAnswer + wrongAnswer + skipAnswer;
        return Math.round(finalResult); 
    } else {
        return 'Invalid';
    }
}


