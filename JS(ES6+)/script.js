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
// Explanation
// In the refactored code, I have streamlined the animation function by creating a base configuration object, animationConfig, which contains common properties such as targets and duration. This reduces redundancy and enhances maintainability.

// Key Changes:
// Spread Operator: The use of the spread operator (...) allows us to easily extend the animationConfig object with specific properties for each event type, making the code cleaner and more concise.

// Event Listener Addition: Instead of adding each event listener individually, I utilized an array of event types and the forEach method to iterate through them. This not only reduces code duplication but also makes it easier to manage the events in one place.

// Console Warning: Changed the console log for unsupported events to console.warn for better clarity and to indicate that it is a warning rather than a regular log.

// These changes enhance the readability and efficiency of the code while maintaining its original functionality. If you have any further questions or need additional modifications, feel free to ask!
