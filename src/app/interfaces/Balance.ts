import { Transaction } from "./Transaction"

export interface Balance {
    cashAmount: number,
        currency: string,
        history?: {
            totalIncome: number,
            totalExpenses: number,
            transactions: Transaction[]
        }
}