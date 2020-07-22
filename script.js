    // login button event handler
    const loginBtn = document.getElementById('login');
    loginBtn.addEventListener('click', function(){
        const loginArea = document.getElementById('login-area');
        loginArea.style.display = "none";
        const transactionArea = document.getElementById('transaction-area');
        transactionArea.style.display = "block";
    });

    //deposit button event handler
    const depositBtn = document.getElementById('deposit-btn');
    depositBtn.addEventListener('click', function(){
        const depositAmount = document.getElementById('depositAmount').value;
        const depositNumber = parseFloat(depositAmount);

        const currentDeposit = document.getElementById('currentDeposit').innerText;
        const currentDepositNumber = parseFloat(currentDeposit);

        const totalDeposit = depositNumber + currentDepositNumber;
        document.getElementById('currentDeposit').innerText = totalDeposit;

        document.getElementById('depositAmount').value = "";

        const currentBalance = document.getElementById("currentBalance").innerText;
        const currentBalanceNumber = parseFloat(currentBalance);

        const newBalance = depositNumber + currentBalanceNumber;

        document.getElementById("currentBalance").innerText = newBalance;
    });

    // withdraw button event handler

    const withdrawBtn = document.getElementById('withdraw-btn');
    withdrawBtn.addEventListener('click', function(){
        const withdrawAmount = document.getElementById('withdrawAmount').value;
        const withdrawNumber = parseFloat(withdrawAmount);

        const currentWithdraw = document.getElementById("currentWithdraw").innerText;
        const currentWithdrawNumber = parseFloat(currentWithdraw);

        const totalWithdraw = currentWithdrawNumber + withdrawNumber;

        document.getElementById("currentWithdraw").innerText = totalWithdraw;

        document.getElementById('withdrawAmount').value = "";

        const currentBalance = document.getElementById("currentBalance").innerText;
        const currentBalanceNumber = parseFloat(currentBalance);

        const newBalance = currentBalanceNumber - withdrawNumber;

        document.getElementById("currentBalance").innerText = newBalance;
    });