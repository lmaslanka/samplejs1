var oddValues = [];
var evenValues = [];

document.getElementById('evenSum').innerHTML = '0.00';
document.getElementById('evenAvg').innerHTML = '0.00';
document.getElementById('evenVar').innerHTML = '0.00';
document.getElementById('evenSD').innerHTML = '0.00';

document.getElementById('oddSum').innerHTML = '0.00';
document.getElementById('oddAvg').innerHTML = '0.00';
document.getElementById('oddVar').innerHTML = '0.00';
document.getElementById('oddSD').innerHTML = '0.00';

function validateInput() {
    
    var value = document.getElementById('txtValue').value;
    for(var i = 0; i < value.length;i++) {
        if(i === 0) {
            if(!checkStringAtIndexForNumbersNoZeroAndSign(value, i)) {
                document.getElementById('txtValue').value = '';
            }
        } else {
            if(!checkStringAtIndexForNumbersOnly(value, i)) {
                document.getElementById('txtValue').value = '';
            }   
        }
    }
}

function addValue() {
    
    var value = parseInt(document.getElementById('txtValue').value);
    if((value % 2) === 0) {
        evenValues.push(value);
        console.log(value + ' was pushed to even array');
    } else {
        oddValues.push(value);
        console.log(value + ' was pushed to odd array');
    }
    
    updateValues('even', evenValues);
    updateValues('odd', oddValues);
}

function updateValues(prefix, values) {
    var count = values.length;
    var sum = calculateSum(values);
    var mean = calculateMean(sum, count);
    var variance = calculateVariance(values, mean, count);
    var sd = calculateStandardDeviation(variance);
    
    updateDisplay(prefix, sum, mean, variance, sd);
}

function updateDisplay(prefix, sum, mean, variance, sd) {
    document.getElementById(prefix + 'Sum').innerHTML = sum.toFixed(2).toString();
    document.getElementById(prefix + 'Avg').innerHTML = mean.toFixed(2).toString();
    document.getElementById(prefix + 'Var').innerHTML = variance.toFixed(2).toString();
    document.getElementById(prefix + 'SD').innerHTML = sd.toFixed(2).toString();
}

function calculateSum(values) {
    
    var sum = 0;
    for(var i = 0; i < values.length;i++) {
        sum += values[i];
    }
    
    return sum;
}

function calculateMean(sum, count) {

    if(count === 0) {
        return 0;
    }
    
    return sum / count;
}

function calculateVariance(values, mean, count) {
    
    if(values.length === 0) {
    
        return 0;
    }
           
    var deviation = 0;
    for(var i = 0; i < values.length; i++) {
        deviation += Math.pow((values[i] - mean), 2);
    }
    
    return deviation / count;    
}

function calculateStandardDeviation(variance) {
    
    return Math.sqrt(variance);    
}