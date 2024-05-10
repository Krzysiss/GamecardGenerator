document.getElementById("typePower").addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
    document.getElementById("typeDodge").focus();
    }
});

document.getElementById("typeDodge").addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
    document.getElementById("typeSkill").focus();
    }
});

document.getElementById("typeSkill").addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
    document.getElementById("typeBounty").focus();
    }
});

document.getElementById("typeBounty").addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        generateCard();
        save();
    }
});

document.getElementById("save").addEventListener("click", (event) => {
    generateCard();
    save();
});

document.getElementById("generate").addEventListener("click", (event) => {
    generateCard();
});

function generateCard(){
    reset();
    var typePower = document.getElementById("typePower").value;
    var typeDodge = document.getElementById("typeDodge").value;
    var typeSkill = document.getElementById("typeSkill").value;
    var typeBounty = document.getElementById("typeBounty").value;
    var typeName = document.getElementById("typeName").value;
    var typeDescription = document.getElementById("typeDescription").value;
    var typeCategory = document.getElementById("typeCategory").value;
    
    var capture = document.getElementById("capture");

    var box = document.getElementById("box");
    capture.appendChild(box);

    var power = document.createElement("div");
    power.id = "power";
    power.classList.add("stat");
    power.innerHTML = typePower;

    var dodge = document.createElement("div");
    dodge.id = "dodge";
    dodge.classList.add("stat");
    dodge.innerHTML = typeDodge;

    var skill = document.createElement("div");
    skill.id = "skill";
    skill.classList.add("stat");
    skill.innerHTML = typeSkill;

    var bounty = document.createElement("div");
    bounty.id = "bounty";
    bounty.classList.add("stat");
    bounty.innerHTML = typeBounty;

    var name = document.createElement("div");
    name.id = "name";
    name.classList.add("name");
    name.innerHTML = typeName;

    var description = document.createElement("div");
    description.id = "description";
    description.innerHTML = typeDescription;

    var category = document.createElement("div");
    category.id = "category";
    category.classList.add("name");
    category.innerHTML = typeCategory;

    box.appendChild(power);
    box.appendChild(dodge);
    box.appendChild(skill);
    box.appendChild(bounty);
    box.appendChild(image);
    box.appendChild(name);
    box.appendChild(description);
    box.appendChild(category);
}

function reset(){
    var box = document.getElementById("box");
    box.innerHTML = "";
}

function save(){
    html2canvas(document.getElementById('capture')).then(function(canvas) {
        var imgData = canvas.toDataURL('image/png');
        var link = document.createElement('a');
        link.download = 'capture.png';
        link.href = imgData;
        link.click();
        
    });
    reset();
}