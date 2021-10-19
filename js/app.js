let isAnimal = prompt("Animale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda ");

if (isAnimal == 1) {
    console.log("Chose the Dog");
} else if (isAnimal == 2) {
    console.log("Chose the Cat");
} else if (isAnimal == 3) {
    console.log("Chose the Goldfish");
} else if (isAnimal == 4) {
    console.log("Chose the Monkey");
} else if (isAnimal == 5) {
    console.log("Chose the Panda");
} else if (isAnimal > 5) {
    console.log("Animal not found");
}