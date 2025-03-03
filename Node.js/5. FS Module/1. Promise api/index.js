const fs = require('fs/promises');

// creating Directory / Folder
// async function main(){
//     try{
//         await fs.mkdir("./files");
//         console.log("Folder created...");
//     }catch(e){
//         console.error(e.stack);
//     }
// }

// Read Directory
// async function main(){
//     try{
//         const files = await fs.readdir("./files");
//         for (const file of files) {
//             console.log(file); //o/p- index.text(all file names which present in directory).  
//         }
//     }catch(e){
//         console.error(e.stack);
//     }
// }

// Remove Directory / Folder
// async function main(){
//     try{
//         // await fs.mkdir("./files/extra");
//         // console.log("Directory Created...");
        
//         await fs.rmdir("./files/extra");
//         console.log("Directory was Removed...");
//     }catch(e){
//         console.error(e.stack);
//     }
// }


// Create and Write file
// async function main(){
//         try{
//             await fs.writeFile("./Readme.md", "# Hello Node.js");
//             console.log("File is Created...");
//         }catch(e){
//             console.error(e.stack);
//         }
//     }


// Write updated text/content in file 
// async function main(){
//         try{
//             await fs.writeFile("./Readme.md", "# Hello Node.js this is part of fs module and MERN series.");
//             console.log("text/content written/updated in Readme.md File...");
//         }catch(e){
//             console.error(e.stack);
//         }
//     }


// Read file data
// async function main(){
//     try{
//         // without utf-8 flag its return a Buffer data in buffer tag.
//         // const data =await fs.readFile("./Readme.md");
//         //
//         // with utf-8 flag its return a normal text data.
//         const data =await fs.readFile("./Readme.md","utf-8");
//         console.log(data);
//     }catch(e){
//         console.error(e.stack);
//     }
// }


// Add extra text or data in file 
// append Data
// async function main() {
//     try {
        
//         await fs.appendFile("./Readme.md", "This text is a Added text append to file");
//         const data = await fs.readFile("./Readme.md","utf-8");
//         console.log(data);
        
//     } catch (error) {
//         console.error(error.stack);
//     }
// }


// Create a copy of a file
// async function main(){
//  try {
    
//     await fs.copyFile("./Readme.md","./files/info.md");
//     console.log("files is copy in ./files/info.md");

//  } catch (error) {
//     console.error(error.stack);
//  }   
// }


// get file information complete statastics
// async function main() {
//     try {
        
//         const info= await fs.stat("./Readme.md");
//         console.log(info);
        
//     } catch (error) {
//         console.error(error.stack);
//     }
// }


// get file info using methods
async function main() {
    try {
        
        const info= await fs.stat("./Readme.md");
        console.log(info.isDirectory());
        console.log(info.isFile());
        console.log(info.size);
        
    } catch (error) {
        console.error(error.stack);
    }
}


main();