document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll(".container");
    const toggleBtn = document.getElementById("toggle-btn");
  
    function toggleContainers() {
      let isLit = false;
  
      containers.forEach(container => {
        if (container.style.display === "none" || container.style.display === "") {
          container.style.display = "block";
          isLit = true;
        } else {
          container.style.display = "none";
        }
      });
  
      if (isLit) {
        toggleBtn.textContent = "Apagar";
      } else {
        toggleBtn.textContent = "Prender";
      }
    }
  
    toggleBtn.addEventListener("click", toggleContainers);
  });
  document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll(".container");
    const toggleBtn = document.getElementById("toggle-btn2");
  
    function toggleContainers() {
      let isLit = false;
  
      containers.forEach(container => {
        if (container.style.display === "none" || container.style.display === "") {
          container.style.display = "block";
          isLit = true;
        } else {
          container.style.display = "none";
        }
      });
  
      if (isLit) {
        toggleBtn.textContent = "Apagar";
      } else {
        toggleBtn.textContent = "Prender";
      }
    }
  
    toggleBtn.addEventListener("click", toggleContainers);
  });
  