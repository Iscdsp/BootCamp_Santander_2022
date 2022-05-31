const usuarios = new Map();

usuarios.set("Luiz", "Admin");
usuarios.set("Jorge", "User");
usuarios.set("Mariana", "Admin");
usuarios.set("Abreu", "Admin");
usuarios.set("Josefa", "User");
usuarios.set("Perdinei", "Admin");

function getAdmins(map) {
  let admins = [];

  for ([key, value] of map) {
    if (value === "Admin") {
      admins.push(key);
    }
  }
  return admins;
}

console.log(getAdmins(usuarios));
