introHeader = document.getElementsByClassName(`intro__header`)[0];
navToggle = document.getElementsByClassName(`navbar__toggle`)[0];
menuList = document.getElementsByClassName(`navbar__menu-list`)[0]

navToggle.addEventListener(`click`, function() {
  console.log(`click working`)
  if(menuList.style.height == "430px") {
    menuList.style.height = "0px";
    menuList.style.width = "0px";
    introHeader.style.marginTop = "0px";
  } else {
    menuList.style.height = "430px";
    menuList.style.width = "100%";
    introHeader.style.marginTop = "430px";
  }
})
