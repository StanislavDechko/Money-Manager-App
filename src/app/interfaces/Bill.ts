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

export function getDefaultBill(): Bill {
    return {
        isActive: false,
        name: "<name>",
        ui: {
          backgroundColor: "#F3F3F3",
          textColor: "#9c9c9c",
          border: "2px dashed #9c9c9c"
        },
        balance: {
          cashAmount: "0",
          currency: "$",
        }
      };
}