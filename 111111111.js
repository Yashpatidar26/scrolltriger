const nav = document.getElementById("nav");

for(const link of nav.getElementsByTagName("a")) {  
  link.onmousemove = e => {
    const rect = link.getBoundingClientRect(),    
          img = link.querySelector("img");
    
    img.style.left = `${e.clientX - rect.left}px`;
    img.style.top = `${e.clientY - rect.top}px`;
  }
}

window.onmousemove = e => {
  const percent = e.clientY / window.innerHeight;
  
  nav.animate({
    transform: `translateY(${percent * nav.offsetHeight * -1}px)`
  }, {
    fill: "forwards",
    duration: 5000
  })
}