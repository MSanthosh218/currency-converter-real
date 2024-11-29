// document.addEventListener("DOMContentLoaded" ,()=>{
//     const conver_button=document.getElementById("convert");
//     conver_button.addEventListener("click",convertcurrency);
//     let currencyinfo;


//     function getlistofcurrencies(){

//         return fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json").then(res => res.json())
//     }
    

//     function buildigcurrenciesoption(){
//         let listofcurrencies;
//         getlistofcurrencies().then(result=>{
//             listofcurrencies=result;
//             let fromcurrencies=document.getElementById("fromcurrrency");
//             let tocurrencies=document.getElementById("tocurrency")
//             for(let key in listofcurrencies ){
//                 let fromcurrrencyoption=document.createElement("option");
//                 fromcurrrencyoption.id=`${key}_from`;
//                 fromcurrrencyoption.value=key;
//                 fromcurrrencyoption.innerText=listofcurrencies[key];
//                 fromcurrencies.appendChild(fromcurrrencyoption);
//                 let toCurrencyOption = document.createElement("option");
//                 toCurrencyOption.id = `${key}_to`;
//                 toCurrencyOption.value = key;
//                 toCurrencyOption.textContent = listOfCurrencies[key];
//                 tocurrency.appendChild(toCurrencyOption);
//             }

//             })
//         }
//     })
    



