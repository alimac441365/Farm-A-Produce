const active = () => {
  const nav = document.getElementById("links");
  let link = nav.getElementsByClassName("menu-item");
  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function () {
      let active = document.getElementsByClassName("active");
      if (active.length > 0) {
        active[0].className = active[0].className.replace("active", "");
      }
      this.className += " active";
    });
  }
};

active;
