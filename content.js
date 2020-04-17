// console.log("aeeeeaee um love um love um love com vocêee eeeaee")
// function myAlert() {
//     alert("Fábio Passaáudios! Mas agora mais rápido :p");
//   }

const interval = setInterval(() => {
    const header = document.querySelector("#side header");
    if (header) {
        console.log(header)
        clearInterval(interval)

        const button200 = document.createElement("button")
        button200.innerHTML = "2.0x"
        button200.classList.add("SpeedUp200")

        button200.addEventListener("click", ()=>{
            const audios = document.querySelectorAll("audio");
            audios.forEach((audio) => {
                console.log(audio)
                audio.playbackRate = 2;
            })
        });

        // button200.addEventListener("click", myAlert);

        header.appendChild(button200)

        const button150 = document.createElement("button")
        button150.innerHTML = "1.5x"
        button150.classList.add("SpeedUp150")

        button150.addEventListener("click", ()=>{
            const audios = document.querySelectorAll("audio");
            audios.forEach((audio) => {
                console.log(audio)
                audio.playbackRate = 1.5;
            })
        });
        // button150.addEventListener("click", myAlert);

        header.appendChild(button150)

        const button125 = document.createElement("button")
        button125.innerHTML = "1.25x"
        button125.classList.add("SpeedUp125")

        button125.addEventListener("click", ()=>{
            const audios = document.querySelectorAll("audio");
            audios.forEach((audio) => {
                console.log(audio)
                audio.playbackRate = 1.25;
            })
        });

        // button125.addEventListener("click", myAlert);

        header.appendChild(button125)

    }
}, 1000)



