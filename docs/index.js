const menuEle = document.querySelector("nav").querySelector("menu");

const navList = [
  {
    place: "Home",
    tip: "The root webpage",
    link: "#"
  },
  {
    place: "Projects",
    tip: "All completed builds",
    link: "#"
  },
  {
    place: "Blog",
    tip: "Written progress updates",
    link: "#"
  }
];

window.onload = function() {
  if(menuEle && navList) {
    navList.forEach((n) => {
      const insertNav = document.createElement("a");
      const liEle = document.createElement("li");
      const tooltip = document.createElement("span");
      tooltip.classList.add('tooltip');
      tooltip.innerHTML = n.tip;
      liEle.innerHTML = n.place;
      insertNav.href = n.link;
      insertNav.appendChild(liEle);
      insertNav.appendChild(tooltip);
      menuEle.appendChild(insertNav);
    });
  }
};
