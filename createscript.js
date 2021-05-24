activeColor = "#000000";

function changeColor(event){
	activeColor = this.getAttribute("hex");
	document.getElementById("current-color").style.backgroundColor = activeColor;
	document.getElementById("current-color").style.borderColor = activeColor;
}

function eraseClick(event){
	activeColor = "#FAF5E4";
	document.getElementById("current-color").style.backgroundColor = activeColor;
	document.getElementById("current-color").style.borderColor = activeColor;
}

function downloadClick(event){
	html2canvas(document.getElementById("pixel-table")).then(function(canvas) {
		var image = canvas.toDataURL();
		var link = document.createElement("a");
		link.download = "pixel.png";
		link.href = image;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	});
}

function addcolorClick(event){
	document.getElementById("popup-container").style.display = "block";
}

function closeClick(event){
	document.getElementById("popup-container").style.display = "none";
}

function chooseClick(event){
	newColor = document.createElement("li");
	newColor.classList.add("palette-color");
	newColor.setAttribute("hex", document.getElementById("choosecolor").value);
	newColor.style.backgroundColor = newColor.getAttribute("hex");
	newColor.addEventListener("click", changeColor);
	document.getElementById("color-list").appendChild(newColor);
	document.getElementById("popup-container").style.display = "none";
}

function submitClick(event){
	var artist = prompt("Enter your name to submit your art to the gallery:", "Jane Doe");
	if (box == null || box ==""){
		artist = "Anonymous";
	}
}

//pixel canvas
var table = document.getElementById("pixel-table");
var i = 0;
var j = 0;
for(var i=0; i<50; i++){
	var row = table.insertRow(i);
  	j = 0;
  	for(var j=0; j<50; j++){
  		var cell = row.insertCell(j);
		cell.addEventListener("mouseover", function(e){
			if(e.buttons==1){
				this.style.backgroundColor = activeColor;
			}
		});
		cell.addEventListener("mousedown", function(){
			this.style.backgroundColor = activeColor;
		});
  	}
}

//palette-colors
var colors = document.getElementById("color-list");
for(var i=0; i<6; i++){
	var currentColor = colors.children[i];
	currentColor.style.backgroundColor = currentColor.getAttribute("hex");
	currentColor.addEventListener("click", changeColor);	
}
document.getElementById("color-list").children[0].click();
	
	 