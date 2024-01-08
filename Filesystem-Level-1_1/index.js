const fs = require("fs");

fs.readFile("./blog1.txt", "utf8", function (error, buffer) {
    if (error) { 
        return console.log("Fehler beim Einlesend er Datei", error);
    }
    const TxtString = buffer.replace("Hello World", "Ich bin ein Webdeveloper");

    fs.writeFile("./blog1.txt", TxtString, "utf8", (error) => {
        if (error) {
            return console.log("Fehler beim Schreiben", error);
        };
        console.log(`String replaced`)
    })
})

fs.writeFile("./blog2.txt", "einen beliebigen Text", "utf8", (error) => {
    if (error) {
        return console.log("konnte Datei nicht erstellen", error);
    };
    console.log("blog2.txt erstellt");
})

fs.stat("./assets", (err, stats) => {
    if (err) {
        console.log("the folder does not exist");
        fs.mkdir("./assets", (err) => {
            if (err) {
                console.log("konnte ordner nicht erstellen");
            } else {
                console.log("ordner erstellt")
            }
        })
    } else if (stats.isDirectory()) {
        console.log("der Ordner existiert")
        fs.rmdir("./assets", { recursive:true}, (err) => {
            if (err) {
                console.log("Ordner löschen fehlgeschlagen");
            } else {
                console.log("ordner gelöscht");
            }
        });
    } else {
        console.log("der Pfad exisitiert aber ist kein Ordner");
    }
});


fs.access("delete.txt", (err, stats) => {
    if (err) {
        console.log("the file does not exist");
        fs.writeFile("delete.txt", "", (err) => {
            if (err) {
                console.log("konnte datei nicht erstellen");
            } else {
                console.log("datei erstellt")
            }
        })
    } else if (stats.isDirectory()) {
        console.log("die datei existiert")
        fs.unlink("delete.txt", (err) => {
            if (err) {
                console.log("datei löschen fehlgeschlagen");
            } else {
                console.log("datei gelöscht");
            }
        });
    } else {
        console.log("der Pfad exisitiert aber ist keine datei");
    }
});