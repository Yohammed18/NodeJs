/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer'
import qr from 'qr-image'
import fs from 'fs'

//inquirer code
inquirer
  .prompt([{
    message: "Type in your URL:",
    name: "URL",
    },
])
.then((answers) => {
    //this will store the url insterted by the user
    const url = answers.URL;
    //this will conver the url into a qr code
    var qr_svg = qr.image(url);
    //this code will store the qr code in a png file
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    //save user input in a text file
    fs.writeFile("user_input.txt", url,(err)=>{
        if(err) throw err;
        console.log("The file has been saved!")
    })
})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
