var btn = document.querySelector("button");
var priceDisp = document.querySelector("#price");
var currency = "EUR";

btn.addEventListener("click", function () {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var data = JSON.parse(xhttp.responseText);
			var price = data.bpi[currency].rate;
			priceDisp.innerText = price + " " + currency;
		}
	};
	xhttp.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
	xhttp.send();
});

