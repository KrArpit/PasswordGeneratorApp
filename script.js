const sliderValue = document.getElementById("sliderValue");
const slider = document.getElementById("slider");
const range = document.querySelectorAll('input[type="range"]');
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const bar4 = document.getElementById("bar4");

// Slider
sliderValue.innerHTML = slider.value;

slider.addEventListener("input", ()=>{
    sliderValue.innerHTML=slider.value;

    const levelText = document.getElementById("strengthLevelText");

    if(slider.value <= 4){
        levelText.innerHTML = "TOO WEAK!";
        bar1.classList.remove("tooWeak", "weak", "medium", "strong");
        bar2.classList.remove("tooWeak", "weak", "medium", "strong");
        bar3.classList.remove("tooWeak", "weak", "medium", "strong");
        bar4.classList.remove("tooWeak", "weak", "medium", "strong");
        bar1.classList.add("tooWeak");
    }

    if(slider.value > 4 && slider.value <= 7){
        levelText.innerHTML = "WEAK";
        bar1.classList.remove("tooWeak", "weak", "medium", "strong");
        bar2.classList.remove("tooWeak", "weak", "medium", "strong");
        bar3.classList.remove("tooWeak", "weak", "medium", "strong");
        bar4.classList.remove("tooWeak", "weak", "medium", "strong");
        bar1.classList.add("weak");
        bar2.classList.add("weak");
    }

    if(slider.value > 7 && slider.value <= 10){
        levelText.innerHTML = "MEDIUM";
        bar1.classList.remove("tooWeak", "weak", "medium", "strong");
        bar2.classList.remove("tooWeak", "weak", "medium", "strong");
        bar3.classList.remove("tooWeak", "weak", "medium", "strong");
        bar4.classList.remove("tooWeak", "weak", "medium", "strong");
        bar1.classList.add("medium");
        bar2.classList.add("medium");
        bar3.classList.add("medium");
    }

    if(slider.value > 10 && slider.value <= 15){
        levelText.innerHTML = "STRONG";
        bar1.classList.remove("tooWeak", "weak", "medium", "strong");
        bar2.classList.remove("tooWeak", "weak", "medium", "strong");
        bar3.classList.remove("tooWeak", "weak", "medium", "strong");
        bar4.classList.remove("tooWeak", "weak", "medium", "strong");
        bar1.classList.add("strong");
        bar2.classList.add("strong");
        bar3.classList.add("strong");
        bar4.classList.add("strong");
    }
});

// Range
range.forEach(input => {
    input.addEventListener("input", handleInputChange);
});

function handleInputChange(e){
    let target = e.target;

    const min = target.min;
    const max = target.max;
    const val = target.value;

    target.style.backgroundSize = ((val-min)*100 / (max-min)) +"% 100%";
}

// Generate Password
const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generatePassword);
const passwordText = document.getElementById("passwordText");

function generatePassword(){
    const uppercase = document.getElementById("inclUppercase");
    const lowercase = document.getElementById("inclLowercase");
    const number = document.getElementById("inclNumber");
    const symbol = document.getElementById("inclSymbol");
    const error = document.getElementById("error-msg");
    
    if(uppercase.checked === false &&
        lowercase.checked === false &&
        number.checked === false &&
        symbol.checked === false){
            error.style.display = "block";
            setTimeout(() => {
                error.style.display = "none";
            }, 1500);
        }

    else{
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const numberChars = "0123456789";
        const symbolChars = "~`!@#$%^&*()_-+={[}]|;'<,>.?/:";

        let password = "";
        let sliderLength = slider.value;

        while(sliderLength > password.length){
        if(uppercase.checked === true && sliderLength > password.length){
            password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
        }
        if(lowercase.checked === true && sliderLength > password.length){
            password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
        }
        if(number.checked === true && sliderLength > password.length){
            password += numberChars[Math.floor(Math.random() * numberChars.length)];
        }
        if(symbol.checked === true && sliderLength > password.length){
            password += symbolChars[Math.floor(Math.random() * symbolChars.length)];
        }
    }

        passwordText.value = password;
        passwordText.style.color = "hsl(252, 11%, 91%)";
        error.style.display = "none";
    }
}


// Copy Password
const copyIcon = document.getElementById("copyIcon");
const copyMsg = document.getElementById("copyMsg");

copyIcon.addEventListener("click", ()=>{
    
    let copyText = document.getElementById("passwordText").value;
    
    // copy the text inside the input box
    navigator.clipboard.writeText(copyText);
    
    copyMsg.style.display = "block";
    setTimeout(() => {
        copyMsg.style.display = "none";
    }, 2000);
})