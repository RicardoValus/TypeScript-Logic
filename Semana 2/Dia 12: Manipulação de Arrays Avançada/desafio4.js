var arr = ["ana", "bruno", "carla"];
var capitalizados = arr.map(function (s) { return s.charAt(0).toUpperCase() + s.slice(1); });
console.log(capitalizados);
