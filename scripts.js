function displayView() {
    buildHeader();
    var view = localStorage.getItem("currentView");
    if(view == null || view == "home"){
        localStorage.setItem("currentView", "home");
        displayHome();
    } else if(view == "about") {
        displayAbout();
    } else if(view == "contact"){
        displayContact();
    }
    return;
}

function buildHeader(){
    var html = "<div class='wrapper'>" +
                   "<div class='navbar'>" +
                       "<label for='toggle'>&#9776;</label>" +
                           "<input type='checkbox' id='toggle'/>" +
                           "<div class='nav_menu'>" +
                               "<a href='index.html' class='active'>Hem</a>" +
                           "</div>" +
                    "</div>"+
                "</div>";
    document.getElementById("header").innerHTML = html;
    return;
}

function displayHome(){
    var html =  "<section id='showcase'>" +
                    "<div class='wrapper'>" +
                        "<img src='images/showcase.jpg'>" +
                    "</div>" +
                "</section>" +
                "<section id='boxes'>" +
                    "<div class='box'>" +
                        "<h3>JavaScript</h3>"+
                        "<img src='./images/javascript_logo.png'>" +
                    "</div>"+
                    "<div class='box'>" +
                        "<h3>Python</h3>" +
                        "<img src='./images/python_logo.png'>" +
                    "</div>" +
                    "<div class='box'>" +
                        "<h3>Raspberry Pi 3</h3>" +
                        "<img src='./images/rpi_logo.png'>" +
                    "</div>"+
                "</section>";
    document.getElementById("content").innerHTML = html;
}
function displayAbout(){

}
function displayContact(){

}
