// Ensure the JS file is connected
console.log("JavaScript file is linked.");

// Function to generate the Mad Libs text
function generateMadLibs() {
    // Hard-coded values for the initial implementation
    let noun = "dog";
    let verb = "jumped";
    let adjective = "happy";
    let adverb = "quickly";
    let place = "park";

    // Concatenating the mad libs string
    let madLibsText = `In a ${place}, there was a ${adjective} ${noun} who loved to ${verb} ${adverb}. One day, while ${verb}ing ${adverb}, it accidentally knocked over a giant ${noun}, causing a hilarious chain reaction that made everyone in the ${place} burst into laughter!`;

    // Updating the p tag to show the generated mad libs text
    document.getElementById('mad-libs').innerText = madLibsText;
}

// Function to get input value by ID
function getInputValue(id) {
    return document.getElementById(id).value;
}

// Example of replacing hard-coded values with user inputs
function generateMadLibs() {
    let noun = getInputValue('noun');
    let verb = getInputValue('verb');
    let adjective = getInputValue('adjective');
    let adverb = getInputValue('adverb');
    let place = getInputValue('place');

    let madLibsText = `In a ${place}, there was a ${adjective} ${noun} who loved to ${verb} ${adverb}. One day, while ${verb}ing ${adverb}, it accidentally knocked over a giant ${noun}, causing a hilarious chain reaction that made everyone in the ${place} burst into laughter!`;
    document.getElementById('mad-libs').innerText = madLibsText;
}
