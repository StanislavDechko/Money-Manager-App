export enum UserUrls {
    Api = "https://localhost:7072/users",
    GetUserInfo = "/getUserInfo",
    CreateBill = "/createBill"
}

export enum BillUrls {
    Api = "https://localhost:7072/bills",
    AddTransactions = "/addTransactions",
    AddTransaction = "/addTransaction",
    CreateBill = "/createBill",
    EditBill = "/editBill",
    DeleteBill = "/deleteBill"
}

export enum TransactionUrls {
    Api = "https://localhost:7072/transactions",
    GetTransactions = "/getTransactions",
    DeleteTransaction = "/deleteTransaction",
    GetChartData = "/getChartData",
    GetLineChartData = "/getLineChartData"
}