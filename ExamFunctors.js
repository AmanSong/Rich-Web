let portfolio = [
    { "currency": "BRL", "balance": 500 },
    { "currency": "CHF", "balance": 200 },
    { "currency": "GBP", "balance": 10 },
    { "currency": "JPY", "balance": 10000 },
    { "currency": "RUB", "balance": 500 },
    { "currency": "USD", "balance": 1000 }
];

let rateinfo = {
    "result": "success",
    "time": 1668124952,
    "base_code": "EUR",
    "rates": {
        "BRL": 5.288073,
        "CAD": 1.355615,
        "CHF": 0.98442,
        "GBP": 0.872733,
        "JPY": 144.650515,
        "RUB": 61.318899,
        "USD": 1.01276,
    }
};

// a. Filter out Rubles (RUB)
const filteredPortfolio = portfolio.filter(asset => asset.currency !== "RUB");

// b. Convert each currency to Euro value
const convertedPortfolio = filteredPortfolio.map(asset => ({
    ...asset,
    balanceEuro: asset.balance / rateinfo.rates[asset.currency]
}));

// c. Apply 1% commission and €1 charge on each transaction
const commissionAppliedPortfolio = convertedPortfolio.map(asset => ({
    ...asset,
    balanceAfterCommission: (asset.balanceEuro * 0.99) - 1
}));

// d. Calculate the total portfolio value
const totalPortfolioValue = commissionAppliedPortfolio.reduce((total, asset) => total + asset.balanceAfterCommission, 0);

console.log("Total Portfolio Value:", totalPortfolioValue.toFixed(2), "EUR");
