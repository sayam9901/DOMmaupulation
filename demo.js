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
var item = document.getElementById('items')
item.style.fontWeight = "bold"
item.style.color = 'green'
// console.log(headerTitle)
// console.log(Myheader)
// headerTitle.textContent = "Hello"
// headerTitle.innerHTML = "GOOD BYE"
// Myheader.style.borderBottom= "solid 3px #000"

//getelement ny class
 
var myitems = document.getElementsByClassName("list-group-item")
console.log(myitems)
myitems[2].style.background = "green"