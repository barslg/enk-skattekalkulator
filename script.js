// Norway Tax Base 2025 - Tax rates and brackets for ENK (Sole Proprietorship)
// Source: Norwegian Tax Administration (Skatteetaten.no)
// These rates can be modified for future tax years

const TAX_RATES = {
    // Personal allowance (Personfradrag) - 108,850 NOK for 2025
    // This is a fixed deduction applied to income before calculating taxes
    // Link: https://www.skatteetaten.no/en/rates/personal-allowance/
    // This value can be updated when new rates are published
    // Note: This is a fixed amount and does not change with income level
    // It is applied to all individuals regardless of income
    personalbarn: 108850, // Personal allowance (fradrag) for 2025, which is 108,850 NOK

    // National insurance contributions (Trygdeavgift) - 10.9% for business income
    // Link: https://www.skatteetaten.no/en/rates/national-insurance-contributions/
    // This rate can be updated when new rates are published
    social: 0.109, // 10.9% - adjustable rate for future years
    
    // Tax on ordinary income (Skatt på alminnelig inntekt) - 22% for individuals
    // This is a flat rate applied to net income after deductions
    // This rate can be updated when new rates are published
    general: 0.22, // 22% - adjustable rate for future years
    
    // Progressive tax brackets (Trinnskatt) - 5 brackets with increasing rates
    // Link: https://www.skatteetaten.no/en/rates/bracket-tax/
    // These brackets and rates can be updated annually
    brackets: [
        { min: 0, max: 217400, rate: 0 },        // No bracket tax below 217,400 NOK
        { min: 217401, max: 306050, rate: 0.017 }, // 1.7% - adjustable
        { min: 306051, max: 697150, rate: 0.04 },  // 4.0% - adjustable
        { min: 697151, max: 942400, rate: 0.137 }, // 13.7% - adjustable
        { min: 942401, max: 1410750, rate: 0.167 }, // 16.7% - adjustable
        { min: 1410751, max: Infinity, rate: 0.177 } // 17.7% - adjustable
    ]
};

// Current application language
let currentLanguage = 'ru';

// Initialize internationalization system
function initializeI18n() {
    // Load saved language or use Russian as default
    const savedLanguage = localStorage.getItem('taxCalculatorLanguage') || 'en';
    currentLanguage = savedLanguage;
    
    // Set value in language selector
    document.getElementById('languageSelect').value = currentLanguage;
    
    // Apply translations
    applyTranslations();
}

// Apply translations to the interface
function applyTranslations() {
    const translations = window.translations[currentLanguage];
    if (!translations) return;
    
    // Update lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Update page title
    document.title = translations.page.title;
    
    // Update all elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations, key);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        let translation;
        
        if (key === 'form.currency.code') {
            translation = translations.form.currencyPlaceholders.code;
        } else if (key === 'form.currency.rate') {
            translation = translations.form.currencyPlaceholders.rate;
        } else if (key === 'form.amount.placeholder') {
            translation = translations.form.amountPlaceholder;
        }
        
        if (translation) {
            element.placeholder = translation;
        }
    });
    
    // Update select options
    updateSelectOptions(translations);
    
    // Update amount field label
    updateAmountLabel();
}

// Get nested translation by key path
function getNestedTranslation(obj, key) {
    return key.split('.').reduce((o, k) => o && o[k], obj);
}

// Update select options with translated text
function updateSelectOptions(translations) {
    // Update period options
    const periodSelect = document.getElementById('period');
    periodSelect.children[0].textContent = translations.form.periodOptions.year;
    periodSelect.children[1].textContent = translations.form.periodOptions.month;
    
    // Update currency options
    const currencySelect = document.getElementById('currency');
    currencySelect.children[0].textContent = translations.form.currencyOptions.nok;
    currencySelect.children[1].textContent = translations.form.currencyOptions.other;
}

