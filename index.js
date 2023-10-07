const qrInput = document.getElementById("qr-url-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generate-btn");
const downlodeBtn = document.getElementById("downlode-btn");
const qrBody = document.querySelector(".qr-body");
//
//
//
let size = sizes.value;
// 
//


// For generate QRcoade 
generateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    isQRBoxEmptey();
})

// For Downlode QRcode 
downlodeBtn.addEventListener("click", () => {
    let img = document.querySelector(".qr-body img")

    if(img !== null){

        let imgAttr = img.getAttribute("src");
        downlodeBtn.setAttribute("href", imgAttr);
    }else{
        downlodeBtn.setAttribute("href", `${document.querySelector("canvas").toDataURL()}`);
    }
})


// For Sizes of QRCode
sizes.addEventListener("change", (e) => {
    size = e.target.value;

    isQRBoxEmptey();
});


// if QRcode is emptey
function isQRBoxEmptey() {

    qrInput.value.length > 0 ? generateQr() : alert("Plese enter url or text");
}




function generateQr() {

    qrBody.innerHTML = "";

    new QRCode(qrBody, {
        text: qrInput.value,
        height: size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000"
        // colorDark: "#FFAB00"
    })
}   