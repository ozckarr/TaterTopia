window.addEventListener('load', init);

function init(){
    const aBox = document.querySelector("a-box");
     generateField();
}

function generateField(){

    for (let i = -30; i <= 30; i++){
        let cylinder = document.createElement('a-cylinder');
        cylinder.setAttribute("position", `${i} 0 -3`);
        cylinder.setAttribute("rotation", "-90 0 0");
        cylinder.setAttribute("radius", "0.5");
        cylinder.setAttribute("height", "60");
        cylinder.setAttribute("color", "#8B4513");
        cylinder.setAttribute("shadow");
        document.querySelector('a-scene').appendChild(cylinder);
    }

    const plantArray = ["-60 -3 -20", "-20 -10 -70", "30 -40 -80","60 -10 -40",
        "40 -20 30", "20 -2 70", "-10 -20 60", "-30 -3 30"]
    
    for (let i = 0; i < plantArray.length; i++) {
        let plant = document.createElement('a-entity');
        plant.setAttribute("gltf-model", "#plant");
        plant.setAttribute("position", plantArray[i]);
        plant.setAttribute("shadow")
        document.querySelector('a-scene').appendChild(plant);
    }
}

