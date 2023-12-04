// const qrInput = document.getElementById("qr-url-text");
// const sizes = document.getElementById("sizes");
// const generateBtn = document.getElementById("generate-btn");
// const downlodeBtn = document.getElementById("downlode-btn");
// const qrBody = document.querySelector(".qr-body");
// //
// //
// //
// let size = sizes.value;
// // 
// //


// // For generate QRcoade 
// generateBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     isQRBoxEmptey();
// })

// // For Downlode QRcode 
// downlodeBtn.addEventListener("click", () => {
//     let img = document.querySelector(".qr-body img")

//     if(img !== null){

//         let imgAttr = img.getAttribute("src");
//         downlodeBtn.setAttribute("href", imgAttr);
//     }else{
//         downlodeBtn.setAttribute("href", `${document.querySelector("canvas").toDataURL()}`);
//     }
// })


// // For Sizes of QRCode
// sizes.addEventListener("change", (e) => {
//     size = e.target.value;

//     isQRBoxEmptey();
// });


// // if QRcode is emptey
// function isQRBoxEmptey() {

//     qrInput.value.length > 0 ? generateQr() : alert("Plese enter url or text");
// }




// function generateQr() {

//     qrBody.innerHTML = "";

//     new QRCode(qrBody, {
//         text: qrInput.value,
//         height: size,
//         width: size,
//         colorLight: "#fff",
//         colorDark: "#FC4258"
//         // colorDark: "#FFAB00"
//     })
// }   


// Inside the generateBtn.addEventListener

const qrInput = document.getElementById("qr-url-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generate-btn");
const downlodeBtn = document.getElementById("downlode-btn");
const qrBody = document.querySelector(".qr-body");
// const lightColorInput = document.getElementById("light-color");
const darkColorInput = document.getElementById("dark-color");

let size = sizes.value;

function generateQr() {
    qrBody.innerHTML = "";

    new QRCode(qrBody, {
        text: qrInput.value,
        height: size,
        width: size,
        // colorLight: lightColorInput.value,
        colorDark: darkColorInput.value
    });
}

generateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    isQRBoxEmpty();
});

sizes.addEventListener("change", (e) => {
    size = e.target.value;
    isQRBoxEmpty();
});

downlodeBtn.addEventListener("click", () => {
    let img = document.querySelector(".qr-body img");

    if (img !== null) {
        let imgAttr = img.getAttribute("src");
        downlodeBtn.setAttribute("href", imgAttr);
    } else {
        downlodeBtn.setAttribute("href", `${document.querySelector("canvas").toDataURL()}`);
    }
});

function isQRBoxEmpty() {
    qrInput.value.length > 0 ? generateQr() : alert("Please enter a URL or text");
}
