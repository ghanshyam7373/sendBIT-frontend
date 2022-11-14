
const themes = ()=>{


let themeBtn = document.getElementById("modecheck");
let userPreferedScheme = window.matchMedia("(prefers-color-scheme:dark)");
let currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
  document.getElementById("navlogo").src = "/assets/light-logo.png";
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
  document.getElementById("navlogo").src = "/assets/dark-logo.png";
}

themeBtn.addEventListener("click", () => {
  if (userPreferedScheme.matches) {
    document.body.classList.toggle("light-theme");


    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");

    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  document.getElementById("navlogo").src = theme == 'dark' ? '/assets/light-logo.png':'/assets/dark-logo.png'; 
  localStorage.setItem("theme", theme);
});
};
themes();

// about page js
document.getElementById('backtohome').addEventListener('click',() =>{
  document.querySelector('about').style.display = "none";
  document.querySelector('main').style.display = "block";
  document.querySelector('body').style.backgroundColor = "var(--bg-color)";
  
  themes;
})

document.getElementById('infoicon').addEventListener('click',() =>{
  document.querySelector('main').style.display ="none";
  document.querySelector('about').style.display ="block";
  document.querySelector('body').style.backgroundColor ="#ff6600";
  themes;
})
