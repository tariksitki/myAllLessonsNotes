
const odd_rows = document.getElementsByClassName("odd_rows");
const even_rows = document.getElementsByClassName("even_rows");
const button_girls = document.getElementById("button_girls");
const button_boys = document.getElementById("button_boys");
const caption = document.getElementById("caption");
/////////////////////
const sport = document.getElementsByClassName("spor");
/////////////////////////////////////////////7
const book = document.getElementsByClassName("book");


button_girls.onclick = function() {
  odd_rows[0].style.backgroundColor = "pink";
  odd_rows[1].style.backgroundColor = "pink";
  odd_rows[2].style.backgroundColor = "pink";
  caption.style.backgroundColor = "pink";
    ///////////////////////////////////////////
  button_girls.style.visibility = "hidden";
  button_boys.style.visibility = "visible"; // bu satir yazmazsak ikinci tiklamada
                                            // iki button da kaybolur
  button_boys.innerHTML = "Change to Boys";
  //////////////////////////////////
  sport[0].innerHTML = "Sport";
  sport[1].innerHTML = "Sport";
  sport[2].innerHTML = "Sport";
  sport[3].innerHTML = "Sport";
  sport[4].innerHTML = "Sport";
  sport[0].style.color = "darkmagenta";
  sport[1].style.color = "darkmagenta";
  sport[2].style.color = "darkmagenta";
  sport[3].style.color = "darkmagenta";
  sport[4].style.color = "darkmagenta";
  ////////////////////////////////////////
  book[0].innerHTML = "";
  book[1].innerHTML = "";
  book[2].innerHTML = "";
  book[3].innerHTML = "";
  book[4].innerHTML = "";

  ///////////////////////////////////

  

};



button_boys.onclick = function () {
  odd_rows[0].style.backgroundColor = "cornflowerblue";
  odd_rows[1].style.backgroundColor = "cornflowerblue";
  odd_rows[2].style.backgroundColor = "cornflowerblue";
  caption.style.backgroundColor = "cornflowerblue";
  /////////////////////////////////////////
  button_boys.style.visibility = "hidden";
  button_girls.style.visibility = "visible"; // bu satir yazmazsak ikinci tiklamada
                                             // iki button da kaybolur
  button_girls.innerHTML = "Change to Girls";
  ///////////////////////////////////////////7
  book[0].innerHTML = "Book";
  book[1].innerHTML = "Book";
  book[2].innerHTML = "Book";
  book[3].innerHTML = "Book";
  book[4].innerHTML = "Book";
  book[0].style.color = "darkblue";
  book[1].style.color = "darkblue";
  book[2].style.color = "darkblue";
  book[3].style.color = "darkblue";
  book[4].style.color = "darkmablue";
  ////////////////////////////////////
  sport[0].innerHTML = "";
  sport[1].innerHTML = "";
  sport[2].innerHTML = "";
  sport[3].innerHTML = "";
  sport[4].innerHTML = "";
};

