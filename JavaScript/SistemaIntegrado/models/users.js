// Simulação de um banco de dados em memória
let users = [
    { id: 1, name: 'Administrador', username: 'admin', password: 'admin', accessLevel: 'Administrador' },
    { id: 2, name: 'Operador',      username: 'oper' , password: 'oper',  accessLevel: 'Operador' },
    { id: 3, name: 'Engenheiro',    username: 'eng'  , password: 'eng',   accessLevel: 'Engenharia' },
    { id: 4, name: 'Manutentor',    username: 'manut', password: 'manut', accessLevel: 'Manutenção' },
    { id: 5, name: 'Supervisor',    username: 'super', password: 'super', accessLevel: 'Supervisão' },
    { id: 6, name: 'Qualidade',     username: 'quali', password: 'quali', accessLevel: 'Qualidade' }
];
module.exports = {
getUsers: () => users,
findUser: (username, password) => users.find(u => u.username === username && u.password === password),
addUser: (user) => { users.push(user); },
updateUser: (id, updatedUser) => {
    users = users.map(user => user.id == id ? { id: user.id, ...updatedUser } : user);
},
deleteUser: (id) => {
    users = users.filter(user => user.id != id);
}
};