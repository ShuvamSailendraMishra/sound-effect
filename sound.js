const nature = ["birds","forest","sea","wind"];
const containerE1 = document.querySelector(".container");
nature.forEach(nature=>{
    const btnE1 = document.createElement("button");
    btnE1.classList.add("btn");
    btnE1.innerText = nature;
    btnE1.style.backgroundImage = "url(photos/" + nature +".jpg)"
    containerE1.appendChild(btnE1);
    const audioE1=document.createElement("audio");
    audioE1.src="audio/"+ nature + ".mp3";
    containerE1.appendChild(audioE1);
    btnE1.addEventListener("click" ,()=>{
        audioE1.play()
    })

})