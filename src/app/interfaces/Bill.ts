export interface Bill {
    name: string,
    isActive: boolean,
    balance: {
        cashAmount: string,
        currency: string,
        history?: {
            totalIncome: number,
            totalExpenses: number
        }
    },
    ui: {
        textColor: string,
        backgroundColor: string,
        border?: string
    }
}