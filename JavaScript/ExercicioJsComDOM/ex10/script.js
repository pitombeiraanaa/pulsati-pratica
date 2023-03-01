const select = document.getElementById("videos");
          const video = document.getElementById("video");
    
          select.addEventListener("change", () => {
            const selectedOption = select.options[select.selectedIndex];
            video.src = selectedOption.value;
          });