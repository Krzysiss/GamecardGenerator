function Write(object, input, text){
    document.getElementById(input).addEventListener("change", function() {
        document.getElementById(object).innerHTML = text + document.getElementById(input).value; 
    });
}

Write("power", "typePower", "Sila ");
Write("dodge", "typeDodge", "Unik ");
Write("dexterity", "typeSkill", "Zrecznosc ");
Write("bounty", "typeBounty", "");
Write("name", "typeName", "");
Write("description", "typeDescription", "");
Write("category", "typeCategory", "");

document.getElementById('typeImage').addEventListener('change', function() {
    var file = this.files[0];
    var reader = new FileReader();
    
    reader.onload = function(e) {
        var image = document.getElementById('image');
        image.src = e.target.result;
    }
    
    reader.readAsDataURL(file);
    document.getElementById("typePower").focus();
});