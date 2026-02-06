function  analyzeText(str) {
    if ( typeof str === 'string' && str.trim() !== '') {
        const strArray = str.split(' ');
        let longWord = strArray[0];
        let totalLength = 0; 
        for (const arr of strArray) {
            totalLength = totalLength + arr.length;

            if (arr.length > longWord.length) {
                longWord = arr;
            }
        }
        return {longwords: longWord, token: totalLength}

    } else {
        return 'Invalid';
    }
}

console.log(analyzeText('My name is Nabil mmmmmmmmmmmmmmmm'));

