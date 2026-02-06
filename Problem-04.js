function gonoVote(array) {
    const haArray = [];
    const naArray = [];
    if (Array.isArray(array) === true) {
        for (const arr of array) {
            if (arr.includes('ha')) {
                haArray.push(arr);
            } else {
                naArray.push(arr);
            }
        }
        const haCount = haArray.length;
        const naCount = naArray.length;
        if (haCount > naCount) {
            return true;
        } else if (haCount === naCount) {
            return 'equal';
        } else {
            return false;
        }
    } else {
        return 'Invalid';
    }
}

console.log(gonoVote(['ha', 'na', 'na']));