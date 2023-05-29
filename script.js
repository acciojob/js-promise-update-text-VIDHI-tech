//your JS code here. If required.
function delay() {
	return new Promise((resolve, reject) =>{
		setTimeOut(() => {
			resolve("Hello, world!");
		}, 1000);
	});
}
 
const outputElement = document.getElementById("output");

delay().then((result) => {
	outputElement.innerText = result;
});
