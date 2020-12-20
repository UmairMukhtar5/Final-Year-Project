const readInput = (input) => {
    var processedInputs = [];

    input.forEach((element) => {
        if(element.length) {
            processedInputs.push(element.trim().replace(/[^a-zA-Z ]/g, '').toUpperCase());
        }
    });

    return processedInputs;
}


module.exports = { readInput };