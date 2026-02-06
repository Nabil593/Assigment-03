function newPrice(currentPrice , discount ) {

    if(typeof currentPrice === 'number' && typeof discount === 'number') {
        if (discount > 0 && discount < 100) {
            const totalDiscount = currentPrice * discount / 100;
            const finalPrice = currentPrice - totalDiscount;
            const result =  finalPrice.toFixed(3);
            return result;
        } else {
            return 'Invalid';
        }
    }else {
        return 'Invalid';
    }
};