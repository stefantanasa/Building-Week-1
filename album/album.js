function hideNumAddIcon() {
    let a = document.getElementById("id-music-tabel")
    let numberClass = a.getElementsByClassName("track-number-to-change-icon")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "none";
        let b = a.getElementsByClassName("bi-play")
        for (let i = 0; i < b.length; i++) {
            b[i].style.display = "inline-block";

        }
    }
}
