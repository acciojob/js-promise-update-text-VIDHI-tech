//your JS code here. If required.
function delayedHello() {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve("Hello, world!");
     }, 1000);
   });
}
 const outputElement = document.getElementById("output");
 delayedHello().then((result) => {
   outputElement.innerText = result;
 });
