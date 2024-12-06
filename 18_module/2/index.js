function progress(time) {
    if (time < 2) time = 2;
    
    const progressBar = document.getElementById("progress-bar");
    const timeElapsed = document.getElementById("time-elapsed");
  
    progressBar.style.transitionDuration = `${time}s`;
  
    let secondsPassed = 0;
    timeElapsed.textContent = `${secondsPassed}`;
  

    const interval = setInterval(() => {
      secondsPassed++;
      timeElapsed.textContent = `${secondsPassed}`;
      
      if (secondsPassed >= time) {
        clearInterval(interval); 
      }
    }, 1000);
  
    setTimeout(() => {
      progressBar.style.transform = "scaleX(1)";
    }, 50);
  }
  
  progress(10);
  