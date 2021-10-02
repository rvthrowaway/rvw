// modal
var modal = document.getElementById("reviewModal");

// button that opens modal
var btn = document.getElementById("addReview");

// <span> element that closes modal
var span = document.getElementsByClassName("close")[0];

// When user clicks on button, open modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When user clicks on <span> (x), close modal
span.onclick = function() {
  modal.style.display = "none";
}

// When user clicks anywhere outside of modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

