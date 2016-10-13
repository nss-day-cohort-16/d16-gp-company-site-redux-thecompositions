var agents = [
	
	{
		name: "Will Montgomery",
		title: "CEO",
		phone: "(615) 222-2444",
		photo: "<img src='images/WillM.png'"
	},
	{
		name:  "Anna Lima",
		title:  "President",
		phone: "(615) 222-2444",
		photo: "<img src='images/AnnaM.png'"	},
	{
		name:  "Matthew Rogers",
		title:  "Operations Manager",
		phone: "(615) 222-2444",
		photo: "<img src='images/MatthewR.png'"
	},
	{
		name:  "Jill Hudson",
		title:  "Listing Agent",
		phone: "(615) 222-2444",
		photo: "<img src='images/JillH.png'"
	},
	{
		name:  "Sally Simpkins",
		title:  "Listing Agent",
		phone: "(615) 222-2444",
		photo: "<img src='images/SallyS.png'"
	},
	{
		name:  "Jerry Garrett",
		title:  "Listing Agent",
		phone: "(615) 222-2444",
		photo: "<img src='images/JerryG.png'"
	},
	{
		name:  "Aaron Payne",
		title:  "Accounts Recievable",
		phone: "(615) 222-2444",
		photo: "<img src='images/AaronP.png'"	},
	{
		name:  "Myra Knox",
		title:  "Customer Relations",
		phone: "(615) 222-2444",
		photo: "<img src='images/MyraK.png'"
	}

]

var agentDetails = document.getElementById("agent-container");

	for (var i = 0; i < agents.length; i++) {
		var agentName = agents[i].name;
		var agentTitle = agents[i].title;
		var agentPhone = agents[i].phone;
		var agentPhoto = agents[i].photo;

		agentDetails.innerHTML += "<div class='agent-image'>" + agentPhoto + "</div>" + "<div class='agent-name'>" + agentName + "</div>" + "<div class='agent-title'>" + agentTitle + "</div>" + "<div class='agent-phone'>" + agentPhone + "</div>"	};
 console.log(agentDetails);

