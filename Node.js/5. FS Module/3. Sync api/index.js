const fs= require("fs");

function main(){
    fs.mkdirSync("./files");
    console.log("directory is created..."); 
}

main();