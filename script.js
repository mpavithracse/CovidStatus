var countrytag=document.getElementById("Country");


var getcountries =async ()=>{
var rep = await fetch("https://api.covid19api.com/summary");
var data = await rep.json();
console.log(data.Countries);
 var countries=data.Countries
for (let country of countries)
{
    var currencyoption = document.createElement("option")
    currencyoption.text=country.Country;
    currencyoption.value=country.Country;
    countrytag.appendChild(currencyoption);  
}
}

getcountries();

const generateData = async()=>{
    var selectedcountry = document.getElementById("Country").value;
    console.log(selectedcountry);
    var rep = await fetch("https://api.covid19api.com/summary");
    var data = await rep.json();
    var result= data.Countries.filter(i=>i.Country==selectedcountry);
    var ptag = document.getElementById("SearchResults");
    ptag.innerText =    `Total Confirmed : ${result[0].TotalConfirmed}
                          New Deaths : ${result[0].NewDeaths}
                          New Confirmed : ${result[0].NewConfirmed}
                          New Recovered : ${result[0].NewRecovered}`;

    console.log(result);
}