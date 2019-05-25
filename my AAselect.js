
function populate(s1,s2){
    var s1 =document.getElementById(s1);
	var s2 =document.getElementById(s2);
	s2.innerHTML = "";
	if(s1.value == "bedroom"){
	     var optionArray = ["|","mdf bed|Mbf bed","mahogany  bed|Mahogany  bed","black afaral |Black afaral ","queen size|Queen size","king size|King size","family size|Family size"," one person size|10 spring"];
	}else if(s1.value == "dinning"){
	     var optionArray = ["|","An2.html|Mdf walldrop","mahogany  bed|Mahogany  bed","black afaral |Black afaral ","queen size|Queen size","king size|King size","family size|Family size"," one person size|10 spring"];
	}else if(s1.value == "kitchen"){
	     var optionArray = ["|","mdf bed|Mbf bed","mahogany  bed|Mahogany  bed","black afaral |Black afaral ","queen size|Queen size","king size|King size","family size|Family size"," one person size|10 spring"];
	}else if(s1.value == "seatingroom"){
	     var optionArray = ["|","mdf bed|Mbf bed","mahogany  bed|Mahogany  bed","black afaral |Black afaral ","queen size|Queen size","king size|King size","family size|Family size"," one person size|10 spring"];
	}
	for(var option in optionArray){
	    var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
}