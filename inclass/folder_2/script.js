
var caption = document.getElementById("caption");
var button_girls = document.getElementById("button-girls");
var button_boys = document.getElementById("button-boys");
var odd_rows = document.getElementsByClassName("odd_rows");
var even_rows = document.getElementsByClassName("even_rows");
var book = document.getElementsByClassName("book");
var sport = document.getElementsByClassName("sport");

// getElementById => sadece tek bir element getirir 
// getElemetByClassName => sözkonusu class ismini kac html elementi verdiysek
//  bize onlarin hepsini getirir.

button_boys.onclick = function() {
    caption.style.backgroundColor = "cornflowerblue";
    odd_rows[0].style.backgroundColor = "cornflowerblue";
    odd_rows[1].style.backgroundColor = "cornflowerblue";
    odd_rows[2].style.backgroundColor = "cornflowerblue";
    even_rows[0].style.backgroundColor = "white";
    even_rows[1].style.backgroundColor = "white";
    ////////////////////////////
    button_boys.style.visibility = "hidden";
    button_girls.style.visibility = "visible";
    ///////////////////////////////
    button_girls.innerHTML = "Change to Girls";
    ///////////////////////////////////////
    book[0].innerHTML = "Book";
    book[1].innerHTML = "Book";
    book[2].innerHTML = "Book";
    book[3].innerHTML = "Book";
    book[4].innerHTML = "Book";
    /////////////////////////////////
    book[0].style.color = "darkblue";
    book[1].style.color = "darkblue";
    book[2].style.color = "darkblue";
    book[3].style.color = "darkblue";
    book[4].style.color = "darkblue";
    /////////////////////////////////
    sport[0].innerHTML = "";
    sport[1].innerHTML = "";
    sport[2].innerHTML = "";
    sport[3].innerHTML = "";
    sport[4].innerHTML = "";
    //////////////////////////////////

}

button_girls.onclick = function () {
  caption.style.backgroundColor = "pink";
  even_rows[0].style.backgroundColor = "pink";
  even_rows[1].style.backgroundColor = "pink";
  odd_rows[0].style.backgroundColor = "white";
  odd_rows[1].style.backgroundColor = "white";
  odd_rows[2].style.backgroundColor = "white";
  /////////////////////////
  button_girls.style.visibility = "hidden";
  button_boys.style.visibility = "visible";
  ///////////////////////////////////
  button_boys.innerHTML = "Change to Boys";
  /////////////////////////
  sport[0].innerHTML = "Sport";
  sport[1].innerHTML = "Sport";
  sport[2].innerHTML = "Sport";
  sport[3].innerHTML = "Sport";
  sport[4].innerHTML = "Sport";
  ///////////////////////////////////
  sport[0].style.color = "darkmagenta";
  sport[1].style.color = "darkmagenta";
  sport[2].style.color = "darkmagenta";
  sport[3].style.color = "darkmagenta";
  sport[4].style.color = "darkmagenta";
  //////////////////////////////////7
  book[0].innerHTML = "";
  book[1].innerHTML = "";
  book[2].innerHTML = "";
  book[3].innerHTML = "";
  book[4].innerHTML = "";

};




// trigger 












// variable : degisken
// by : tarafindan 
// get : getir 



