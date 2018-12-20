const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
user :  'root', // le nom d'utilisateur
password :  'diabolos1994', // le mot de passe
database :  'washmail', // le nom de la base de données
});
module.exports = connection;