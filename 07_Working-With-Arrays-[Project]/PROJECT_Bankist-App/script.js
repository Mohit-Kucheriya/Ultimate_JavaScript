"use strict";

// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/* 
To display the movements on UI, it's a best practice to use a function which will take the array 
of movements and display it in the UI and sort it if required, as we know sort mutates the original array.
So we need to create a copy of the array and sort it.
*/
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const moves = sort ? movements.slice().sort((a, b) => a - b) : movements;

  moves.forEach(function (move, idx) {
    const type = move > 0 ? "deposit" : "withdrawal";

    const html = `
     <div class="movements__row">
          <div class="movements__type movements__type--${type}">${idx + 1
      } ${type}</div>
          <div class="movements__value">${move}€</div>
     </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
// displayMovements(account1.movements);

/*
Now we need to display the total balance i.e. the sum of all the movements.
*/
const calculateDisplayBalance = function (account) {
  const balance = account.movements.reduce(function (acc, move) {
    return acc + move;
  }, 0);

  // Create a new property called balance, so we can access it later
  account.balance = balance;
  labelBalance.textContent = `${balance}€`;
};
// calculateDisplayBalance(account1.movements);

/*
To compute the summary, we will use the same logic as we did for the balance but for both 
i.e. total deposits and total withdrawals.
*/
const calculateDisplaySummary = function (account) {
  const sumIn = account.movements
    .filter((move) => move > 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumIn.textContent = `${sumIn}€`;

  const sumOut = account.movements
    .filter((move) => move < 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumOut.textContent = `${Math.abs(sumOut)}€`;

  const sumInterest = account.movements
    .filter((move) => move > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((interest) => interest >= 1)
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${sumInterest}€`;
};
// calculateDisplaySummary(account1.movements);

/*
To compute username, to take the owner name and convert the first letter to lowerCase, now we will take the 
whole accounts array and will loop through it, using forEach() method. 
We will create a new property called username.
*/
const createUsername = function (account) {
  account.forEach(function (acc) {
    console.log(acc);
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((word) => word[0])
      .join("");
  });
};
createUsername(accounts);
console.log(accounts);

/* 
Implementing the logic for the login, and when the user clicks on the login button or hit the enter key, 
we will check if the user and pin entered by the user are correct, if they are, we will display the 
balance, movements, summary. Even tough we have created a new variable called currentAccount, it will 
point to the account object, 
NOTE - different variable but pointing to the same object in the memory.
*/

const updateUI = function (currentAccount) {
  // Display the movements
  displayMovements(currentAccount.movements);

  // Display the balance
  calculateDisplayBalance(currentAccount);

  // Display the summary we need to pass the whole account object
  calculateDisplaySummary(currentAccount);
};

let currentAccount;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  /*
  Check if the user exists and then check if the pin is correct, the input we get from the user 
  is a string so we need to convert it to a number.
  */
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display the UI and the welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]
      }!`;
    containerApp.style.opacity = 1;

    // Clear the input fields and blur them
    inputLoginUsername.value = "";
    inputLoginPin.value = "";
    inputLoginUsername.blur();
    inputLoginPin.blur();

    // Update the UI
    updateUI(currentAccount);
  }
});

/*
Implementing the logic for the transfer, we'll need to check to whom the user wants to transfer the money, 
and then we'll need to check if the user has enough money to transfer the amount, if the user has enough 
money, we'll need to update the balance, the movements, and the summary.
*/
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const transferTo = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  console.log(`Amount: ${amount}`);
  console.log(`Transfer to: ${transferTo.username}`);

  // Clearing the input fields and blur them
  inputTransferAmount.value = "";
  inputTransferTo.value = "";
  inputTransferAmount.blur();
  inputTransferTo.blur();

  /*
  Check if the amount is positive, the user has enough money, it's a valid user and the transferTo is not the current user i.e. the user is not trying to transfer the money to himself.
  */
  if (
    amount >= 0 &&
    transferTo &&
    currentAccount.balance >= amount &&
    transferTo?.username !== currentAccount.username
  ) {
    // Transfer the money from the current account to the transferTo account
    currentAccount.movements.push(-amount);
    transferTo.movements.push(amount);

    // Update the balance, the movements, and the summary i.e. UI
    updateUI(currentAccount);
  }
});

/*
Implementing the logic for the loan
*/
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  /*
  Check if the amount is positive and the user has at least 10% of the amount in the balance, if the user has enough money, we'll need to update the balance, the movements, and the summary.
  */
  if (
    amount >= 0 &&
    currentAccount.movements.some((move) => move >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);

    // Update the balance, the movements, and the summary i.e. UI
    updateUI(currentAccount);
  }
  // Clear the input fields and blur them
  inputLoanAmount.value = "";
  inputLoanAmount.blur();
});

/*
Implementing the logic to close the coount, we'll need to check if the user and pin entered by the user are correct i.e. the same as the current account.
*/
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);

    // Hide the UI
    containerApp.style.opacity = 0;
  }
  // Clear the input fields and blur them
  inputCloseUsername.value = "";
  inputClosePin.value = "";
  inputCloseUsername.blur();
  inputClosePin.blur();
});

/*
Implementing the sorting logic, when the user clicks on the sort button, we will sort the movements in the UI.
For that, we have created a new variable called sorted, and we will use it to check if the user wants to sort the movements or not. After that, we will call the displayMovements function and pass the sorted variable as a parameter. To get the toggle effect, we will use the ! operator to negate the value of the sorted variable and
updating the sorted variable.
*/
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/*

First Button Click -

displayMovements(currentAccount.movements, !sorted);
At this point, sorted = false
So !sorted = true
Function call is: displayMovements(currentAccount.movements, true);

Then sorted is updated to true with: sorted = !sorted;


Second Button Click -

displayMovements(currentAccount.movements, !sorted);
At this point, sorted = true
So !sorted = false
Function call is: displayMovements(currentAccount.movements, false);

Then sorted is updated to false with: sorted = !sorted;

*/

/*
Converting the nodeList to an array using Array.from()

labelBalance.addEventListener("click", function () {
  const movements = Array.from(document.querySelectorAll(".movements__value"), el => el.textContent.replace("€", ""))
  console.log(movements)
})

*/

// Q1.
const bankDepositsSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((acc, currVal) => acc + currVal, 0);
console.log(bankDepositsSum);

// Q2.
const numDeposit1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov >= 1000).length;
console.log(numDeposit1000);

const numDeposit1000Reduce = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, currVal) => (currVal >= 1000 ? count + 1 : count), 0);
console.log(numDeposit1000Reduce);

// Q3.Create a brand new object using reduce() method. Always remember to return the accumulator.
const sum = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sum, currVal) => {
      currVal > 0 ? (sum.deposit += currVal) : (sum.withdrew += currVal);
      return sum;
    },
    { deposit: 0, withdrew: 0 }
  );
console.log(sum);

// OR

const sum2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sum, currVal) => {
      sum[currVal > 0 ? "deposit" : "withdrew"] += currVal;
      return sum;
    },
    { deposit: 0, withdrew: 0 }
  );

console.log(sum2);

// Q4. Capitalize the first letter of each title except some exceptions.
const capitalizeTitle = function (title) {
  const capitalize = word => word[0].toUpperCase() + word.slice(1);


  const exceptions = [
    "a", "an", "but", "with", "or", "nor", "yet", "so", "as", "at",
    "for", "from", "into", "of", "on", "to", "up", "and",];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => exceptions.includes(word) ? word : capitalize(word)).join(" ");
  return capitalize(titleCase);
};
console.log(capitalizeTitle("this is a title"));
console.log(capitalizeTitle("this is a TOO Long String to Capitalize"));
console.log(capitalizeTitle("and is a TOO Long String to Capitalize"));
