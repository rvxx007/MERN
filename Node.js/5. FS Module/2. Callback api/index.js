const { error } = require('console');
const fs = require('fs');

// creating Directory / Folder
// function main(){
//     fs.mkdir("./files",(error)=>{
//         if(error) throw error;
//         console.log("Directory is Created");
//     });
// }

// Read Directory
// function main(){
//     fs.readdir("./files",(error,data)=>{
//         if(error) throw console.error(error.stack);
//         console.log(data);
//     })
// }

// Remove Directory / Folder
// function main(){
//     fs.mkdir("./files/extra",(error)=>{
//                 if(error) throw error;
//                 console.log("Directory is Created");
//             });
// 
//     fs.rmdir("./files/extra",(error)=>{
//         if(error) throw error;
//         console.log("Directory was removed");
//     })
// }


// Create and Write file
// function main(){
//     fs.writeFile("./Readme.md", "# This is a File handling using callback",(error)=>{
//         if(error) throw error;
//         console.log("File is Created ./Readme.md");
//     });
// }


// Write updated text/content in file 
// function main(){
//     fs.writeFile("./Readme.md","# Hello Node.js this is part of fs module and MERN series.",(error)=>{
//         if(error) throw error;
//         console.log("text/content written/updated in Readme.md File...");   
//     });
//     fs.readFile("./Readme.md","utf-8",(error,data)=>{
//         if(error) throw error;
//         console.log(data);
//     })
// }

// Read file data
// function main(){
//     fs.readFile("./Readme.md","utf-8",(error,data)=>{
//         if(error) throw error;
//         console.log(data);
//     })
// }

// Add extra text or data in file 
// append Data
// async function main() {
    // function main(){
    //     fs.appendFile("./Readme.md","# this is a appended text",(error)=>{
    //         if(error) throw error;
    //         console.log("text/content added in Readme.md File...");   
    //     });
    //     fs.readFile("./Readme.md","utf-8",(error,data)=>{
    //         if(error) throw error;
    //         console.log(data);
    //     })
    // }

// Create a copy of a file
// function main(){
//     fs.copyFile("./Readme.md","./files/info.md",(error)=>{
//         if(error) throw error;
//     console.log("files is copy in ./files/info.md");


//     })    
// }


// get file information complete statastics
// function main() {
//     fs.stat("./files/info.md",(error, info)=>{
//         if(error) throw error;
//         console.log(info);
//     })
// }


// get file info using methods
// function main() {        
//         fs.stat("./Readme.md",(error, info)=>{
//             if(error) throw error;
//             console.log(info.isDirectory());
//             console.log(info.isFile());
//             console.log(info.size);
//         });
// }


main();