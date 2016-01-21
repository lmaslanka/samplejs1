function checkStringAtIndexForNumbersNoZeroAndSign(value, index) {
    if(value.charAt(index) === '-' 
    || value.charAt(index) === '1' 
    || value.charAt(index) === '2'
    || value.charAt(index) === '3'
    || value.charAt(index) === '4'
    || value.charAt(index) === '5'
    || value.charAt(index) === '6'
    || value.charAt(index) === '7'
    || value.charAt(index) === '8'
    || value.charAt(index) === '9') {
        return true;
    }
    
    return false;
}

function checkStringAtIndexForNumbersOnly(value, index) {
    if(value.charAt(index) === '0' 
    || value.charAt(index) === '1' 
    || value.charAt(index) === '2'
    || value.charAt(index) === '3'
    || value.charAt(index) === '4'
    || value.charAt(index) === '5'
    || value.charAt(index) === '6'
    || value.charAt(index) === '7'
    || value.charAt(index) === '8'
    || value.charAt(index) === '9') {
        return true;
    }
    
    return false;
}