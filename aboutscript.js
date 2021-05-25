document.addEventListener('DOMContentLoaded', bindButton);

function bindButton(){
	document.getElementById("feedback-submit").addEventListener("click", function(event){
	var req = new XMLHttpRequest();
 	var name = document.getElementById("name").value;
 	var comments = document.getElementById("comments").value;
	var payload;
	payload = "name="+name+"comments="+comments;
    	req.open("GET", "https://httpbin.org/get?"+payload, true);
 	req.addEventListener("load", function(){
		if(req.status >= 200 && req.status < 400){
			document.getElementById("request-status").textContent = "Feedback Received!";
		} else {
			console.log("Error in network request: "+req.statusText);
		}
	});
	req.send(null);
	event.preventDefault();
	});
}
