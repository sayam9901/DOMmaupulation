// console.dir(document)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.links)
// console.log(document.images)

//getelementbtid

// console.log(document.getElementById("main-header"))
// var headerTitle = document.getElementById("header-title")
// var Myheader = document.getElementById("main-header")
// var item = document.getElementById('items')
// item.style.fontWeight = "bold"
// item.style.color = 'green'
// console.log(headerTitle)
// console.log(Myheader)
// headerTitle.textContent = "Hello"
// headerTitle.innerHTML = "GOOD BYE"
// Myheader.style.borderBottom= "solid 3px #000"

//getelement ny class
 
// var myitems = document.getElementsByClassName("list-group-item")
// console.log(myitems)
// myitems[2].style.background = "green"
// var newItem = document.getElementsByClassName("my-new-list")
//  console.log(newItem)
//   newItem[0].style.fontWeight = 'bold'

//getelementbytagname
//  var list = document.getElementsByTagName("li")
//  console.log(list)
//  list[1].style.background = 'green'
//  list[2].style.color = 'white'

 //queryslectorall
//   var allList = document.querySelectorAll(".list-group-item")
//   var odd = document.querySelectorAll("li:nth-child(odd)")
//   console.log(allList)
//   allList[1].style.color = 'green'
// for(let i = 0 ; i<odd.length ; i++){
//     odd[i].style.background = 'green'
// }


// Add "Hello World" before "Item Lister"
const headerTitle = document.getElementById("header-title");
const helloWorldSpan = document.createElement("span");
helloWorldSpan.textContent = "Hello World";
headerTitle.parentElement.insertBefore(helloWorldSpan, headerTitle);

// Add "Hello World" before "Item 1"
const itemsList = document.getElementById("items");
const listItem1 = itemsList.firstElementChild;
const helloWorldListItem = document.createElement("li");
helloWorldListItem.textContent = "Hello World";
itemsList.insertBefore(helloWorldListItem, listItem1);
