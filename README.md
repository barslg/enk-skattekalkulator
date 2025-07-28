# Multilingual ENK Tax Calculator for Norway v8

Full-featured multilingual tax calculator for sole proprietorships (ENK) in Norway with support for 4 languages, based on **Norway Tax Base 2025** from official Norwegian Tax Administration sources.

## 🌍 Supported Languages

- 🇺🇦 **Ukrainian** - з термінами brutto/netto  
- 🇳🇴 **Norwegian** - official Norwegian tax terminology from Skatteetaten.no
- 🇬🇧 **English** - with gross/net terminology
- **Russian** - with brutto/netto terminology
  
## 🚀 Installation and Setup

### File Structure:
```
enk-tax-calculator-v8-multilingual/
├── index.html          # Main HTML structure with i18n attributes
├── styles.css          # All interface styles + language selector
├── script.js           # Calculation logic + complete i18n system
├── lang/               # Language files directory
│   ├── ru.js          # Russian language
│   ├── ua.js          # Ukrainian language
│   ├── no.js          # Norwegian language
│   └── en.js          # English language
└── README.md           # This documentation
```

### Quick Start:
1. **Download all files** preserving the folder structure
2. **Open index.html** in any modern browser
3. **Select language** in the top-right corner
4. **Start calculating!**

## ✨ Features v8 + Multilingual

### 🌐 Internationalization (i18n):
- **4 complete languages** with full interface translation
- **Language persistence** in browser localStorage
- **Dynamic switching** of all interface elements
- **Localized error messages** and validation
- **Proper terminology** for each language including brutto/netto terms

### 🔄 Bidirectional Calculation:
- **From profit to taxes** (brutto → netto)
- **From desired amount to profit** (netto → brutto)

### 💱 Multi-Currency Support:
- **NOK** (Norwegian crowns) - primary currency
- **Any other currency** with manual exchange rate input
- **Dual currency display** - all amounts shown in both currencies

### 📅 Flexible Periods:
- Data input **per month** or **per year**
- Automatic conversion to annual amounts for calculation
- Results displayed **both yearly and monthly**

### 🏛️ Official Norway 2025 Tax System:

#### Tax Rates (adjustable in code):
- **[Trygdeavgift](https://www.skatteetaten.no/en/rates/national-insurance-contributions/)** (National Insurance Contributions) - **10.7%** for business income
- **[Skatt på alminnelig inntekt](https://www.skatteetaten.no/en/rettskilder/type/skattedirektoratets-meldinger/forskuddsmeldingen-2025/)** (Tax on Ordinary Income) - **22%** flat rate
- **[Trinnskatt](https://www.skatteetaten.no/en/rates/bracket-tax/)** (Progressive Tax) - 5 brackets with increasing rates

#### Progressive Tax Brackets 2025 (adjustable in code):
| Bracket | Income Range (NOK) | Rate |
|---------|-------------------|------|
| 0 | 0 - 217,400 | 0% |
| 1 | 217,401 - 306,050 | 1.7% |
| 2 | 306,051 - 697,150 | 4.0% |
| 3 | 697,151 - 942,400 | 13.7% |
| 4 | 942,401 - 1,410,750 | 16.7% |
| 5 | 1,410,751+ | 17.7% |

### 📊 Comprehensive Reporting:
- Detailed breakdown of all tax types with **official links**
- Step-by-step progressive tax calculation
- **Summary section** with key metrics
- **Localized results** in selected language

## 🎨 Interface Features

- **Language selector** with country flags in top-right corner
- **Modern design** with gradients and animations
- **Radio buttons** with detailed explanations in each language
- **Responsive layout** for mobile devices
- **Settings persistence** - language saved between sessions

## 🔧 Technical Architecture

### Tax System Implementation:
- **Norway Tax Base 2025** - all rates based on official Norwegian Tax Administration
- **Modular architecture** - each language in separate file
- **Adjustable tax rates** - easy to update for future years
- **Binary search algorithm** for reverse profit calculation
- **No external dependencies** - pure JavaScript

### Internationalization System:
- **Nested translation keys** for organized structure
- **Dynamic interface switching** without page reload
- **Fallback mechanism** for missing translations
- **localStorage persistence** for user preferences

### Code Structure:
```javascript
// All tax rates are adjustable for future years
const TAX_RATES = {
    social: 0.109,    // 10.9% - can be updated
    general: 0.22,    // 22% - can be updated  
    brackets: [...]   // Progressive rates - can be updated
};
```

## 📝 Norway 2025 Tax System References

### Official Sources:
- **[National Insurance Contributions (Trygdeavgift)](https://www.skatteetaten.no/en/rates/national-insurance-contributions/)** - 10.9% for ENK business income
- **[Tax on Ordinary Income](https://www.skatteetaten.no/en/rettskilder/type/skattedirektoratets-meldinger/forskuddsmeldingen-2025/)** - 22% flat rate on net income
- **[Progressive Tax (Trinnskatt)](https://www.skatteetaten.no/en/rates/bracket-tax/)** - 5-bracket system with rates from 0% to 17.7%

### Tax Rate Updates:
All tax rates and brackets in the code are marked as **adjustable** and can be easily updated when new rates are published by the Norwegian Tax Administration.

## 🌍 Adding New Languages

To add a new language:

1. Create file `lang/[language_code].js`
2. Copy structure from `lang/ru.js`
3. Translate all strings with proper brutto/netto terminology
4. Add option to `languageSelect` in HTML
5. Add script reference in HTML

Example for German:
```javascript
// lang/de.js
window.translations.de = {
    page: { title: "ENK Steuerrechner - Norwegen" },
    // ... other translations with brutto/netto terms
};
```

## 💡 Usage Best Practices

### For Users:
- **Select language** in the top-right corner on first use
- **Language is saved** automatically for future sessions
- **All calculations** are displayed in the selected language
- **Official terminology** is used for Norwegian language

### For Developers:
- **Modular structure** allows easy language additions
- **Standard i18n architecture** with keys and translations
- **No external dependencies** - pure JavaScript implementation
- **localStorage** for settings persistence
- **Tax rates easily adjustable** for future tax years

## 🔒 Compatibility and Security

- **All modern browsers** (Chrome, Firefox, Safari, Edge)
- **Mobile devices** (iOS Safari, Android Chrome)
- **No internet connection required** after initial load
- **Secure settings storage** in localStorage
- **No data transmitted** to external servers
- **Privacy-focused** - all calculations done locally

## 📱 Example Use Cases

### Scenario 1: Monthly profit planning in EUR
1. Select "Amount to calculate tax on"
2. Period: "Per month"
3. Currency: "Other currency" → EUR, rate 11.50
4. Enter monthly profit in EUR
5. Get detailed annual calculation with monthly breakdown

### Scenario 2: Reverse calculation for desired income
1. Select "Amount that should remain after paying all taxes"
2. Enter desired take-home amount
3. Get required gross profit before taxes

### Scenario 3: Multi-language business planning
1. Switch between languages for different stakeholders
2. All calculations remain accurate across languages
3. Share results with international partners

---

**Version:** v8 Multilingual  
**Languages:** RU, UA, NO, EN  
**Tax Base:** Norway 2025  
**Status:** Production Ready
