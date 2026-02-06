function validOtp(otp) {
    if (typeof otp === 'string') {
        if (otp.startsWith('ph-') && otp.length === 8) {
            return true;
        } else {
            return false;
        }
    } else {
        return 'Invalid';
    }
};