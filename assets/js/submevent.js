let inpFile = document.querySelector("#inpFile");
let imageCircle= document.querySelector("#image-circle");

let fnameChange = document.getElementById("fname");
let rclubChange = document.getElementById("rclub");
let rofficeChange = document.getElementById("roffice");

inpFile.addEventListener("change", function(){
    let file = this.files[0];
    if(file){
        let reader = new FileReader();
        reader.addEventListener("load", function(){
            imageCircle.setAttribute("src", this.result);
        });
        reader.readAsDataURL(file);
    }else{
        imageCircle.setAttribute("src", "assets/img/394_zandaya.jpg");

        
    }
});
fnameChange.addEventListener("input", function(){
    let fnamePut = document.getElementById("fname").value;
    let yname = document.getElementById("yname");
    if(myTrim(fnamePut).length > 0){
        yname.innerHTML = fnamePut;
    }else{
        yname.innerHTML = "Zendaya Maree Stoermer Coleman";
    }
});
rclubChange.addEventListener("input", function(){
    let rclubPut = document.getElementById("rclub").value;
    let yclub = document.getElementById("yclub");
    if(myTrim(rclubPut).length > 0){
        yclub.innerHTML = rclubPut;
    }else{
        yclub.innerHTML = "Rac Asaba Urban";
    }
});
rofficeChange.addEventListener("input", function(){
    let rofficePut = document.getElementById("roffice").value;
    let yoffice = document.getElementById("yoffice");
    if(myTrim(rofficePut).length > 0){
        yoffice.innerHTML = rofficePut;
    }else{
        yoffice.innerHTML = "Public image chair";
    }
    
});
document.getElementById("stickerdone").addEventListener("click", function(){
    let inpFile = document.getElementById("inpFile").value;
    let fname = document.getElementById("fname").value;
    let rclub = document.getElementById("rclub").value;
    let roffice = document.getElementById("roffice").value;

    if(myTrim(inpFile).length > 4 && myTrim(fname).length > 3 && myTrim(rclub).length > 3 && myTrim(roffice).length > 2){
        document.getElementById("stickerdone").style.display = "none";
        document.getElementById("stickeragain").style.display = "none";
        document.getElementById("stickeredit").style.display = "inline";
        document.getElementById("stickerdownload").style.display = "inline";
        document.getElementById("rslimer").style.display = "none";
    }else{
        alert("Enter Your Photo, Name, Club and Office")
    }
});
document.getElementById("stickeredit").addEventListener("click", function(){
    document.getElementById("rslimer").style.display = "block";
    document.getElementById("stickeredit").style.display = "none";
    document.getElementById("stickerdownload").style.display = "none";
    document.getElementById("stickeragain").style.display = "none";
    document.getElementById("stickerdone").style.display = "inline";

});
document.getElementById("stickerdownload").addEventListener("click", function(){

    window.scrollTo(0, 0);
    html2canvas(document.getElementById("mirrowmirrow")).then(function (canvas){
        let a = document.createElement('a');
        a.href = canvas.toDataURL("image/jpeg");
        a.download = 'Rott2022.jpg';
        a.click();
    });
    document.getElementById("stickeredit").style.display = "none";
    document.getElementById("stickerdownload").style.display = "none";
    document.getElementById("stickeragain").style.display = "inline";
    document.getElementById("stickerdone").style.display = "none";

    document.getElementById("inpFile").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("rclub").value = "";
    document.getElementById("roffice").value = "";
});
document.getElementById("stickeragain").addEventListener("click", function(){
    document.getElementById("stickeredit").style.display = "none";
    document.getElementById("stickerdownload").style.display = "none";
    document.getElementById("stickeragain").style.display = "none";
    document.getElementById("stickerdone").style.display = "inline";
    document.getElementById("rslimer").style.display = "block";
    document.getElementById("yname").innerHTML = "Zendaya Maree Stoermer Coleman";
    document.getElementById("yclub").innerHTML = "Rac Asaba Urban";
    document.getElementById("yoffice").innerHTML = "Public image chair";
    imageCircle.setAttribute("src", "assets/img/394_zandaya.jpg");
});

function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
  }

/* MAIN CODE
let inpFile = document.querySelector("#inpFile");
let previewContainer = document.querySelector("#imagePreview");
let previewImage = document.querySelector(".image-preview__image");
let previewDefaultText= document.querySelector(".image-preview__default-text");
let imageCircle= document.querySelector("#image-circle");



inpFile.addEventListener("change", function(){
    let file = this.files[0];
    if(file){
        let reader = new FileReader();
        // previewDefaultText.style.display = "none";
        // previewImage.style.display = "block";
        
        reader.addEventListener("load", function(){
            //console.log(this)
           // previewImage.setAttribute("src", this.result);
            imageCircle.setAttribute("src", this.result);
        });
        reader.readAsDataURL(file);
    }else{
        // previewDefaultText.style.display = null;
        // previewImage.style.display = null;
        previewImage.setAttribute("src", "");
        imageCircle.setAttribute("src", "assets/img/testimonials/testimonials-1.jpg");

        
    }
});

*/