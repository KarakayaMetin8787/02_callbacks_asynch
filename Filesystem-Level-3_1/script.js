import fs from "fs";

export const addLine = (TxtString) => {
    const folderPath = "./assets";
    const filePath = `${folderPath}/delete.txt`;

    fs.stat(folderPath, (err, stats) => {
        if (err) {
            console.log("The folder does not exist. Creating...");
            fs.mkdir(folderPath, (err) => {
                if (err) {
                    console.log("Could not create the folder.", err);
                    return;
                }
                console.log("Folder created.");
                createOrAppendFile(filePath, TxtString);
            });
        } else if (stats.isDirectory()) {
            console.log("The folder exists.");
            createOrAppendFile(filePath, TxtString);
        } else {
            console.log("The path exists but is not a folder.");
        }
    });
};

function createOrAppendFile(filePath, TxtString) {
    fs.stat(filePath, (err) => {
        if (err) {
            console.log("The file does not exist. Creating...");
            fs.writeFile(filePath, "", (err) => {
                if (err) {
                    console.log("Could not create the file.", err);
                    return;
                }
                console.log("File created.");
                appendToFile(filePath, TxtString);
            });
        } else {
            console.log("The file exists.");
            appendToFile(filePath, TxtString);
        }
    });
}

function appendToFile(filePath, TxtString) {
    fs.appendFile(filePath, `\n${TxtString}`, "utf8", (error) => {
        if (error) {
            console.log("Error appending to the file.", error);
            return;
        }
        console.log(`String added to the file.`);
    });
}