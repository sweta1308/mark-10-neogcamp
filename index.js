const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const errorMsg = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll("#no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 1];

checkBtn.addEventListener("click", function validateBillAndCashAmouunt() {
    hideMsg();
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }   else {
            showMsg("Cash given should be greater than or equal to the bill amount.");
        }
    }   else {
        showMsg("Invalid Bill Amount");
    }
});

function hideMsg() {
    message.style.display = "none";
}

function showMsg(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++); {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}
