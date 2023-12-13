document.addEventListener("DOMContentLoaded", function() {
    const btn1 = document.getElementById("btn1");
    const pwrd = document.getElementById("pwrd");
    const email = document.getElementById("email");
    const emsg = document.getElementById("emsg");
    const emsg2 = document.getElementById("emsg2");
    const btn2 = document.getElementById("btn2");
    const xbtn = document.getElementById("xbtn");
    const sForm = document.getElementById("signup-bx");
    const btn3 = document.getElementById("btn3");

    btn1.addEventListener("click", function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\d{10}$/;
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const inputValue = email.value.trim(); //gets the value of email and trims extra spaces included in the input box & also declares email as inputValue 
        const passwordValue = pwrd.value.trim(); //gets the value of pwrd and trims extra spaces included in the text & also declares pwrd as passwordValue

        if (inputValue === "") { //checks if email input box is empty
            emsg.style.visibility = "visible"; //if email input box is empty emsg is visible
        } else if (!emailPattern.test(inputValue) && !phonePattern.test(inputValue)){ //
            emsg.style.visibility = "visible";
        } else {
            emsg.style.visibility = "hidden";
        }

        if (passwordValue.length < 8){
            emsg2.style.visibility = "visible";
        } else if (passwordPattern.test(passwordValue)) {
            emsg2.style.visibility = "visible";
        } else {
            emsg2.style.visibility = "hidden";
        }
        if (emsg.style.visibility === "visible" || emsg2.style.visibility === "visible") {
            event.preventDefault();
        }
    })
    btn2.addEventListener("click", function() {
        sForm.style.visibility = "visible";
    })
    xbtn.addEventListener("click", function() {
        sForm.style.visibility = "hidden";
    })
    const currentYear = new Date().getFullYear();
    const yearMenu = document.getElementById("year");

    for (let i = currentYear; i >= currentYear - 99; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearMenu.appendChild(option);
    }
    document.getElementById("female").addEventListener("change", function() {
        // Toggle the checkbox state
        if (this.checked) {
            document.getElementById("male").checked = false;
        }
    });

    document.getElementById("male").addEventListener("change", function() {
        // Toggle the checkbox state
        if (this.checked) {
            document.getElementById("female").checked = false;
        }
    });
    
    btn3.addEventListener("click", function() {
        const fName = document.getElementById("fname");
        const lName = document.getElementById("lname");
        const emlNum = document.getElementById("eml-num");
        const pwrd2 = document.getElementById("pwrd2");
        const etxt1 = document.getElementById("etxt1");
        const etxt2 = document.getElementById("etxt2");
        const etxt3 = document.getElementById("etxt3");
        const etxt4 = document.getElementById("etxt4");
        const etx = document.getElementById("etx");
        const etx2 = document.getElementById("etx2");
        const iValue = emlNum.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\d{10}$/;
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const passwordValue = pwrd2.value.trim();
        const month = document.getElementById("month");
        const day = document.getElementById("day");
        const year = document.getElementById("year");
        const female = document.getElementById("female");
        const male = document.getElementById("male");
        event.preventDefault();

        if (fName.value.trim() === ""){
            etxt1.style.opacity = "1";
        } else {
            etxt1.style.opacity = "0";
        }
        if (lName.value.trim() === ""){
            etxt2.style.opacity = "1";
        } else {
            etxt2.style.opacity = "0";
        }
        if (iValue === ""){
            etxt3.style.opacity = "1";
        } else if (!emailPattern.test(iValue) && !phonePattern.test(iValue)){
            etxt3.style.opacity = "1";
        } else {
            etxt3.style.opacity = "0";
        }
        if (passwordValue.length < 8) {
            etxt4.style.opacity = "1";
        } else if (passwordPattern.test(passwordValue)) {
            etxt4.style.opacity = "1";
        } else {
            etxt4.style.opacity = "0";
        }
        
        const isBirthdayValid = month.value !== "" && day.value !== "" && year.value !== "";
        if (!isBirthdayValid) {  // Handle the case when birthday is not selected
            etx.style.opacity = "1";
        } else {
            etx.style.opacity = "0";
        }

        const isGenderSelected = female.checked || male.checked;
        if (!isGenderSelected) {  // Handle the case when gender is not selected
            etx2.style.opacity = "1";
        } else {
            etx2.style.opacity = "0";
        }

    })
})