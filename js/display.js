const btnSeleniumGit = document.querySelector("#Selenium");  
const btnWebDriverGit = document.querySelector("#Webdriverio");  

function pedirDatos() {
    $("#welcomeModal").modal("show");
};

let cod = document.querySelector("#codigo");
cod.setAttribute("type", "password");

cod.addEventListener('blur', (e) => {

    let codigo = e.target.value

    if (codigo.length < 4) {

        cod.setAttribute("style", "color:red");
        window.alert("Clave incorrecta, reintente");
    } else {

        const ke = new KeyboardEvent("keydown", {
            keyCode: 13
        });
        document.body.dispatchEvent(ke);

        if (codigo == '1008') {
            document.querySelector("#codigo")
            cod.setAttribute("style", "color:green");
            submit(1);

        } else {
            window.alert("Clave incorrecta, reintente");
            
        }
    }
});

function submit(val) {
    if (val = 1) {
        let enviar = document.querySelector("#submit");
        enviar.addEventListener("click", () => {
            $("#welcomeModal").modal("hide");
            mainEnable();
        })
    }

}


function mainEnable() {
    document.querySelector("#main").removeAttribute("style");
    document.querySelector("#welc").setAttribute("style", "display:none;");
    let name = document.querySelector("#name").value;
    let welcome = `<p>Hola ${name}!<p>`;
    document.querySelector("#panelSaludo").innerHTML = welcome;
}


btnSeleniumGit.addEventListener("click", ()=>{

    window.open("https://github.com/martinneme/Automation/tree/EntregaFinal");
});


btnWebDriverGit.addEventListener("click", ()=>{
    alert("Proyecto en construcción");
    // window.open("https://github.com/martinneme/Automation/tree/EntregaFinal");
});


