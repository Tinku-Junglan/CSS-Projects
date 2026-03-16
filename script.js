document.getElementById("log-button").addEventListener("click", showToast);

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// $(document).ready(function () {
//   $("#navLinks").hide();
// });

$(document).ready(function () {
  $("#menuToggle").click(function () {
    $("#navLinks").toggle();
  });
});

$(document).ready(function () {
  $("#navLinks li").click(function () {
    $("#navLinks").hide();
  });
});

function showToast() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-start",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  Toast.fire({
    icon: "success",
    title: "Clicked LogIn Button successfully",
  });
}

Swal.mixin({
  title: "Hii, Naveen",
  position: "bottom-start",
  text: "Hello, How are you Naveen Singh Junglan?",
  icon: "success",
  toast: true,
}).bindClickHandler();

Swal.mixin({
  title: "The Internet?",
  position: "bottom-end",
  text: "Connect Your Internet.........",
  icon: "success",
  toast: true,
  theme: "dark",
}).bindClickHandler("data-swal-toast-template");
