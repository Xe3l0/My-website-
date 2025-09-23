
const projectWrappers = document.querySelectorAll('.project__image-wrapper');

projectWrappers.forEach(wrapper => {
  wrapper.addEventListener('mouseenter', () => {
    wrapper.classList.add('hovered');
  });

  wrapper.addEventListener('mouseleave', () => {
    wrapper.classList.remove('hovered');
  });
});


document.addEventListener("DOMContentLoaded", function() {
  
  let allSections = document.querySelectorAll("section");

  
  allSections.forEach(section => {
    if (!section.classList.contains("main")) {
      section.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
    
    let allSections = document.querySelectorAll("section");
    let navigationLinks = document.querySelectorAll(".navigation a");

    
    allSections.forEach(section => {
        if (!section.classList.contains("main")) {
            section.style.display = "none"; 
        }
    });

    navigationLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); 
            allSections.forEach(section => {
                section.style.display = "none";
            });
            
            
            let targetSection = document.querySelector(link.getAttribute("href"));
            if (targetSection) {
                targetSection.style.display = "block";
            }
        });
    });
});

document.querySelectorAll('.main-btn, .main-btn1').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();

        document.querySelectorAll('.tabs-content section').forEach(tab => {
            tab.classList.remove('active');
        });

        
        const targetTab = document.querySelector(this.getAttribute('href'));
        if (targetTab) {
            targetTab.classList.add('active');
        }
    });
});

document.querySelector(".logo").addEventListener("click", function(event) {
    event.preventDefault();


    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });

    
    document.querySelector("#main").style.display = "block";
});

