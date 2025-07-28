// English language translations for Norway ENK Tax Calculator
// Norway Tax Base 2025 - All rates and brackets based on official Norwegian tax system
window.translations = window.translations || {};
window.translations.en = {
    page: {
        title: "ENK Tax Calculator - Norway"
    },
    header: {
        title: "🇳🇴 ENK Tax Calculator",
        subtitle: "Tax calculation for sole proprietorship in Norway"
    },
    form: {
        calculationType: "Calculation type:",
        fromProfit: {
            title: "Amount to calculate tax on",
            description: "Profit before tax (gross) → calculate take-home amount (net)"
        },
        toProfit: {
            title: "Amount that should remain after paying all taxes",
            description: "Desired take-home amount (net) → calculate required profit (gross)"
        },
        period: "Data period:",
        periodOptions: {
            year: "Per year",
            month: "Per month"
        },
        currency: "Currency:",
        currencyOptions: {
            nok: "NOK (Norwegian crowns)",
            other: "Other currency"
        },
        currencyPlaceholders: {
            code: "Currency code (EUR, USD, UAH)",
            rate: "Exchange rate to NOK"
        },
        amount: "Amount (NOK):",
        amountPlaceholder: "Enter amount",
        amountLabels: {
            fromProfitNok: "Profit before tax (NOK):",
            fromProfitOther: "Profit before tax (in selected currency):",
            toProfitNok: "Desired take-home amount (NOK):",
            toProfitOther: "Desired take-home amount (in selected currency):"
        },
        calculate: "Calculate"
    },
    results: {
        title: "Calculation result",
        descriptions: {
            fromProfit: "Amount remaining after paying all taxes",
            toProfit: "Profit required to get desired take-home amount"
        },
        titles: {
            fromProfit: "Take-home amount after tax",
            toProfit: "Required profit before tax"
        },
        yearly: "Per year",
        monthly: "Per month",
        taxBreakdown: "Tax breakdown (annual)",
        socialTax: "Social security contribution (Trygdeavgift) 10.7%:",
        generalTax: "Tax on ordinary income (Skatt på alminnelig inntekt) 22%:",
        steppedTax: "Progressive tax (Trinnskatt):",
        totalTax: "Total tax:",
        steppedTaxNotApplicable: "Progressive tax does not apply",
        summary: {
            title: "📊 Calculation summary",
            totalProfit: "Total profit (before tax)",
            totalTaxAmount: "Total tax amount",
            netProfit: "Profit after tax (take-home)",
            taxPercent: "Total tax %"
        }
    },
    messages: {
        enterAmount: "Please enter a valid amount",
        enterCurrencyDetails: "Please enter currency code and exchange rate"
    }
};