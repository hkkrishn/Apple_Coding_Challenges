
document.addEventListener("click", function(){
    document.getElementsByClassName("nav-item")
    console.log('hello')
    var testDiv = document.getElementById("container");
  document.getElementsByClassName("nav-item").innerHTML = testDiv.offsetLeft;

  });