document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем active класс у всех кнопок
            langButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем active класс к выбранной кнопке
            this.classList.add('active');
            
            // Здесь вызываем вашу функцию смены языка
            const selectedLang = this.dataset.lang;
            // changeLanguage(selectedLang); // если у вас есть такая функция
            
            console.log('Selected language:', selectedLang);
        });
    });
});




// Handle language change
document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('languageSelect');
    
    languageSelect.addEventListener('change', function() {
        currentLanguage = this.value;
        localStorage.setItem('taxCalculatorLanguage', currentLanguage);
        applyTranslations();
    });
    
    // Initialize the application
    initializeI18n();
});

// Handle currency selection
document.getElementById('currency').addEventListener('change', function() {
    const currencyInputs = document.getElementById('currencyInputs');
    
    if (this.value === 'other') {
        currencyInputs.classList.add('show');
    } else {
        currencyInputs.classList.remove('show');
    }
    updateAmountLabel();
});

// Update amount field label based on calculation type and currency
function updateAmountLabel() {
    const translations = window.translations[currentLanguage];
    if (!translations) return;
    
    const calculationType = document.querySelector('input[name="calculationType"]:checked').value;
    const currencySelect = document.getElementById('currency');
    const amountLabel = document.getElementById('amountLabel');
    
    let labelKey;
    if (calculationType === 'fromProfit') {
        labelKey = currencySelect.value === 'NOK' ? 'fromProfitNok' : 'fromProfitOther';
    } else {
        labelKey = currencySelect.value === 'NOK' ? 'toProfitNok' : 'toProfitOther';
    }
    
    amountLabel.textContent = translations.form.amountLabels[labelKey];
}

// Event handlers for radio button changes
document.querySelectorAll('input[name="calculationType"]').forEach(radio => {
    radio.addEventListener('change', updateAmountLabel);
});

// Calculate stepped/bracket tax according to Norway 2025 tax brackets
function calculateSteppedTax(income) {
    let tax = 0;
    const details = [];
        // let income = income - 108850; // Deduct personal allowance (fradrag) for 2025, which is 108,850 NOK


    for (let bracket of TAX_RATES.brackets) {
        if (income > bracket.min - 1) {
            const taxableInThisBracket = Math.min(income, bracket.max) - (bracket.min - 1);
            const taxAmount = taxableInThisBracket * bracket.rate;
            tax += taxAmount;
            
            if (taxAmount > 0) {
                const bracketName = bracket.max === Infinity ? 
                    `${formatNumber(bracket.min)} NOK and above` :
                    `${formatNumber(bracket.min)} - ${formatNumber(bracket.max)} NOK`;
                details.push({
                    range: bracketName,
                    rate: (bracket.rate * 100).toFixed(1),
                    amount: taxAmount,
                    taxable: taxableInThisBracket
                });
            }
        }
    }
    
    return { tax, details };
}

// Calculate total taxes (all three types) according to Norway 2025 tax system
function calculateTotalTaxes(income) {
    if (income <= TAX_RATES.personalbarn) {
        return {
            socialTax: 0,
            generalTax: 0,
            steppedTax: 0,
            steppedDetails: [],
            total: 0
        };
    }
    const socialTaxAmount = (income - TAX_RATES.personalbarn) * TAX_RATES.social;
    const generalTaxAmount = income * TAX_RATES.general;
    const steppedTaxResult = calculateSteppedTax(income);
    
    return {
        socialTax: socialTaxAmount,
        generalTax: generalTaxAmount,
        steppedTax: steppedTaxResult.tax,
        steppedDetails: steppedTaxResult.details,
        total: socialTaxAmount + generalTaxAmount + steppedTaxResult.tax
    };
}

// Calculate profit after taxes (net profit)
function calculatePPN(income) {
    const taxes = calculateTotalTaxes(income);
    return income - taxes.total;
}

