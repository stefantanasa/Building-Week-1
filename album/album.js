//trow-1
function hideNumAddIcon() {
    document.getElementById("number-1").style.display = "none"
    let a = document.getElementById("trow-1")
    let numberClass = a.getElementsByClassName("bi-play")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "inline-block";
    }
}

function hideIconAddNum() {
    document.getElementById("number-1").style.display = "inline-block"
    let a = document.getElementById("trow-1")
    let numberClass = a.getElementsByClassName("bi-play")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "none";
    }
    document.getElementById("three-dots-end-id1").style.display = "none"
}
//trow-2
function hideNumAddIcon1() {
    document.getElementById("number-2").style.display = "none"
    let a = document.getElementById("trow-2")
    let numberClass = a.getElementsByClassName("bi-play")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "inline-block";
    }
}

function hideIconAddNum1() {
    document.getElementById("number-2").style.display = "inline-block"
    let a = document.getElementById("trow-2")
    let numberClass = a.getElementsByClassName("bi-play")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "none";
    }
}

//trow-3
function hideNumAddIcon2() {
    document.getElementById("number-3").style.display = "none"
    let a = document.getElementById("trow-3")
    let numberClass = a.getElementsByClassName("bi-play")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "inline-block";
    }
}

function hideIconAddNum2() {
    document.getElementById("number-3").style.display = "inline-block"
    let a = document.getElementById("trow-3")
    let numberClass = a.getElementsByClassName("bi-play")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "none";
    }
}
//trow-4
function hideNumAddIcon3() {
    document.getElementById("number-4").style.display = "none"
    let a = document.getElementById("trow-4")
    let numberClass = a.getElementsByClassName("bi-play")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "inline-block";
    }
}

function hideIconAddNum3() {
    document.getElementById("number-4").style.display = "inline-block"
    let a = document.getElementById("trow-4")
    let numberClass = a.getElementsByClassName("bi-play")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "none";
    }
}
//trow-3
function hideNumAddIcon4() {
    document.getElementById("number-5").style.display = "none"
    let a = document.getElementById("trow-5")
    let numberClass = a.getElementsByClassName("bi-play")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "inline-block";
    }
}

function hideIconAddNum4() {
    document.getElementById("number-5").style.display = "inline-block"
    let a = document.getElementById("trow-5")
    let numberClass = a.getElementsByClassName("bi-play")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "none";
    }
}


// header background change after 70px
let topBar = document.getElementById('topBar')
let mainContent = document.querySelector('#homeMainContent')

window.addEventListener('scroll', function () {

    if (window.pageYOffset < 70) {
        topBar.classList.remove('gradientBG')
    }
    if (topBar.classList.contains('gradientBG') && window.pageYOffset > 100) {
        return
    }
    if (window.pageYOffset > 70) {
        topBar.classList.add('gradientBG')
    }
}

)


// footer music change
function footerMusicChange() {
    let musicId = document.getElementById("music-name-1")
    let artistNameId = document.getElementById("artist-name-id")
    let imageId = document.getElementById("artist-image-id")
    document.getElementById("footer-music-name").innerHTML = musicId.textContent
    document.getElementById("footer-artics-name").innerHTML = artistNameId.textContent
    document.getElementById("footer-image").src = imageId.src
}

function footerMusicChange1() {
    let musicId = document.getElementById("music-name-2")
    let artistNameId = document.getElementById("artist-name-id")
    let imageId = document.getElementById("artist-image-id-1")
    document.getElementById("footer-music-name").innerHTML = musicId.textContent
    document.getElementById("footer-artics-name").innerHTML = artistNameId.textContent
    document.getElementById("footer-image").src = imageId.src
}
function footerMusicChange2() {
    let musicId = document.getElementById("music-name-3")
    let artistNameId = document.getElementById("artist-name-id")
    let imageId = document.getElementById("artist-image-id-2")
    document.getElementById("footer-music-name").innerHTML = musicId.textContent
    document.getElementById("footer-artics-name").innerHTML = artistNameId.textContent
    document.getElementById("footer-image").src = imageId.src
}
function footerMusicChange3() {
    let musicId = document.getElementById("music-name-4")
    let artistNameId = document.getElementById("artist-name-id")
    let imageId = document.getElementById("artist-image-id-3")
    document.getElementById("footer-music-name").innerHTML = musicId.textContent
    document.getElementById("footer-artics-name").innerHTML = artistNameId.textContent
    document.getElementById("footer-image").src = imageId.src
}
function footerMusicChange4() {
    let musicId = document.getElementById("music-name-5")
    let artistNameId = document.getElementById("artist-name-id")
    let imageId = document.getElementById("artist-image-id-4")
    document.getElementById("footer-music-name").innerHTML = musicId.textContent
    document.getElementById("footer-artics-name").innerHTML = artistNameId.textContent
    document.getElementById("footer-image").src = imageId.src
}