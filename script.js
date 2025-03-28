document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll('input[name="units"]');
    const selection1 = document.getElementById("selection1");
    const selection2 = document.getElementById("selection2");
    const selection3 = document.getElementById("selection3");
  
    selection1.style.display = "none";  
    selection2.style.display = "none"; 
    selection3.style.display = "none";  
  
    radios.forEach(radio => {
      radio.addEventListener("change", function () {
        // Hide all selection divs first
        selection1.style.display = "none";
        selection2.style.display = "none";
        selection3.style.display = "none";
  
        switch (this.value) {
          case "1":
            selection1.style.display = "block";
            break;
          case "2":
            selection2.style.display = "block";
            break;
          case "3":
            selection3.style.display = "block";
            break;
        }
  
        radios.forEach(r => {
          r.parentElement.style.border = ""; 
        });
        this.parentElement.style.border = "#f47c9b"; 
      });
    });
  
    document.querySelector('input[name="units"][value="1"]').checked = true;
    selection1.style.display = "block";  
  });
  