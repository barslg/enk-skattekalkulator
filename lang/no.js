// Norwegian language translations for Norway ENK Tax Calculator
// Norway Tax Base 2025 - Official Norwegian terminology from Skatteetaten.no
window.translations = window.translations || {};
window.translations.no = {
    page: {
        title: "ENK Skattekalkulator - Norge"
    },
    header: {
        title: "🇳🇴 ENK Skattekalkulator",
        subtitle: "Skatteberegning for enkeltpersonforetak i Norge"
    },
    form: {
        calculationType: "Type beregning:",
        fromProfit: {
            title: "Beløp det skal beregnes skatt på",
            description: "Overskudd før skatt (brutto) → beregne beløp til utbetaling (netto)"
        },
        toProfit: {
            title: "Beløp som skal være igjen etter betaling av alle skatter",
            description: "Ønsket beløp til utbetaling (netto) → beregne nødvendig overskudd (brutto)"
        },
        period: "Dataperiode:",
        periodOptions: {
            year: "Per år",
            month: "Per måned"
        },
        currency: "Valuta:",
        currencyOptions: {
            nok: "NOK (Norske kroner)",
            other: "Annen valuta"
        },
        currencyPlaceholders: {
            code: "Valutakode (EUR, USD, UAH)",
            rate: "Kurs til NOK"
        },
        amount: "Beløp (NOK):",
        amountPlaceholder: "Skriv inn beløp",
        amountLabels: {
            fromProfitNok: "Overskudd før skatt (NOK):",
            fromProfitOther: "Overskudd før skatt (i valgt valuta):",
            toProfitNok: "Ønsket beløp til utbetaling (NOK):",
            toProfitOther: "Ønsket beløp til utbetaling (i valgt valuta):"
        },
        calculate: "Beregn"
    },
    results: {
        title: "Beregningsresultat",
        descriptions: {
            fromProfit: "Beløp som blir igjen etter betaling av alle skatter",
            toProfit: "Overskudd nødvendig for å få ønsket beløp til utbetaling"
        },
        titles: {
            fromProfit: "Beløp til utbetaling etter skatt",
            toProfit: "Nødvendig overskudd før skatt"
        },
        yearly: "Per år",
        monthly: "Per måned",
        taxBreakdown: "Skattespecifikasjon (årlig)",
        socialTax: "Trygdeavgift 10.9%:",
        generalTax: "Skatt på alminnelig inntekt 22%:",
        steppedTax: "Trinnskatt:",
        totalTax: "Total skatt:",
        steppedTaxNotApplicable: "Trinnskatt kommer ikke til anvendelse",
        summary: {
            title: "📊 Sammendrag av beregning",
            totalProfit: "Totalt overskudd (før skatt)",
            totalTaxAmount: "Total skatt",
            netProfit: "Overskudd etter skatt (til utbetaling)",
            taxPercent: "Total skatt %"
        }
    },
    messages: {
        enterAmount: "Vennligst skriv inn et gyldig beløp",
        enterCurrencyDetails: "Vennligst skriv inn valutakode og vekslingskurs"
    }
};