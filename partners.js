var partners = [
	{name: "Amazon", level: "gold", logo: "<img src='images/amazon-logo.png'" },
	{name: "Nike", level: "silver", logo: "<img src='images/nike-logo.png'"},
	{name: "Starbucks", level: "silver", logo: "<img src='images/starbucks-logo.png'"},
];
console.log(partners[0]);

var start = document.getElementById("maincontent-partners");
var empty = "";

for (var i = 0; i  < partners.length ; i ++) {
	var partnerName =  partners[i].name;
	//console.log(partnerLogo);
	var partnerLogo =  partners[i].logo;
	var partnerLevel = partners[i].level;
	// var result += partnerName + partnerLogo + partnerLevel;

start.innerHTML += "<div class='logo-image'>" + partnerLogo + "</div>" + "<div class='sponsor-name'>" + partnerName + "</div>" + "<div class='partner-level'>" + partnerLevel + "</div>" ;

};
console.log(start);

//this will do it for one I believe, in order to do it
//for all class names we will have to do a loop for
//the array of Class names.




