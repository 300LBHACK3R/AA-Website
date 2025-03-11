//--- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ---//
//--- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ---//
//--- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ---//

document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    const mainContent = document.getElementById("main-content");
    const enterBtn = document.getElementById("enter-btn");
    const introMusic = document.getElementById("intro-music");
    const canvas = document.getElementById("matrix");
    const ctx = canvas.getContext("2d");

    //--- Session Storage. ---//
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
        intro.style.display = "none";
        mainContent.classList.remove("hidden");
        document.body.style.overflow = "auto";
        startTypingEffect();
    } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const fontSize = 40;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(0);
        const chars = "Automated Anonymity";

        function drawMatrix() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#0f0";
            ctx.font = `${fontSize}px Courier New`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        setInterval(drawMatrix, 60);
        
        introMusic.play().catch(() => console.log("Intro music playback prevented."));

        //--- wHEN uSER cLICKS eNTER. ---//
        enterBtn.addEventListener("click", () => {
            intro.classList.add("fade-out");
            introMusic.pause();
            sessionStorage.setItem("hasVisited", "true");
            setTimeout(() => {
                intro.style.display = "none";
                mainContent.classList.remove("hidden");
                document.body.style.overflow = "auto";
                startTypingEffect(); 
            }, 1000);
        });
    }

    
    const typingText = "WELCOME TO AUTOMATED ANONYMITY...";
    let i = 0;

    function typeWriter() {
        if (i < typingText.length) {
            document.getElementById("typing-text").innerHTML += typingText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    function startTypingEffect() {
        document.getElementById("typing-text").innerHTML = ""; 
        i = 0;
        typeWriter();
    }
});

//--- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ---//
//--- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ---//
//--- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ---//