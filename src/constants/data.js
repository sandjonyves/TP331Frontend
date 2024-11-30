
const schools = [
    {
        id: 1,
        name: "École Primaire A",
        address: "123 Rue de la Liberté, Paris",
        type: "Primaire"
    },
    {
        id: 2,
        name: "École Secondaire B",
        address: "456 Avenue des Champs, Lyon",
        type: "Secondaire"
    },
    {
        id: 3,
        name: "Lycée C",
        address: "789 Boulevard des Fêtes, Marseille",
        type: "Lycée"
    },
    {
        id: 4,
        name: "Collège D",
        address: "101 Rue de l'École, Toulouse",
        type: "Collège"
    },
    {
        id: 5,
        name: "École Internationale E",
        address: "202 Place de la Paix, Nice",
        type: "Internationale"
    }
];

const classesData = [
    { nom: "Tle C", enseignant: "Mme Dupont", nombreEleves: 30, salle: "101" },
    { nom: "6eme", enseignant: "M. Martin", nombreEleves: 25, salle: "102" },
    { nom: "3eme", enseignant: "Mme Lefèvre", nombreEleves: 28, salle: "103" },
    { nom: "4eme", enseignant: "M. Bernard", nombreEleves: 20, salle: "104" },
    { nom: "5eme", enseignant: "Mme Moreau", nombreEleves: 26, salle: "105" }
];


const studentsData = [
    { nom: "Dupont", prenom: "Alice", classe: "Terminale S", age: 17, email: "alice.dupont@example.com" },
    { nom: "Martin", prenom: "Bob", classe: "Première L", age: 16, email: "bob.martin@example.com" },
    { nom: "Lefèvre", prenom: "Charlie", classe: "Seconde", age: 15, email: "charlie.lefevre@example.com" },
    { nom: "Bernard", prenom: "David", classe: "Terminale ES", age: 18, email: "david.bernard@example.com" },
    { nom: "Moreau", prenom: "Emma", classe: "Première S", age: 16, email: "emma.moreau@example.com" }
];

  export default {schools,classesData,studentsData}