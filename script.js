// function direBonjour() {
//     alert("Ce site est encore en phase de test !")
//   }

// direBonjour();

function BoutonGear() {
    let BoutonGear2 = document.getElementById("BoutonGearSecond");
    BoutonGear2.onclick = function() {
        window.location.href = 'GearSecond.html';
    };

    let BoutonGear3 = document.getElementById("BoutonGearThird");
    BoutonGear3.onclick = function() {
        window.location.href = 'index.html';
    };

    let BoutonGear4 = document.getElementById("BoutonGearFourth");
    BoutonGear4.onclick = function() {
        window.location.href = 'index.html';
    };

    let BoutonGearFifth = document.getElementById("BoutonGearFifth");
    BoutonGearFifth.onclick = function() {
        window.location.href = 'GearFifth.html';
    };  
};

// Appeler la fonction après le chargement de la page
window.onload = BoutonGear;

