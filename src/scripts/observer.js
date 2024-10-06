const intersectionObserver = new IntersectionObserver((entries,observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
          entry.target.style.animation = "fadeIn 1s ease-in-out 300ms";
          setTimeout(() => {
            entry.target.style.visibility = "visible";
        },500);
      } 
    }) 
  });

intersectionObserver.observe(document.getElementById("about"));	
intersectionObserver.observe(document.getElementById("profile_image"));	
intersectionObserver.observe(document.getElementById("simulations_container"));	
intersectionObserver.observe(document.getElementById("publications"));	
intersectionObserver.observe(document.getElementById("skills"));	
intersectionObserver.observe(document.getElementById("gaming"));	