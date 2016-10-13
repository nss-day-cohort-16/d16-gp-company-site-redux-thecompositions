var propArr =[];

var property1 = {
	name: "Pirate's Cove",
	image: "<img src='images/isle1.jpg'>",
	description: "Former 16th century hangout for thieving English pirates.",
	price: "USD 10 million"
}

var property2 = {
	name: "Sunshine Sanctuary",
	image: "<img src='images/isle2.jpg'>",
	description: "The sun never sets on your own little empire.",
	price: "USD 15 million"
}
var property3 = {
	name: "Polynesian Paradise",
	image: "<img src='images/isle3.jpg'>",
	description: "Hangout and Hula",
	price: "USD 18 million"
}
var property4 = {
	name: "South Asia Seaside",
	image: "<img src='images/isle4.jpg'>",
	description: "Edge of the world cheap",
	price: "USD 25 million"
}
var property5 = {
	name: "Carib Cool",
	image: "<img src='images/isle5.jpg'>",
	description: "Pina Coladas, Mojitos, Caipirinhas? Who needs to decide? Have them all!",
	price: "USD 27 million"
}
var property6 = {
	name: "Mediterranean Meditation",
	image: "<img src='images/isle6.jpg'>",
	description: "In the no-man's land between Europe and the Middle East",
	price: "USD 30 million"
}
var property7 = {
	name: "African Ambiance",
	image: "<img src='images/isle7.jpeg'>",
	description: "No cheetahs, elephants, or safari madness here",
	price: "USD 17 million"
}
var property8 = {
	name: "Aussie Oasis",
	image: "<img src='images/isle8.jpg'>",
	description: "Not only can you own an island, you get the kangaroos too!",
	price: "USD 22 million"
}

propArr.push(property1);
propArr.push(property2);
propArr.push(property3);
propArr.push(property4);
propArr.push(property5);
propArr.push(property6);
propArr.push(property7);
propArr.push(property8);

var maincontent = document.getElementsByClassName("maincontent");
console.log(maincontent);

var itemsOnPage = "";

for (var i = 0; i < propArr.length; i++){
	var name = propArr[i].name;
	var image = propArr[i].image;
	var description = propArr[i].description;
	var price = propArr[i].price;

	itemsOnPage += "<div class='maindiv'>" +  "<div class='divimg'>" + image + "</div>" + "<div class='sub'>" + name + "</div>" + "<div class='divdescription'>" + description + "</div>"
	+ "<div class='divprice'>" + price + "</div>" + "</div>";

	maincontent[0].innerHTML = itemsOnPage;
}