// Find required gross profit using binary search algorithm
function findRequiredIncome(targetPPN) {
    let low = 0;
    let high = 5000000; // Upper bound for search
    let tolerance = 0.01; // Precision tolerance
    
    while (high - low > tolerance) {
        let mid = (low + high) / 2;
        let calculatedPPN = calculatePPN(mid);
        
        if (calculatedPPN < targetPPN) {
            low = mid;
        } else {
            high = mid;
        }
    }
    
    return (low + high) / 2;
}

// Format numbers with thousand separators
function formatNumber(num) {
    return new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(num);
}

// Format currency with currency code
function formatCurrency(amount, currencyCode = 'NOK') {
    return `${formatNumber(amount)} ${currencyCode}`;
}

// Format dual currency display (primary currency + NOK equivalent)
function formatDualCurrency(amount, currencyCode = 'NOK', exchangeRate = 1) {
    if (currencyCode === 'NOK') {
        return formatCurrency(amount, currencyCode);
    } else {
        const amountInNOK = amount * exchangeRate;
        return `<div class="dual-currency">
            <div class="primary-currency">${formatCurrency(amount, currencyCode)}</div>
            <div class="secondary-currency">${formatCurrency(amountInNOK, 'NOK')}</div>
        </div>`;
    }
}

// Main calculation function
function calculate() {
    const translations = window.translations[currentLanguage];
    const calculationType = document.querySelector('input[name="calculationType"]:checked').value;
    const period = document.getElementById('period').value;
    const currency = document.getElementById('currency').value;
    const amount = parseFloat(document.getElementById('amount').value);
    
    if (!amount || amount <= 0) {
        alert(translations.messages.enterAmount);
        return;
    }

    let exchangeRate = 1;
    let currencyCode = 'NOK';
    
    if (currency === 'other') {
        currencyCode = document.getElementById('currencyCode').value.toUpperCase();
        exchangeRate = parseFloat(document.getElementById('exchangeRate').value);
        
        if (!currencyCode || !exchangeRate || exchangeRate <= 0) {
            alert(translations.messages.enterCurrencyDetails);
            return;
        }
    }

    // Convert to NOK for calculation (Norway 2025 tax system works in NOK)
    let amountInNOK = amount;
    if (period === 'month') {
        amountInNOK *= 12; // Convert monthly amount to annual
    }
    if (currency === 'other') {
        amountInNOK *= exchangeRate; // Convert to NOK
    }

    let profitBeforeTax, profitAfterTax, taxes;
    
    if (calculationType === 'fromProfit') {
        // Calculate taxes and net amount from given gross profit
        profitBeforeTax = amountInNOK;
        taxes = calculateTotalTaxes(profitBeforeTax);
        profitAfterTax = calculatePPN(profitBeforeTax);
    } else {
        // Find required gross profit for desired net amount
        profitAfterTax = amountInNOK;
        profitBeforeTax = findRequiredIncome(profitAfterTax);
        taxes = calculateTotalTaxes(profitBeforeTax);
    }

    displayResults(calculationType, profitBeforeTax, profitAfterTax, taxes, currencyCode, exchangeRate);
}

