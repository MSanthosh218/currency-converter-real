document.addEventListener("DOMContentLoaded", () => {
    const convertButton = document.getElementById("convert");
    convertButton.addEventListener("click", convertCurrency);


    function getListOfCurrencies() {
        return fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json").then(res => res.json());
    }

    
    function buildCurrencyOptions() {
        getListOfCurrencies().then(listOfCurrencies => {
            const fromCurrencies = document.getElementById("fromcurrrency");
            const toCurrencies = document.getElementById("tocurrency");
            for (let key in listOfCurrencies) {
                const fromCurrencyOption = document.createElement("option");
                fromCurrencyOption.value = key;
                fromCurrencyOption.innerText = listOfCurrencies[key];
                fromCurrencies.appendChild(fromCurrencyOption);

                const toCurrencyOption = document.createElement("option");
                toCurrencyOption.value = key;
                toCurrencyOption.innerText = listOfCurrencies[key];
                toCurrencies.appendChild(toCurrencyOption);
            }
        });
    }

    function convertCurrency() {
        const fromCurrency = document.getElementById("fromcurrrency").value;
        const toCurrency = document.getElementById("tocurrency").value;
        const amount = document.getElementById("amount").value;

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/convert/${fromCurrency}/${toCurrency}.json`)
            .then(res => res.json())
            .then(data => {
                const conversionRate = data[toCurrency];
                document.getElementById("result").value = (amount * conversionRate).toFixed(2);
            });
    }

 
    buildCurrencyOptions();
});
