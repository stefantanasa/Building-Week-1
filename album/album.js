

//

function showLessMore() {
    let a = document.getElementById("id-music-tabel")
    let numberClass = a.getElementsByClassName("show-less-more")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "none";
        document.getElementById("show-less-more-text").style.display = "flex"
        document.getElementById("show-less-text").style.display = "none"
    }
}

function showLessMore1() {
    let a = document.getElementById("id-music-tabel")
    let numberClass = a.getElementsByClassName("show-less-more")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "flex";
        document.getElementById("show-less-more-text").style.display = "none"
        document.getElementById("show-less-text").style.display = "flex"
    }
}

