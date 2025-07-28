// Ukrainian language translations for Norway ENK Tax Calculator
// Norway Tax Base 2025 - All rates and brackets based on official Norwegian tax system
window.translations = window.translations || {};
window.translations.ua = {
    page: {
        title: "Калькулятор податків ENK - Норвегія"
    },
    header: {
        title: "🇳🇴 Калькулятор податків ENK",
        subtitle: "Розрахунок податків для індивідуального підприємця в Норвегії"
    },
    form: {
        calculationType: "Тип розрахунку:",
        fromProfit: {
            title: "Сума, з якої потрібно розрахувати податок",
            description: "Прибуток до податків (brutto) → розрахувати суму на руки (netto)"
        },
        toProfit: {
            title: "Сума, яка повинна залишитися після сплати всіх податків",
            description: "Бажана сума на руки (netto) → розрахувати необхідний прибуток (brutto)"
        },
        period: "Період даних:",
        periodOptions: {
            year: "За рік",
            month: "За місяць"
        },
        currency: "Валюта:",
        currencyOptions: {
            nok: "NOK (Норвезькі крони)",
            other: "Інша валюта"
        },
        currencyPlaceholders: {
            code: "Код валюти (EUR, USD, UAH)",
            rate: "Курс до NOK"
        },
        amount: "Сума (NOK):",
        amountPlaceholder: "Введіть суму",
        amountLabels: {
            fromProfitNok: "Прибуток до податків (NOK):",
            fromProfitOther: "Прибуток до податків (у вибраній валюті):",
            toProfitNok: "Бажана сума на руки (NOK):",
            toProfitOther: "Бажана сума на руки (у вибраній валюті):"
        },
        calculate: "Розрахувати"
    },
    results: {
        title: "Результат розрахунку",
        descriptions: {
            fromProfit: "Сума, яка залишається після сплати всіх податків",
            toProfit: "Прибуток, необхідний для отримання бажаної суми на руки"
        },
        titles: {
            fromProfit: "Сума на руки після податків",
            toProfit: "Необхідний прибуток до податків"
        },
        yearly: "За рік",
        monthly: "За місяць",
        taxBreakdown: "Деталізація податків (річні)",
        socialTax: "Соціальні внески (Trygdeavgift) 10.7%:",
        generalTax: "Податок на загальний дохід (Skatt på alminnelig inntekt) 22%:",
        steppedTax: "Ступінчастий податок (Trinnskatt):",
        totalTax: "Загальна сума податків:",
        steppedTaxNotApplicable: "Ступінчастий податок не застосовується",
        summary: {
            title: "📊 Підсумки розрахунку",
            totalProfit: "Загальний прибуток (до податків)",
            totalTaxAmount: "Загальна сума податків",
            netProfit: "Прибуток після податків (на руки)",
            taxPercent: "Загальний % податків"
        }
    },
    messages: {
        enterAmount: "Будь ласка, введіть коректну суму",
        enterCurrencyDetails: "Будь ласка, введіть код валюти та курс обміну"
    }
};