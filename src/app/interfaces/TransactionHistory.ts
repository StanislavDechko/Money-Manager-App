import { Transaction } from "./Transaction";

export interface TransactionHistory {
    totalIncome: number,
    totalExpenses: number,
    transactions: Transaction[]
}