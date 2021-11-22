

//

function changeMusicNumberToIcon() {
    let a = document.getElementById("id-music-tabel")
    let numberClass = a.getElementsByClassName("heart-music-icon")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "flex";
    }
}
