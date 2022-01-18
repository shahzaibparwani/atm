let div = document.querySelector('div');
div.style.display = 'none';

function add () { 
    // Get Amount
    var amount = document.getElementById("amount").value;

    if (amount >= 100 && amount <= 100000) {
        div.style.display= 'block';
    } else {
        alert('The amount you entered is out of range, please enter between 100 to 100,000')
    }
};

function dist (preferredNote, divID) {

    // Get Amount
    var amount = document.getElementById("amount").value;

    // Update Selected Currency 
    document.getElementById('selectedNote').innerText = preferredNote
    
    // Set default amount value
    var remaining = amount;

    // preferred note multiply by 200
    var maxNotesAmount = 200;

    // Get remainder and quotation
    var remainder = amount % preferredNote
    var quotient = amount / preferredNote

    var notes = [500, 100, 50, 20, 10, 5, 1];

    // check point if quotient is greater than 200
    if (quotient > 200) {
        remaining = remaining - preferredNote * 200
    } else {
        maxNotesAmount = Math.floor(quotient)
        remaining = remaining - Math.floor(quotient) * preferredNote
    }
    
    // update selected note currect count
    document.getElementById(divID).innerText = maxNotesAmount

    // For loop for other currency
    for (let i = 0; i < notes.length; i++) { 
        if (preferredNote != notes[i]) {
            // var remainderRest = remaining % notes[i]
            var quotientRest = remaining / notes[i]
            remaining = remaining - (Math.floor(quotientRest) * notes[i])
            document.getElementById('note'+notes[i]).innerText = Math.floor(quotientRest)
        }
    }
};
