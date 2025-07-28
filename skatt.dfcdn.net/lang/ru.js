// Russian language translations for Norway ENK Tax Calculator
// Norway Tax Base 2025 - All rates and brackets based on official Norwegian tax system
window.translations = window.translations || {};
window.translations.ru = {
    page: {
        title: "Калькулятор налогов ENK - Норвегия"
    },
    header: {
        title: "🇳🇴 Калькулятор налогов ENK",
        subtitle: "Расчет налогов для индивидуального предпринимателя в Норвегии"
    },
    form: {
        calculationType: "Тип расчета:",
        fromProfit: {
            title: "Сумма, с которой нужно рассчитать налог",
            description: "Прибыль до налогов (brutto) → рассчитать сумму на руки (netto)"
        },
        toProfit: {
            title: "Сумма, которая должна остаться после уплаты всех налогов",
            description: "Желаемая сумма на руки (netto) → рассчитать необходимую прибыль (brutto)"
        },
        period: "Период данных:",
        periodOptions: {
            year: "За год",
            month: "За месяц"
        },
        currency: "Валюта:",
        currencyOptions: {
            nok: "NOK (Норвежские кроны)",
            other: "Другая валюта"
        },
        currencyPlaceholders: {
            code: "Код валюты (EUR, USD, UAH)",
            rate: "Курс к NOK"
        },
        amount: "Сумма (NOK):",
        amountPlaceholder: "Введите сумму",
        amountLabels: {
            fromProfitNok: "Прибыль до налогов (NOK):",
            fromProfitOther: "Прибыль до налогов (в выбранной валюте):",
            toProfitNok: "Желаемая сумма на руки (NOK):",
            toProfitOther: "Желаемая сумма на руки (в выбранной валюте):"
        },
        calculate: "Рассчитать"
    },
    results: {
        title: "Результат расчета",
        descriptions: {
            fromProfit: "Сумма, которая остается после уплаты всех налогов",
            toProfit: "Прибыль, необходимая для получения желаемой суммы на руки"
        },
        titles: {
            fromProfit: "Сумма на руки после налогов",
            toProfit: "Необходимая прибыль до налогов"
        },
        yearly: "За год",
        monthly: "За месяц",
        taxBreakdown: "Детализация налогов (годовые)",
        socialTax: "Социальные взносы (Trygdeavgift) 10.9%:",
        generalTax: "Налог на общий доход (Skatt på alminnelig inntekt) 22%:",
        steppedTax: "Ступенчатый налог (Trinnskatt):",
        totalTax: "Общая сумма налогов:",
        steppedTaxNotApplicable: "Ступенчатый налог не применяется",
        summary: {
            title: "📊 Итоги расчета",
            totalProfit: "Общая прибыль (до налогов)",
            totalTaxAmount: "Общая сумма налогов",
            netProfit: "Прибыль после налогов (на руки)",
            taxPercent: "Общий % налогов"
        }
    },
    messages: {
        enterAmount: "Пожалуйста, введите корректную сумму",
        enterCurrencyDetails: "Пожалуйста, введите код валюты и курс обмена"
    }
};