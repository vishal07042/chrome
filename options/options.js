let arrofWebsite = [
	
	"codeforces",
	"chatgpt",
	"gfg",
	"codeStudio",
	"codeHelp",
	"learnyard",
	"bard",
    'apna college',
    'codingShuttle',
    'educosys'
];




const form = document.querySelector("#form");

arrofWebsite.map((website) => {
    const input = document.createElement("input");
    const span = document.createElement("span");
    const br = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.style.display = "inline";
    input.type = "radio";
    input.value = website;
    span.innerHTML = website;

    form.appendChild(input)
    form.appendChild(h3);
    h3.appendChild(span);
    form.appendChild(br);
    
    
    
})

const createbtn = document.createElement("button");
createbtn.innerHTML = "submit";
createbtn.type = "submit";
form.appendChild(createbtn);





createbtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");
    console.log(e.target.value);
})

