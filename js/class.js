//get element by id
// var liNode = document.getElementById("one")
// var liNode = document.querySelector("#one")
// liNode.className = "cool"
// liNode.textContent = "cool"

//

//get element by class name
// var liNodesArray = document.getElementsByClassName("hot")
//^^^ doesnt work so used query
// var liNodesArray = document.querySelectorAll(".hot")
// // if (liNodesArray.length > 2) {
// //     liNodesArray[2].className = "cool"
// // }

// for (var index = 0; index <= liNodesArray.length; index++) {
//     liNodesArray[index].className = "cool"
// }

//

//add element

// var ulElement = document.createElement('ul');
// var body = document.querySelector("body")
// body.append(ulElement)

// var liOne = document.createElement("li")
// liOne.textContent = "dani"
// var ul = document.querySelector("ul")
// ul.append(liOne)

// var litwo = document.createElement("li")
// litwo.textContent = "juan"
// var ul = document.querySelector("ul")
// ul.append(litwo)


function createHTMLElement(tagName, parentNode, innerText) {
    var tag = document.createElement(tagName);
    if (innerText.length > 0) {
        tag.textContent = innerText;
    }
    parentNode.append(tag);
    return tag
}

var body = document.querySelector('body')

var ol = createHTMLElement('ol', body, "");

for (var numTags = 1; numTags <= 5; numTags++) {
    createHTMLElement("li", ol, `${numTags} Hello`)
}