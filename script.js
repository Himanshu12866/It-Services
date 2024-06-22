function SubmitForm() {
  var valueName = document.getElementById("InputName").value;
  var valueEmail = document.getElementById("InputEmail").value;
  var valueNumber = document.getElementById("InputNumber").value;
  if (valueEmail == "" || valueName == "" || valueNumber == "") {

    document.getElementById("InputName").style.border = "2px solid yellow"
    document.getElementById("InputEmail").style.border = "2px solid yellow"
    document.getElementById("InputNumber").style.border = "2px solid yellow";
    document.getElementById("modal-msg").innerHTML = "Please Fill All the required field"
    document.getElementById("modal-msg-1").innerHTML = "";
    document.getElementById("modal-msg-2").innerHTML = "";
    document.getElementById("modal-msg-3").innerHTML = "";
  }
  else {
    document.getElementById("modal-msg").innerHTML = "We have recieved your information"
    document.getElementById("modal-msg-1").innerHTML = "We will try to contact you";
    document.getElementById("modal-msg-2").innerHTML = "as soon as possible";
    document.getElementById("modal-msg-3").innerHTML = `thank you<span class="bi bi-emoji-smile"></span>`;
    document.getElementById("InputName").value = "";
    document.getElementById("InputNumber").value = "";
    document.getElementById("InputEmail").value = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");


  // Get all elements with class="myImg"
  var images = document.getElementsByClassName("myImg");

  // Loop through all images to add onclick event
  for (var i = 0; i < images.length; i++) {
    images[i].onclick = function () {
      modal.style.display = "block";
      modal.style.width = "100%";
      modal.style.height = "100%"
      modalImg.src = this.src;
      modalImg.style.width = "70%";
      modalImg.style.height = "80%";


    }
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
});

function VdoClick() {
  var vdo = document.getElementById("VdoBox");
  vdo.style.display = "block";
  vdo.style.animation = "slideIn 0.6s ease";
  vdo.style.transform = "scale(1)";
}

function CloseVdo() {
  var vdo = document.getElementById("VdoBox");
  vdo.style.animation = "";
  vdo.style.transform = "scale(0)";
  setTimeout(function () {
    vdo.style.display = "none";
  }, 300);
}

ScrollReveal({
  reset: false,
  distance: "80px",
  duration: 500,
  delay: 50,
});
ScrollReveal().reveal(".navbar-brand,", {
  origin: "top",
});
ScrollReveal({
  reset: false,
  distance: "80px",
  duration: 1000,
  delay: 50,
});
ScrollReveal().reveal(".text, .feature,", {
  origin: "bottom",
});
ScrollReveal({
  reset: false,
  distance: "80px",
  duration: 1000,
  delay: 80,
});
ScrollReveal().reveal(" .text-1, .btn", {
  origin: "top",
});
// Scroll started 


ScrollReveal({
  reset: false,
  distance: "80px",
  duration: 1500,
  delay: 80,
});
ScrollReveal().reveal(" .bottom-scroll , .h2-text", {
  origin: "bottom",
});
ScrollReveal({
  reset: false,
  distance: "80px",
  duration: 1500,
  delay: 80,
});
ScrollReveal().reveal(" .top-scroll", {
  origin: "top",
});
ScrollReveal({
  reset: false,
  distance: "80px",
  duration: 1500,
  delay: 100,
});
ScrollReveal().reveal(" .left-scroll", {
  origin: "left",
});
ScrollReveal({
  reset: false,
  distance: "80px",
  duration: 1500,
  delay: 100,
});
ScrollReveal().reveal(" .right-scroll", {
  origin: "right",
});
