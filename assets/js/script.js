const sidebar = document.getElementById("sidebar");
const opensliderBtn = document.getElementById("opensliderBtn");
const svgbtn = document.getElementById("svgbtn")
const layer = document.getElementById("layer")

opensliderBtn.addEventListener("click", function () {
    sidebar.classList.add("show")
    layer.classList.add("d-block")
})
svgbtn.addEventListener("click", function () {
    sidebar.classList.remove("show")
    layer.classList.remove("d-block")
})
