function Write(object, input, text){
    document.getElementById(input).addEventListener("change", function() {
        document.getElementById(object).innerHTML = text + document.getElementById(input).value; 
    });
}

function Jump(previous, next){
    document.getElementById(previous).addEventListener("keydown", (event) => {
        if(event.key === "Enter"){
            document.getElementById(next).focus();
        }
    });
}

function Save(cardID){
    html2canvas(document.getElementById(cardID), {scale: 2}).then(function(canvas) {
        var imgData = canvas.toDataURL('image/png');
        var link = document.createElement('a');
        link.download = 'capture.png';
        link.href = imgData;
        link.click();
    });
}

function ClearValue(id){
    document.getElementById(id).value = "";
}

function SaveButton(id, cardID){
    document.getElementById(id).addEventListener("click", function(){
        Save(cardID);
        ClearValue("typePower");
        ClearValue("typeDodge");
        ClearValue("typeSkill");
        ClearValue("typeBounty");
    });
}

function TypeImage(buttonID, imageID){
    document.getElementById(buttonID).addEventListener('change', function() {
        var file = this.files[0];
        var reader = new FileReader();
        
        reader.onload = function(e) {
            var image = document.getElementById(imageID);
            image.src = e.target.result;
        }
        
        reader.readAsDataURL(file);
    });
}

document.getElementById("typeBounty").addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        Save("card");
        ClearValue("typePower");
        ClearValue("typeDodge");
        ClearValue("typeSkill");
        ClearValue("typeBounty");
    }
});

SaveButton("save", "card");
SaveButton("save1", "card1");
SaveButton("save2", "card2");

TypeImage("typeImage", "image");
TypeImage("typeImage1", "image1");

Jump("typePower", "typeDodge");
Jump("typeDodge", "typeSkill");
Jump("typeSkill", "typeBounty");

Jump("typeName", "typeDescription");
Jump("typeDescription", "typeCategory");

Jump("typeName1", "typeDescription1");
Jump("typeDescription1", "typeCategory1");

Jump("typeName2", "typeDescription2");
Jump("typeDescription2", "typeCategory2");

Write("power", "typePower", "Siła ");
Write("dodge", "typeDodge", "Unik ");
Write("dexterity", "typeSkill", "Zręczność ");
Write("bounty", "typeBounty", "");
Write("name", "typeName", "");
Write("description", "typeDescription", "");
Write("category", "typeCategory", "");

Write("name1", "typeName1", "");
Write("description1", "typeDescription1", "");
Write("category1", "typeCategory1", "");

Write("name2", "typeName2", "");
Write("description2", "typeDescription2", "");
Write("category2", "typeCategory2", "");

GenerateWordButton("generateName", "options", "name");
GenerateWordButton("generateName1", "options1", "name1");
GenerateWordButton("generateName2", "options2", "name2");



function GenerateWordButton(id, optionID, nameID){
    document.getElementById(id).addEventListener("click", function(){
        generateWord(optionID, nameID)
    });
}

function generateRandomWord(length) {
    var word = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < length; i++) {
        word += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return word;
}

function generateRealisticWord(length) {
    var word = '';
    var letterProbabilities = {'a': 8, 'b': 2, 'c': 3, 'd': 4, 'e': 12, 'f': 2, 'g': 2, 'h': 6, 'i': 7, 'j': 1, 'k': 1, 'l': 4,
                               'm': 2, 'n': 7, 'o': 8, 'p': 2, 'q': 1, 'r': 6, 's': 6, 't': 9, 'u': 3, 'v': 1, 'w': 2, 'x': 1,
                               'y': 2, 'z': 1};
    var letters = Object.keys(letterProbabilities);
    var weights = Object.values(letterProbabilities);
    for (var i = 0; i < length; i++) {
        word += letters[Math.floor(Math.random() * letters.length)];
    }
    return word;
}

function generateWord(id, nameID) {
    var option = document.getElementById(id).value;
    var wordLength = parseInt(prompt("Podaj długość słowa:"));

    if (isNaN(wordLength) || wordLength <= 0) {
        alert("Podana długość jest nieprawidłowa.");
        return;
    }

    var word;
    if (option === "random") {
        word = generateRandomWord(wordLength);
    } else if (option === "realistic") {
        word = generateRealisticWord(wordLength);
    }

    document.getElementById(nameID).innerText = word;
}
