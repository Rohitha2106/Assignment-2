// Function to count vowels and consonants
function countCharacters() {
    var input = document.getElementById("countInput").value;
    var warningElement = document.getElementById("inputWarning");
    if (/\d/.test(input)) {
        if (!warningElement) {
            warningElement = document.createElement('p');
            warningElement.id = 'inputWarning';
            warningElement.style.color = 'red';
            document.getElementById("count-section").appendChild(warningElement);
        }
        warningElement.textContent = 'Please enter only letters.';
        document.getElementById("vowelsCount").textContent = 0;
        document.getElementById("consonantsCount").textContent = 0;
        return;
    } else {
        if (warningElement) {
            warningElement.remove();
        }
    }

    var vowels = input.match(/[aeiou]/gi);
    var consonants = input.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    document.getElementById("vowelsCount").textContent = vowels ? vowels.length : 0;
    document.getElementById("consonantsCount").textContent = consonants ? consonants.length : 0;
}

// Function to check if the series of numbers is a palindrome
function checkPalindrome() {
    var input = document.getElementById("palindromeInput").value;
    var outputElement = document.getElementById("palindromeResult");
    if (!/^\d+$/.test(input)) {
        outputElement.textContent = 'Please enter only numbers.';
        outputElement.style.color = 'red';
        return;
    }
    var reversed = input.split('').reverse().join('');
    var result = input === reversed ? "It's a palindrome." : "It's not a palindrome.";
    document.getElementById("palindromeResult").textContent = result;
}

// Function to calculate the total bill including the tip
function calculateTotal() {
    var bill = parseFloat(document.getElementById("billInput").value);
    var tipPercentage = parseFloat(document.getElementById("tipInput").value);
    var tipAmount = bill * (tipPercentage / 100);
    var total = bill + tipAmount;
    document.getElementById("totalAmount").textContent = total.toFixed(2);
}
