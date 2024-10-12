const dictionary = [
    "manzana", "saltarín", "murciélago", "tostadora", "elefante", "gigante",
    "bicicleta", "castillo", "caramelo", "televisor", "bufanda", "avión",
    "nube", "escalera", "leopardo", "molinillo", "pluma", "mariposa",
    "cangrejo", "zapato", "rayo", "cuaderno", "jirafa", "pistola",
    "planeta", "pingüino", "lámpara", "cohete", "pastel", "almohada",
    "luciérnaga", "camaleón", "galaxia", "tormenta", "lagartija", "bombilla",
    "jirafa", "espejo", "roca", "camisa", "ventana", "sombrero", "abeja",
    "tren", "grillo", "botella", "computadora", "satélite", "microondas",
    "huracán", "ratón", "tiburón", "buzón", "candado", "jirafa", "océano",
    "carrera", "silla", "león", "tigre", "limón", "mesa", "volcán", "copa",
    "telescopio", "dragón", "cometa", "pirámide", "estrella", "galleta",
    "globo", "sol", "buitre", "aurora", "pájaro", "laguna", "gaviota",
    "armadura", "dinosaurio", "pantera", "tigre", "río", "flauta", "cueva",
    "pantalla", "relámpago", "planeta", "borrador", "serpiente", "volcán",
    "glaciar", "catarata", "puente", "universo", "naranja", "sombrero",
    "elefante", "medusa", "cocodrilo",
    "Daniel", "Alejandro", "María", "Sofía", "Miguel", "Lucía", "Carlos", "Juan", "Ana", "Laura",
    "Jorge", "Elena", "Luis", "Isabel", "Pablo", "Carmen", "David", "Sara", "Manuel", "Paula",
    "Alberto", "Teresa", "Francisco", "Marta", "Raúl", "Patricia", "Fernando", "Natalia", "Sergio", "Andrea",
    "Ricardo", "Beatriz", "Eduardo", "Lorena", "Roberto", "Cristina", "Hugo", "Julia", "Adrián", "Claudia",
    "Ángel", "Eva", "Diego", "Victoria", "Enrique", "Raquel", "Ramón", "Irene", "Javier", "Rosa",
    "Vicente", "Mónica", "Gabriel", "Gloria", "Emilio", "Nuria", "Alfredo", "Pilar", "Oscar", "Alicia",
    "Julio", "Verónica", "Rubén", "Silvia", "Mario", "Lidia", "Martín", "Esther", "Antonio", "Rocío",
    "Marcos", "Begoña", "Iván", "Olga", "Pedro", "Lourdes", "Mateo", "Noelia", "Sebastián", "Inés",
    "Joaquín", "Aitana", "Gonzalo", "Elisa", "Tomás", "Raquel", "Ignacio", "Miriam", "Agustín", "Ángela",
    "Felipe", "Ariana", "Salvador", "Valentina", "Ramiro", "Florencia", "Eugenio", "Gabriela", "Bernardo", "Jimena",
    "Félix", "Luz", "Nicolás", "Belén", "Alonso", "Adriana", "Guillermo", "Milagros", "Cristian", "Rebeca",
    "Samuel", "Daniela", "Federico", "Marina", "Arturo", "Elsa", "Álvaro", "Leonor", "Lucas", "Amparo",
    "Santiago", "Estela", "Andrés", "Marisol", "Gerardo", "Carla", "Damián", "Susana", "Ezequiel", "Vanessa",
    "Rafael", "Eva", "Rodrigo", "Gloria", "Julián", "Cecilia", "Marcelo", "Lorena", "Víctor", "Clara",
    "Alba", "Zaira", "Fabián", "Montserrat", "Leandro", "María José", "Omar", "Leticia", "Cristóbal", "Maribel",
    "Mauricio", "Consuelo", "Álvaro", "Aurelia", "Teodoro", "Paloma", "Román", "Dolores", "Benjamín", "Josefa",
    "Ernesto", "Carolina", "Mariano", "Vanessa", "Santiago", "Esperanza", "Esteban", "Manuela", "Ricardo", "Claudia",
    "Bruno", "Victoria", "Valentín", "Rosa María", "Guido", "Blanca", "Facundo", "Estefanía", "Tomás", "Daniela",
    "Dario", "Alejandra", "Gaspar", "Aurora", "Lucas", "Angélica", "Tadeo", "Nieves", "Efraín", "Diana",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", 
    "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", 
    "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", 
    "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", 
    "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", 
    "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", 
    "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", 
    "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", 
    "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", 
    "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", 
    "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", 
    "120", "121", "122", "123", "124", "125", "126", "127", "128", "129", 
    "130", "131", "132", "133", "134", "135", "136", "137", "138", "139", 
    "140", "141", "142", "143", "144", "145", "146", "147", "148", "149", 
    "150", "151", "152", "153", "154", "155", "156", "157", "158", "159", 
    "160", "161", "162", "163", "164", "165", "166", "167", "168", "169", 
    "170", "171", "172", "173", "174", "175", "176", "177", "178", "179", 
    "180", "181", "182", "183", "184", "185", "186", "187", "188", "189", 
    "190", "191", "192", "193", "194", "195", "196", "197", "198", "199", 
    "200", "201", "202", "203", "204", "205", "206", "207", "208", "209", 
    "210", "211", "212", "213", "214", "215", "216", "217", "218", "219", 
    "220", "221", "222", "223", "224", "225", "226", "227", "228", "229", 
    "230", "231", "232", "233", "234", "235", "236", "237", "238", "239", 
    "240", "241", "242", "243", "244", "245", "246", "247", "248", "249", 
    "250", "251", "252", "253", "254", "255", "256", "257", "258", "259", 
    "260", "261", "262", "263", "264", "265", "266", "267", "268", "269", 
    "270", "271", "272", "273", "274", "275", "276", "277", "278", "279", 
    "280", "281", "282", "283", "284", "285", "286", "287", "288", "289", 
    "290",  "!", "@", "#", "$", "%", "&", "*","_", "+", "-", "=", "|", ":",
     ";", "<", ">", ".", "/"
    ];

function shuffleWord(word) {
    let letters = word.split('');
    for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];  
    }
    return letters.join('');
}

function generatePassword() {
    const numWords = document.getElementById('num-words').value;
    const capitalize = document.getElementById('capitalize').checked;
    const noRepeat = document.getElementById('no-repeat').checked;
    
    let availableWords = [...dictionary];
    let passwordWords = [];
    
    for (let i = 0; i < numWords; i++) {
        if (noRepeat && availableWords.length === 0) break;

        let randomIndex = Math.floor(Math.random() * availableWords.length);
        let word = availableWords[randomIndex];
        word = shuffleWord(word);

        if (capitalize) {
            word = word.charAt(0).toUpperCase() + word.slice(1);
        }

        passwordWords.push(word);
        
        if (noRepeat) {
            availableWords.splice(randomIndex, 1);
        }
    }

    
    document.getElementById('generated-password').textContent = passwordWords.join('');
}

document.getElementById('generate-btn').addEventListener('click', generatePassword);
