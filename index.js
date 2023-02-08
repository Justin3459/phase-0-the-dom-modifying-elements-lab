// Write your code here!
document.querySelector("main").remove();
const newHeader = document.createElement("h1");
newHeader.setAttribute("id" , "victory");
const text = document.getElementById("victory")
newHeader.innerHTML = "justin is the champion"
//h1.textContent = "justin is the champion"
//text.innerHTML = "<p>Justin is the champion</p>"
document.body.append(newHeader);
//const addID = .setAttribute("id","victory")
//document.getElementById("victory").textContent = "Justin is the champion";