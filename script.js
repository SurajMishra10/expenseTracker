const AddIncome = document.getElementById("add-income");
const expenseDic = document.getElementById("expense-description");
const expenseCat = document.getElementById("expense-category");
const expenseAmt = document.getElementById("expense-amount");

const expenseInput = document.getElementById("expense-input");
const amountInput = document.getElementById("amount-input");
const categoryInput = document.getElementById("category-input");
const transactionList = document.getElementById("transaction-history");
const totalExpense = document.getElementById("total-expenses");
const totalIncome = document.getElementById("total-income");
const balance = document.getElementById("balance");
const incomeAmount = document.getElementById("income-amount");
const description = document.getElementById("income-description");
let finelVal = 0;
let expValue = 0;
let totalBal = 0;

AddIncome.addEventListener("click", () => {
  const AddDescription = description.value.trim();
  let Income = incomeAmount.value.trim();
  let totalInc = parseFloat(Income);
  finelVal += totalInc;
  totalIncome.innerText = finelVal;
  console.log(AddDescription);
  console.log(Income);
  description.value = "";
  incomeAmount.value = "";
});

function addExpense() {
  const expenseDis = expenseDic.value.trim();
  const expenseCate = expenseCat.value;
  const expenseAmount = expenseAmt.value.trim();
  let totalExp = parseFloat(expenseAmount);
  expValue += totalExp;
  totalExpense.innerText = expValue;
  totalBal = finelVal - expValue;
  balance.innerText = totalBal;
  expenseDic.value = "";
  expenseCat.value = "Housing";
  expenseAmt.value = "";
  addIncome(expenseDis, expenseCate, expenseAmount);
}

function addIncome(expenseDis, expenseCate, expenseAmount) {
  const transactionRow = document.createElement("tr");
  transactionRow.innerHTML = `
        <td>${expenseDis}</td>
        <td>${expenseCate}</td>
        <td>${expenseAmount}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

  transactionList.appendChild(transactionRow);

  transactionRow
    .querySelector(".delete-btn")
    .addEventListener("click", function () {
      transactionRow.remove();
    });
}

function updateSummary() {
  let totalExpenses = 0;
  let totalIncomes = 0;

  const transactions = transactionList.querySelectorAll("tr");

  transactions.forEach(function (transaction) {
    const amount = parseFloat(transaction.children[2].textContent);
    const category = transaction.children[1].textContent;

    if (category === "Income") {
      totalIncomes += amount;
    } else {
      totalExpenses += amount;
    }
  });

  totalExpense.textContent = totalExpenses.toFixed(2);
  totalIncome.textContent = totalIncomes.toFixed(2);
  balance.textContent = (totalIncomes - totalExpenses).toFixed(2);
}
