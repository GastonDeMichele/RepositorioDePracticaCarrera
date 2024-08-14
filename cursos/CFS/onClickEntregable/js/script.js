function toggleVisibility() {
    const boxOne = document.getElementById("first-box");
    const boxTwo = document.getElementById("second-box");

    if (boxOne.style.display === "none") {
        boxOne.style.display = "block";
        boxTwo.style.display = "none";
    } else {
        boxOne.style.display = "none";
        boxTwo.style.display = "block";
    }
}