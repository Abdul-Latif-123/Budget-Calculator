let accountDetails = JSON.parse(localStorage.getItem("CURRENT-USER"));

welcomemsg.innerHTML = `USER (${accountDetails.username})`;

function logoutClick() {
    location.href = "./index.html";
}

function iSubmitClick() {
    var incometype = itype.value
    var incomeamount = iamount.value

    if (incometype == "" || incomeamount == "")
        alert("Please fill in all the fields");
    else {
        balanceresult.innerHTML = Number(balanceresult.innerHTML) + Number(incomeamount);
        tableresult.innerHTML += `
        <tr>
        <th scope="row">Income</th>
        <td>${incometype}</td>
        <td>${incomeamount}</td>
        </tr>
        `;
        alert("Income details added");
    }
}

function eSubmitClick() {
    var encometype = etype.value
    var encomeamount = eamount.value

    if (encometype == "" || encomeamount == "")
        alert("Please fill in all the fields");
    else {
        if (encomeamount <= Number(balanceresult.innerHTML)) {
            balanceresult.innerHTML = Number(balanceresult.innerHTML) - Number(encomeamount);
            spentresult.innerHTML = Number(spentresult.innerHTML) + Number(encomeamount);
            tableresult.innerHTML += `
            <tr>
            <th scope="row">Expense</th>
            <td>${encometype}</td>
            <td>${encomeamount}</td>
            </tr>
            `;
            alert("Expense details added");
        }
        else
            alert("Insufficient balance")
    }
}

function resetClick() {
    tableresult.innerHTML = ``;
    balanceresult.innerHTML = `0`;
    spentresult.innerHTML = `0`;
    itype.value = ``
    iamount.value = ``
    etype.value = ``
    eamount.value = ``
}