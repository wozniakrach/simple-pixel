var carouselIndex = 0;
autoSlides();

function carouselRotate(n=1) {
	carouselIndex+=n;
	showSlides(carouselIndex);
}

function showSlides(n) {
	var pics = document.getElementsByClassName("slide");
	if (n<0) {
		carouselIndex = pics.length-1;
	}
	if (n>pics.length-1) {
		carouselIndex = 0
	}
	for (i=0; i<pics.length; i++) {
		pics[i].style.display = "none";
	}
	pics[carouselIndex].style.display = "block";
}

function autoSlides() {
	carouselIndex+=1;
	showSlides(carouselIndex);
	setTimeout(autoSlides, 5000);
}

colIndex = 0;
var colors = ["#29FFD7", "#BC55A9", "#FE5F55", "#FFC640", "#D4EC4D"]
function createChange() {
	document.getElementById("create").style.color = colors[colIndex];
	colIndex += 1;
	if (colIndex == colors.length){colIndex = 0};
	setTimeout(createChange, 2000);
}
createChange();

	