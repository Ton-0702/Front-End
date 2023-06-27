function login(){
    const username = document.getElementById("u_name").value;
    const password = document.getElementById("u_pw").value;
    const errorMessage = document.getElementById("errmes");
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: username,
          password: password,
          // expiresInMins: 60, // optional
        })
      })
      .then(res => {
        if (res.status !== 200){
            console.log(res);
            errorMessage.innerText = "Wrong password or username";
            return;
        }
        else{
            console.log("success");
            console.log(res);
            window.location.assign("responsive.html")
        }
        
        res.json().then(res => {
          console.log(res.token);
          if (res.token != null || res.token != undefined || res.token != ""){
            localStorage.setItem('token', res.token);
            window.location.assign("responsive.html");
          }
        });
        // console.log(res);
        })
      .then(console.log);
}



const token_localStorage = localStorage.getItem('token');
if (token_localStorage == undefined || token_localStorage == null || token_localStorage == ""){
    console.log(`token exist ${token_localStorage}`);
    }
else{
  window.location.assign("responsive.html")
}

//toggle hide_password

// // cach 3
var h_pw = document.querySelector("#hidden_pw")
var s_pw = document.querySelector("#show_pw")
var input_pw = document.querySelector("#u_pw")

function hidden_password(){
  h_pw.classList.add("d_none")
  s_pw.classList.add("d_show")
  input_pw.type = "text"
}

function show_password(){
  h_pw.classList.remove("d_none")
  s_pw.classList.remove("d_show")
  input_pw.type = "password"
}


// function hidden_pashow_passwordssword(){
//   let h_pw = document.getElementById("show_pw")
//   h_pw.classList.add("d_block")
// }
// // cach 1

// function hide_password() {
//   var x = document.getElementById("u_pw");
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
// }

// // Cach 2

// function hide_password() {
//   let togglePassword = document.getElementById("toogle_password")
//   let password  = document.getElementById("u_pw");
//   togglePassword.addEventListener("click", function () {
//     // toggle the type attribute
//     const type = password.getAttribute("type") === "password" ? "text" : "password";
//     password.setAttribute("type", type);
    
//     // toggle the icon
//     // this.classList.toggle("fa-eye");
//   });
// }



// async function fetchData() {
//     const user_ = await getAll();
//     console.log(user_);
// }



            