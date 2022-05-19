function getAdmins(map) {
    let admins = [];
    for (const [key, value] of map) {
        if(value == 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set("Lucas", "Admin");
usuarios.set("Steph", "Admin");
usuarios.set("Jorge", "User");
usuarios.set("Natália", "Admin");

console.log(getAdmins(usuarios));