/*
example.js
Inclass 5
Jacob Ouellet
8/4/2021
 */

// ADD NEW ITEM TO END OF LIST
var item = "<li>cream</li>";
var list = document.getElementsByTagName("ul")[0];
list.innerHTML += item;
// ADD NEW ITEM START OF LIST
item = "<li>kale</li>";
list = document.getElementsByTagName("ul")[0];
list.innerHTML = item + list.innerHTML;

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var list_items = document.getElementsByTagName("li");

for(i = 0; i < list_items.length; i++){
    list_items[i].className = "cool";
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var items = list_items.length;
var heading = document.getElementsByTagName("h2")[0];
var heading_text = heading.innerText;
var new_heading = "<h2>" + heading_text + " <span style=\"height:20px; width:20px; background-color:black; color:white; border-radius:50%;\">" + items + "</span></h2>";
heading.innerHTML = new_heading
