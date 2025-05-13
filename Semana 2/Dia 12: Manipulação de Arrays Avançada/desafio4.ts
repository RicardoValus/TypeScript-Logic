const arr: Array<string> = ["ana", "bruno", "carla"];

const capitalizados = arr.map(s => s.charAt(0).toUpperCase() + s.slice(1));

console.log(capitalizados);