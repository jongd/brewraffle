// function chooseBrewer(){
// //brewers = document.getElementById('brewers').value.split("\n")
// // Maybe new way to add to list?
// brewers = document.getElementById('name-list').getElementsByTagName('li').value;
// brewer = brewers[Math.floor(Math.random()*brewers.length)];

// //previousBrewers = JSON.parse(localStorage['previousBrewers'] || "[]")

// //previousBrewers.push(brewer)

// //localStorage["previousBrewers"] = JSON.stringify(previousBrewers)

// document.getElementById("the_brewer").innerHTML = brewer + "."
document.getElementById("gearoid").style.display = 'block';

// //document.getElementById('previous_brewers').innerHTML = 'Previous brewers were: ' + JSON.parse(localStorage["previousBrewers"])

// //return false;
// }

//Add list items to array

// $(function(){
//   var brewers = $("#name-list li").map(function(){
//   return $(this).text();}).get().join(',');
// })

$(document).ready(function() {
  // Ad it
  $("#gogogo").click(function() {
    var newName = $("#new-name").val();
  $('#name-list').append("<li class='name'><p>" + newName + "</p><button class='destroy'></button></li>");
  $("#new-name").val('');
  });
  // Remove it
  $('.destroy').live('click', function() {
  $(this).parents("li.name").remove();
  });
})

function chooseBrewer(){

var brewList = $('#name-list');
var brewers = $('li');

var brewer = brewers[Math.floor(Math.random()*brewers.length)];

$("#the_brewer").html($(brewer).text() + ".");

}

$('new=candidate-name').click(function() {
    chooseBrewer()}
);