/******* switch-navbar  *********/
const aside = document.querySelector("aside");
const navBarSwitcher = document.querySelector("#switch-navbar");
const navLogoText = document.querySelector("#nav-logo span");
const titleSprate = document.querySelectorAll(".title-sprate");
const navItemsText = document.querySelectorAll("#nav-items ul > a > span");
const navToolsText = document.querySelectorAll("#nav-tools ul li  a > span");
const profileData = document.querySelector("#profile-data");
const profileDetails = document.querySelector("#profile-details");
navBarSwitcher.onclick = function(){
    if (this.style.justifyContent == "flex-end") {
        this.style.justifyContent = "flex-start";
        this.style.color = "#bbe1fa";
        aside.style.width = "20%";
        navLogoText.style.display = "inline";
        titleSprate.forEach(i => {
            i.style.visibility = "visible";
            i.style.fontSize = "13px";
        });
        navItemsText.forEach(i => {
            i.style.display = "inline";
        });
        navToolsText.forEach(i => {
            i.style.display = "inline";
        });
        profileData.style.display = "flex";
        profileDetails.style.display = "flex";
    } else{
        this.style.justifyContent = "flex-end";
        this.style.transition = "all .5s";
        this.style.color = "#1b262c";
        aside.style.width = "6%";
        aside.style.transition = "all .5s";
        navLogoText.style.display = "none";
        titleSprate.forEach(i => {
            i.style.visibility = "hidden";
            i.style.fontSize = "5px";
        });
        navItemsText.forEach(i => {
            i.style.display = "none";
        });
        navToolsText.forEach(i => {
            i.style.display = "none";
        });
        profileData.style.display = "none";
        profileDetails.style.display = "none";
    }
}
/******* switch-navbar  *********/