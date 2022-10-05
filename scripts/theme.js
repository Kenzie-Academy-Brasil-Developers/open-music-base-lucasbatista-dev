function handleDarkMode() {
  const dmButton = document.querySelector("#darkMode");
  const dmIcon = document.querySelector("#dmIcon");
  const html = document.querySelector("html");

  dmButton.addEventListener("click", () => {
    html.classList.toggle("dark-mode");
    dmIcon.classList.toggle("text-white");

    const dmPref = localStorage.getItem("darkmode");

    if (!dmPref) {
      localStorage.setItem("darkmode", true);
    }

    if (dmPref) {
      localStorage.removeItem("darkmode");
    }

    if (dmIcon.classList.contains("text-white")) {
      dmIcon.src = "../assets/img/sun.svg";
    } else {
      dmIcon.src = "../assets/img/moon.svg";
    }
  });
}

handleDarkMode();
