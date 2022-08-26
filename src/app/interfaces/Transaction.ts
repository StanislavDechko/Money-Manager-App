export interface Transaction {
    id?: number;
    description: string,
    date: Date,
    sum: number,
    currency: string,
    isIncome: boolean,
    category?: string
}