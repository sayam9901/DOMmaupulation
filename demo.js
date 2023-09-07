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
// const headerTitle = document.getElementById("header-title");
// const helloWorldSpan = document.createElement("span");
// helloWorldSpan.textContent = "Hello World";
// headerTitle.parentElement.insertBefore(helloWorldSpan, headerTitle);

// Add "Hello World" before "Item 1"
// const itemsList = document.getElementById("items");
// const listItem1 = itemsList.firstElementChild;
// const helloWorldListItem = document.createElement("li");
// helloWorldListItem.textContent = "Hello World";
// itemsList.insertBefore(helloWorldListItem, listItem1);
  
// task no 6 edit button and delete and add button

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // create an edit button element
  var editBtn = document.createElement('button')

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
 
  //add classes to edit button
 editBtn.className = "btn btn-success btn-sm float-right delete"

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  //Append text node in edit button
  editBtn.appendChild(document.createTextNode('Edit'))

  // Append delete and edit button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn)

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}