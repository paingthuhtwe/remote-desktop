const nav = document.getElementById("navSection");

var waypoint = new Waypoint({
  element: document.getElementById("whySection"),
  handler: function (direction) {
    if (direction == "down") {
      nav.classList.add("fixed", "top-0", "w-full", "animate__fadeInDown");
    } else {
      nav.classList.remove("fixed", "top-0", "w-full", "animate__fadeInDown");
    }
  },
  offset: "0%",
});
