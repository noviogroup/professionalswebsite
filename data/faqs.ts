export type FAQ = {
  question: string;
  answer: string;
};

export const primaryFaqsLeft: FAQ[] = [
  {
    question: "What are the three main financial statements?",
    answer:
      "The balance sheet, income statement and cash flow statement. Together they map assets, liabilities, equity, revenue and liquidity through the chart of accounts."
  },
  {
    question: "What’s the accounting equation?",
    answer: "Assets = Liabilities + Equity. The equation ensures every financial transaction stays balanced within the ledger."
  },
  {
    question: "What is accrual basis accounting?",
    answer: "Accrual accounting records revenue when earned and expenses when incurred, regardless of when cash changes hands."
  },
  {
    question: "What does working capital mean?",
    answer: "Working capital equals current assets minus current liabilities, revealing the liquidity available for day-to-day operations."
  }
];

export const primaryFaqsRight: FAQ[] = [
  {
    question: "What is the time value of money?",
    answer:
      "The time value of money (TVM) recognizes that one dollar today is worth more than one dollar tomorrow because of potential earning capacity."
  },
  {
    question: "What is a liquidity ratio?",
    answer:
      "Liquidity ratios measure a company’s ability to cover short-term obligations using assets that can quickly convert to cash."
  },
  {
    question: "What is a pro forma financial statement?",
    answer:
      "Pro forma statements model future performance by adjusting historical results for planned transactions or projected scenarios."
  },
  {
    question: "Difference between revenue and income?",
    answer:
      "Revenue reflects total sales generated. Income, or profit, is revenue after deducting expenses, taxes and costs of doing business."
  }
];

export const additionalFaqs: FAQ[] = [
  {
    question: "What is the difference between a stock and a bond?",
    answer:
      "Stock represents equity ownership in a company, while a bond is a debt instrument where investors lend money in exchange for interest payments."
  },
  {
    question: "What is the importance of a credit score?",
    answer:
      "Credit scores help lenders evaluate creditworthiness, influencing loan approvals, interest rates and access to financial products."
  },
  {
    question: "What is the difference between a journal and a ledger?",
    answer:
      "Journals record transactions chronologically as they occur. Ledgers sort those entries by account to provide running balances."
  },
  {
    question: "What is the difference between Payable and Receivable?",
    answer:
      "Accounts payable are obligations owed to suppliers, while accounts receivable represent money due from customers."
  }
];
