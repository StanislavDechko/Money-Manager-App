import { Balance } from "./Balance";
import { BillUI } from "./BillUI";

export interface Bill {
    id: number,
    name: string,
    isActive: boolean,
    balance: Balance,
    ui: BillUI
}

export function getDefaultBill(): Bill {
    return {
        id: 0,
        isActive: false,
        name: "<name>",
        ui: {
          backgroundColor: "#F3F3F3",
          textColor: "#9c9c9c",
          border: {
            width: 2,
            type: "dashed",
            color: "#9c9c9c"
          }
        },
        balance: {
          cashAmount: 0,
          currency: "$",
        }
      };
}

export function getCurrencyFormat(sum: number, currency: string): string {
  if (currency === "$" || currency === "€") {
    return `${currency}${sum}`;
  }

  return `${sum}${currency}`
}