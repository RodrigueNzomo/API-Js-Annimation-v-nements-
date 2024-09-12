// // Sélectionner la boîte d'animation
// const animationBox = document.getElementById("animationBox");

// // Fonction d'animation avec Anime.js pour divers événements
// function animateBox(event) {
//   switch (event.type) {
//     case "click":
//       anime({
//         targets: "#animationBox",
//         translateX: 500, // Déplacer de 500px vers la droite
//         duration: 2000,
//       });
//       break;
//     case "dblclick":
//       anime({
//         targets: "#animationBox",
//         rotate: "1turn", // Rotation complète
//         duration: 2000,
//       });
//       break;
//     case "mouseover":
//       anime({
//         targets: "#animationBox",
//         scale: 1.5, // Agrandir la boîte
//         duration: 2000,
//       });
//       break;
//     case "mouseout":
//       anime({
//         targets: "#animationBox",
//         scale: 1, // Réinitialiser la taille
//         duration: 2000,
//       });
//       break;
//     case "contextmenu": // clic droit
//       anime({
//         targets: "#animationBox",
//         backgroundColor: "#e74c3c", // Changer la couleur
//         duration: 2000,
//       });
//       event.preventDefault(); // Empêche l'ouverture du menu contextuel
//       break;
//     default:
//       console.log("Événement non pris en charge");
//   }
// }

// // Ajouter les événements
// animationBox.addEventListener("click", animateBox);
// animationBox.addEventListener("dblclick", animateBox);
// animationBox.addEventListener("mouseover", animateBox);
// animationBox.addEventListener("mouseout", animateBox);
// animationBox.addEventListener("contextmenu", animateBox);
// Select the animation box
const animationBox = document.getElementById("animationBox");

// Animation function using Anime.js for various events
function animateBox(event) {
  const animationConfig = {
    targets: "#animationBox",
    duration: 2000,
  };

  switch (event.type) {
    case "click":
      anime({ ...animationConfig, translateX: 500 }); // Move 500px to the right
      break;
    case "dblclick":
      anime({ ...animationConfig, rotate: "1turn" }); // Full rotation
      break;
    case "mouseover":
      anime({ ...animationConfig, scale: 1.5 }); // Enlarge the box
      break;
    case "mouseout":
      anime({ ...animationConfig, scale: 1 }); // Reset size
      break;
    case "contextmenu": // Right-click
      anime({ ...animationConfig, backgroundColor: "#e74c3c" }); // Change color
      event.preventDefault(); // Prevent the context menu from opening
      break;
    default:
      console.warn("Unsupported event type");
  }
}

// Add event listeners
["click", "dblclick", "mouseover", "mouseout", "contextmenu"].forEach(
  (eventType) => {
    animationBox.addEventListener(eventType, animateBox);
  }
);