// Display calculation results with proper formatting and translations
function displayResults(calculationType, profitBeforeTax, profitAfterTax, taxes, currencyCode, exchangeRate) {
    const translations = window.translations[currentLanguage];
    const resultsDiv = document.getElementById('results');
    const resultTitle = document.getElementById('resultTitle');
    const resultValue = document.getElementById('resultValue');
    const resultDescription = document.getElementById('resultDescription');
    const yearlyValue = document.getElementById('yearlyValue');
    const monthlyValue = document.getElementById('monthlyValue');

    // Convert to display currency
    const profitBeforeTaxDisplay = currencyCode === 'NOK' ? profitBeforeTax : profitBeforeTax / exchangeRate;
    const profitAfterTaxDisplay = currencyCode === 'NOK' ? profitAfterTax : profitAfterTax / exchangeRate;

    if (calculationType === 'fromProfit') {
        resultTitle.textContent = translations.results.titles.fromProfit;
        resultDescription.textContent = translations.results.descriptions.fromProfit;
        resultValue.innerHTML = formatDualCurrency(profitAfterTaxDisplay, currencyCode, exchangeRate);
        yearlyValue.innerHTML = formatDualCurrency(profitAfterTaxDisplay, currencyCode, exchangeRate);
        monthlyValue.innerHTML = formatDualCurrency(profitAfterTaxDisplay / 12, currencyCode, exchangeRate);
    } else {
        resultTitle.textContent = translations.results.titles.toProfit;
        resultDescription.textContent = translations.results.descriptions.toProfit;
        resultValue.innerHTML = formatDualCurrency(profitBeforeTaxDisplay, currencyCode, exchangeRate);
        yearlyValue.innerHTML = formatDualCurrency(profitBeforeTaxDisplay, currencyCode, exchangeRate);
        monthlyValue.innerHTML = formatDualCurrency(profitBeforeTaxDisplay / 12, currencyCode, exchangeRate);
    }

    // Display tax breakdown
    const taxesInDisplayCurrency = {
        socialTax: currencyCode === 'NOK' ? taxes.socialTax : taxes.socialTax / exchangeRate,
        generalTax: currencyCode === 'NOK' ? taxes.generalTax : taxes.generalTax / exchangeRate,
        steppedTax: currencyCode === 'NOK' ? taxes.steppedTax : taxes.steppedTax / exchangeRate,
        total: currencyCode === 'NOK' ? taxes.total : taxes.total / exchangeRate
    };

    document.getElementById('socialTax').innerHTML = formatDualCurrency(taxesInDisplayCurrency.socialTax, currencyCode, exchangeRate);
    document.getElementById('generalTax').innerHTML = formatDualCurrency(taxesInDisplayCurrency.generalTax, currencyCode, exchangeRate);
    document.getElementById('steppedTax').innerHTML = formatDualCurrency(taxesInDisplayCurrency.steppedTax, currencyCode, exchangeRate);
    document.getElementById('totalTax').innerHTML = formatDualCurrency(taxesInDisplayCurrency.total, currencyCode, exchangeRate);

    // Display stepped tax details
    const steppedDetails = document.getElementById('steppedDetails');
    steppedDetails.innerHTML = '';
    
    if (taxes.steppedDetails.length > 0) {
        taxes.steppedDetails.forEach(detail => {
            const detailAmount = currencyCode === 'NOK' ? detail.amount : detail.amount / exchangeRate;
            const div = document.createElement('div');
            div.className = 'stepped-item';
            div.innerHTML = `
                <span>${detail.range} (${detail.rate}%):</span>
                <span>${formatCurrency(detailAmount, currencyCode)}</span>
            `;
            steppedDetails.appendChild(div);
        });
    } else {
        const div = document.createElement('div');
        div.className = 'stepped-item';
        div.innerHTML = `<span>${translations.results.steppedTaxNotApplicable}</span><span>0.00 ${currencyCode}</span>`;
        steppedDetails.appendChild(div);
    }

    // Fill summary section
    const taxPercent = (taxes.total / profitBeforeTax * 100).toFixed(1);
    
    document.getElementById('summaryTotalProfit').innerHTML = formatDualCurrency(profitBeforeTaxDisplay, currencyCode, exchangeRate);
    document.getElementById('summaryTotalTax').innerHTML = formatDualCurrency(taxesInDisplayCurrency.total, currencyCode, exchangeRate);
    document.getElementById('summaryNetProfit').innerHTML = formatDualCurrency(profitAfterTaxDisplay, currencyCode, exchangeRate);
    document.getElementById('summaryTaxPercent').textContent = `${taxPercent}%`;

    resultsDiv.classList.add('show');
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

