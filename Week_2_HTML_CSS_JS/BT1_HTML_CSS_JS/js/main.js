const check_token = localStorage.getItem('token');
if (check_token  == undefined || check_token == null || check_token == ""){
    window.location.replace("login.html")
}

const form_cancle = () =>{

    const form = document.getElementById("form_info");
    
    form.reset();    
}

function arrow_display_none(){
    const f_setting = document.getElementById("front_setting");
    f_setting.style.display = "none";
}

function setting_display_show(){
    const f_setting = document.getElementById("front_setting");
    console.log(f_setting)
    f_setting.style.display = "block";
}


function addActive(){
    var header = document.getElementById("menu");
    var btn = header.getElementsByClassName("btn");
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function(event) {
        let current = document.getElementsByClassName("active_change");
        if (current.length > 0) {
            current[0].className = current[0].className.replace("active_change", "");
        }
        this.className = "active_change";
        });
    }
}

function logout(){
    window.localStorage.removeItem('token')
    window.location.replace("login.html")
}

// function bold_pen(){
//     const pen_ = document.querySelectorAll(".pen")
//     for (let i=0; i<pen_.length; i++){
//         pen_[i].style.color = "black";   
//         pen_[i].style.fontWeight ="bold";
//     }

//     const bell_ = document.querySelectorAll(".bell")
//     for (i=0; i<bell_.length; i++){
//         bell_[i].style.color = "#858585"
//         bell_[i].style.fontWeight =""
//     }
// }

// function bold_bell(){
//     const bell_ = document.querySelectorAll(".bell")
//     for (i=0; i<bell_.length; i++){
//         bell_[i].style.color = "black"
//         bell_[i].style.fontWeight ="bold"
//     }

//     const pen_ = document.querySelectorAll(".pen")
//     for (i=0; i<pen_.length; i++){
//         pen_[i].style.color = "#858585"
//         pen_[i].style.fontWeight =""
//     }
// }

// Khi người dùng nhấn nút save,
//  kiểm tra thông tin người dùng nhập vào, tất cả các giá trị không được bỏ trống
// Nếu có thẻ nào bỏ trống thì tô đỏ border đó

function save_info(){
    const form_save = document.getElementById("form_info");
    const input_ = form_save.getElementsByTagName("input");
    console.log(input_);
    for (let i=0; i<input_.length;i++){
        if (input_[i].value == ""){
            console.log(input_[i]);
            input_[i].style.borderStyle = "solid"
            input_[i].style.borderColor = "red"
            // return false;
        }
    }
    return true;
}