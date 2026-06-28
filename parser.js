/**
 * parser.js -- minecraft addon parser
 * ————————————————————————————————————————
 * unzips an mcaddon file and extracting assets, recipies
 * and names from the behavior pack and resourse pack
 * 
 * Depens on: JSZip
 */


// #region get file
//passes the click from button to file input
document.getElementById("my-button").addEventListener("click",()=>{
    document.getElementById("mcaddon-input").click();
});

//gets the raw data from the mcaddon
const input = document.getElementById("mcaddon-input")


//listins for when user is done picking file
input.addEventListener("change",(event)=>{
    //sets file to the selected file
    const file = event.target.files[0];
    console.log(file)
});
// #endregion
// #region unzip file
const zip = new JSZip();
// #endregion