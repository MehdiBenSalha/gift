const correctCode = "2502"; // change this
let enteredCode = "";

function updateBoxes() {
  for (let i = 0; i < 4; i++) {
    document.getElementById("box" + i).textContent = enteredCode[i] || "";
  }
}

function addDigit(digit) {
  if (enteredCode.length < 4) {
    enteredCode += digit;
    updateBoxes();
  }
}

function removeDigit() {
  enteredCode = enteredCode.slice(0, -1);
  updateBoxes();
}

function checkCode() {
  const errorMsg = document.getElementById("errorMsg");

  if (enteredCode === correctCode) {
    errorMsg.textContent = "";
    enteredCode = "";
    updateBoxes();
    showPage("page2");
  } else {
    errorMsg.textContent = "Wrong passcode, try again 💔";
    enteredCode = "";
    updateBoxes();
  }
}

function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(page => page.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
