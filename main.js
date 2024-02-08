// arrays
let numbers = [1,2,3,4,5,6,7,8,9]
let uppercase_letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
 "O","P","Q","R","S","T","U","V","W","X","Y","Z"
]

let lowercase_letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
 "p","q","r","s","t","u","v","w","x","y","z"
]

let symbols =["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}",
 "]",",","|",":",";","<",">",".","?","/"
]

// variables 
let password ="";
let numbers_checkBox = document.querySelector('.numbers')
let uppercase_checkBox = document.querySelector('.uppercase-letters')
let lowercase_checkBox = document.querySelector('.lowercase-letters')
let symbols_checkBox = document.querySelector('.symbols')
let generate_btn = document.querySelector('.genrate-pass-btn')
let result = document.querySelector(".get-password input");
let  password_length = document.querySelector('.pass-length');
let length_place = document.querySelector('.length-value');
let error = document.querySelector(".error span")
let current_length = Number(password_length.value);
let copy = document.querySelector(".get-password img")

// Generate passsword logic
function generate_password(){
        password = ""; 
        copy.setAttribute("src","images/copy.png")
        let selectedChars = [];
        if (numbers_checkBox.checked){
            selectedChars=selectedChars.concat(numbers)
        }
        if (uppercase_checkBox.checked){
            selectedChars=selectedChars.concat(uppercase_letters)
        }
        if (lowercase_checkBox.checked){
            selectedChars=selectedChars.concat(lowercase_letters)
        }
        if (symbols_checkBox.checked){
            selectedChars=selectedChars.concat(symbols)
        }if(selectedChars.length === 0 ){
            error.innerHTML = "Please select your password type 🫥";
        }else{
            error.innerHTML ="";
                for (let i = 0; i < current_length; i++) {
                     password += selectedChars[Math.floor(Math.random() * selectedChars.length)];
                }
                result.value = password;   
        }  
}

// password copying  logic
function copyPassword() {
    navigator.clipboard.writeText(result.value)
}

// Events
copy.addEventListener("click",()=>{
    if(password.length !== 0){
        copyPassword()
        // result.select();
        // document.execCommand("copy");
        copy.setAttribute("src","images/copied.png")
    }
})
password_length.addEventListener("input",()=>{
    current_length = Number(password_length.value)
    length_place.innerHTML = "Password length: "+current_length;

})
generate_btn.addEventListener('click',generate_password)




