// Function to calculate mortgage repayment
function calculateMortgagePayment() {
    // Retrieving values from browser
    var loanAmount = parseFloat(document.getElementById("LoanMortgage").value); // Loan amount in dollars
    var annualInterestRate = parseFloat(document.getElementById("InterestRate").value); // Annual interest rate in percentage
    var loanTermYears = parseFloat(document.getElementById("LoanTerm").value); // Loan term in years
    var DownPayment = parseFloat(document.getElementById("DownPayment").value); // Loan Down Payment
    var PayFreq = document.getElementById("PaymentFrequency"); // Loan Payment Frequency
    var Payment = 0;

    Payment = mortgageCalculationFunction(loanAmount, annualInterestRate, loanTermYears, DownPayment, PayFreq);

    // Display the result in the browser
    document.getElementById("result").textContent = PayFreq.options[PayFreq.selectedIndex].textContent + "mortgage payment: €" + Payment.toFixed(2);
}

function mortgageCalculationFunction(loanAmount, annualInterestRate, loanTermYears, DownPayment, PayFreq) {
    // Getting final loan amount after down payment
    var currentAmount = loanAmount - DownPayment;
    
    // Declaring varibles for payment and interest rate
    var PaymentRate, InterestRate;



    // Calculating the Payment rate and interest rate according to what the use selected in the drop box
    switch(PayFreq.value){
        case "1":
            PaymentRate = loanTermYears * 52;
            InterestRate = annualInterestRate / 52 / 100;
            break;
        case "2":
            PaymentRate = loanTermYears * 12;
            InterestRate = annualInterestRate / 12 / 100;
            break;
        case "3":
            PaymentRate = loanTermYears * 2;
            InterestRate = annualInterestRate / 2 / 100;
            break;
        case "4":
            PaymentRate = loanTermYears;
            InterestRate = annualInterestRate / 100;
            break;
        default:
            console.log("Invalid payment frequency selected");
            return; // Return undefined if payment frequency is invalid
    }

    // returning payment using the formula for fixed-rate mortgages
    return currentAmount * InterestRate * Math.pow(1 + InterestRate, PaymentRate) / (Math.pow(1 + InterestRate, PaymentRate) -1) ;
}

function resetCalc() {
    // Reset form fields to their default values
    document.getElementById("calculate-form").reset();
    
    // Clear the order summary
    document.getElementById("result").textContent = "";
}

