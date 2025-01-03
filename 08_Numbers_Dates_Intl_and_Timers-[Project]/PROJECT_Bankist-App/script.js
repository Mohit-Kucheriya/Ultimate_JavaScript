"use strict";

// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2024-12-16T17:01:17.194Z",
    "2024-12-21T23:36:17.929Z",
    "2024-12-22T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];
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
Just a helper function to format the date.
*/
const formatedDate = function (date, locale) {
  const calDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const dayPasses = calDaysPassed(new Date(), date);
  if (dayPasses === 0) return "Today";
  if (dayPasses === 1) return "Yesterday";
  if (dayPasses <= 7) return `${dayPasses} days ago`;
  else {
    // const currentDate =  
    // const currentMonth = `${date.getMonth() + 1}`.padStart(2, 0);
    // const currentYear = date.getFullYear();

    // return `${currentDate}/${currentMonth}/${currentYear}`;

    return new Intl.DateTimeFormat(locale).format(date);
  }
};

// Formatting the currency using Intl.NumberFormat(locale, {style: "currency", currency: currency}).format(value);
const formattCurr = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

/* 
To display the movements on UI, it's a best practice to use a function which will take the array 
of movements and display it in the UI and sort it if required, as we know sort mutates the original array.
So we need to create a copy of the array and sort it.
*/
const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = "";

  const combinedMovementDate = account.movements.map((move, i) => ({
    movement: move,
    movementDate: account.movementsDates.at(i),
  }));
  console.log(combinedMovementDate);

  if (sort) combinedMovementDate.sort((a, b) => a.movement - b.movement);

  combinedMovementDate.forEach(function (obj, idx) {
    const { movement, movementDate } = obj;

    const date = new Date(movementDate);

    const displayDate = formatedDate(date, account.locale);

    const type = movement > 0 ? "deposit" : "withdrawal";

    const formattedMov = formattCurr(
      movement,
      account.locale,
      account.currency
    );

    const html = `
     <div class="movements__row">
          <div class="movements__type movements__type--${type}">${idx + 1
      } ${type}</div>
              <div class="movements__date">${displayDate}</div>

          <div class="movements__value">${formattedMov}</div>
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
  labelBalance.textContent = formattCurr(
    balance,
    account.locale,
    account.currency
  );
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
  labelSumIn.textContent = formattCurr(sumIn, account.locale, account.currency);

  const sumOut = account.movements
    .filter((move) => move < 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumOut.textContent = formattCurr(
    Math.abs(sumOut),
    account.locale,
    account.currency
  );

  const sumInterest = account.movements
    .filter((move) => move > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((interest) => interest >= 1)
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = formattCurr(
    sumInterest,
    account.locale,
    account.currency
  );
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
  displayMovements(currentAccount);

  // Display the balance
  calculateDisplayBalance(currentAccount);

  // Display the summary we need to pass the whole account object
  calculateDisplaySummary(currentAccount);
};


// Logout timer 
const startLogouttimer = function () {
  let time = 120;

  /*
  Here is the catch - The callback funtion for the first time after 1000 milliseconds, and we want to execute the callback function immediately. The trick is to export this into a separate function then call it 
  immediately and then also start calling it every second using the setInterval() function.
  */

  // Call the timer function every 1000 milliseconds i.e. 1 second
  /*
  let timer = setInterval(() => {
    let minute = `${Math.trunc(time / 60)}`.padStart(2, 0);
    let second = `${time % 60}`.padStart(2, 0);

    labelTimer.textContent = `${minute}:${second}`;

    // Decrement the time by 1s
    time--;

    // If the time is 0, clear the interval and display the logout message
    if (time === 0) {
      clearInterval(timer)
      containerApp.style.opacity = 0;
      labelWelcome.textContent = "Log in to get started";
    }

  }, 1000);
  */
  const tick = function () {
    let minute = `${Math.trunc(time / 60)}`.padStart(2, 0);
    let second = `${time % 60}`.padStart(2, 0);

    labelTimer.textContent = `${minute}:${second}`;

    // If the time is 0, clear the interval and display the logout message
    if (time === 0) {
      clearInterval(timer)
      containerApp.style.opacity = 0;
      labelWelcome.textContent = "Log in to get started";
    }

    // Decrement the time by 1s
    time--;

  }

  tick() // Call the tick function immediately
  let timer = setInterval(tick, 1000)
  return timer
}

let currentAccount, timer;

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

    // Display the current date and time
    const now = new Date();
    // const currentDate = `${now.getDate()}`.padStart(2, 0);
    // const currentMonth = `${now.getMonth() + 1}`.padStart(2, 0);
    // const currentYear = now.getFullYear();
    // const currentHour = `${now.getHours()}`.padStart(2, 0);
    // const currentMinute = `${now.getMinutes()}`.padStart(2, 0);

    // labelDate.textContent = `${currentDate}/${currentMonth}/${currentYear}, ${currentHour}:${currentMinute}`;

    // Using Intl.DateTimeFormat API
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
  }

  // Clear the input fields and blur them
  inputLoginUsername.value = "";
  inputLoginPin.value = "";
  inputLoginUsername.blur();
  inputLoginPin.blur();

  // Start the logout timer, if the timer is already running, clear it first
  if (timer) clearInterval(timer)
  timer = startLogouttimer();

  // Update the UI
  updateUI(currentAccount);
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

    // Add transfer date to the array of dates for the current account and transferTo account
    currentAccount.movementsDates.push(new Date().toISOString());
    transferTo.movementsDates.push(new Date().toISOString());

    // Update the balance, the movements, and the summary i.e. UI
    updateUI(currentAccount);

    // Reset the logout timer
    clearInterval(timer)
    timer = startLogouttimer();
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
    // setTimeout to simulate the delay of 2500ms (2.5 seconds) to show the loan effect
    setTimeout(() => {
      currentAccount.movements.push(amount);

      // Add loan date to the array of dates for the current account
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update the balance, the movements, and the summary i.e. UI
      updateUI(currentAccount);

      // Reset the logout timer
      clearInterval(timer)
      timer = startLogouttimer();
    }, 2500);
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
  displayMovements(currentAccount, !sorted);
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
  const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

  const exceptions = [
    "a",
    "an",
    "but",
    "with",
    "or",
    "nor",
    "yet",
    "so",
    "as",
    "at",
    "for",
    "from",
    "into",
    "of",
    "on",
    "to",
    "up",
    "and",
  ];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");
  return capitalize(titleCase);
};
console.log(capitalizeTitle("this is a title"));
console.log(capitalizeTitle("this is a TOO Long String to Capitalize"));
console.log(capitalizeTitle("and is a TOO Long String to Capitalize"));
