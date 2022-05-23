var miebcardb = getCookie("miebcardb");
var miebcardt = getCookie("miebcardt");
var allbg = "";
var urcwp = "";
var ursbg = "";

reaidavatar();
function reaidavatar(){
	var w = window.innerWidth;
	var imgAvatar = document.querySelector(".img-avatar");
	if(w < 900){
		imgAvatar.style.marginLeft  = "65px";
	}else if(w < 1300){
		imgAvatar.style.marginLeft  = "75px";
	}
}
ontokies()
function ontokies() {
    if(miebcardb != null){
        urcwp = JSON.parse(miebcardb);
        ursbg = JSON.parse(miebcardt);
        customdesignapply(1, "utm");
        customformapply(1);
    }
}
templatescolors()
function templatescolors() {
    allbg = [
        {"id":"1", "mainbgcc": "#ffebf3", "bnctcc": "#972121", "nwcncc": "#762105"},
        {"id":"2", "mainbgcc": "#f1d6ff", "bnctcc": "#584cae", "nwcncc": "#454545"},
        {"id":"3", "mainbgcc": "#feffe0", "bnctcc": "#849726", "nwcncc": "#4b0101"},
        {"id":"4", "mainbgcc": "#fffca8", "bnctcc": "#487a2e", "nwcncc": "#444444"}
      ]; 
    let divstand = `float:left; margin-right:10px;`;
    let HSD = '';
    let allbgLength = allbg.length;
    let chdivstylerm = allbgLength-1;
    for (let i = 0; i < allbgLength; i++) {
        if(i == chdivstylerm){
            divstand = "";
        }
        HSD += `<div id="vw${allbg[i].id}" style="cursor:pointer; ${divstand}" >
        <table cellpadding="10" cellspacing="10" border="1">
        <tr>
        <td style="background-color:${allbg[i].mainbgcc};"> </td>	<td style="background-color:${allbg[i].bnctcc};"> </td>	<td style="background-color:${allbg[i].nwcncc};"> </td>
        </tr>
        </table>
        </div>`;    
    }
    document.getElementById("mrntemp").innerHTML = HSD;
    for (let u = 0; u < allbgLength; u++) {
        document.getElementById(`vw${allbg[u].id}`).addEventListener("click", function(){
            customdesignapply(allbg[u].id, "tm")
        });   
    }
}
function customdesignapply(params, who) {
    if(who == "tm"){
        var zosk = allbg.filter(demx => demx.id == params); 
        var mainbgcc = zosk.map(bect => bect.mainbgcc); 
        var bnctcc = zosk.map(bect => bect.bnctcc); 
        var nwcncc = zosk.map(bect => bect.nwcncc); 
        onvios()
    }else if(who == "utm"){
        var zosk = ursbg.filter(demx => demx.ccid == params); 
        var mainbgcc = zosk.map(bect => bect.mainbgcc); 
        var bnctcc = zosk.map(bect => bect.bnctcc); 
        var nwcncc = zosk.map(bect => bect.nwcncc); 
        onvios()
    }
    
    function onvios() {
        document.getElementById("backprobrdIN").value = mainbgcc;
        document.getElementById("biznamecolorIN").value = bnctcc;
        document.getElementById("nwrupclnaIN").value = nwcncc;

        document.getElementById("BizCard").style.backgroundColor = mainbgcc;
        document.getElementById("myprofile").style.borderColor = mainbgcc;

        document.getElementById("biztitle").style.color = bnctcc;
        document.getElementById("phoneContact").style.color = bnctcc;
        document.getElementById("whatsaContact").style.color = bnctcc;

        document.getElementById("clubname").style.color = nwcncc;
        document.getElementById("profilename").style.color = nwcncc;
        document.getElementById("bizmemo").style.color = nwcncc;
    }    
}
function customformapply(params) {
    //console.log(urcwp);
    var zosk = urcwp.filter(demx => demx.bcid == params); 
    var cbizname = zosk.map(bect => bect.cbizname);
    var cyourname = zosk.map(bect => bect.cyourname);
    var caboutbiz = zosk.map(bect => bect.caboutbiz);
    //var caboutbizIH = JSON.stringify(zosk.map(bect => bect.caboutbiz)).replace(/[\[\]"]+/g,"");
    var crclub = zosk.map(bect => bect.crclub);
    var cmcontact = zosk.map(bect => bect.cmcontact);
    var cwcontact = JSON.stringify(zosk.map(bect => bect.cwcontact)).replace(/[\[\]"]+/g,"");
    //console.log(caboutbizIH.nl2br())

    document.getElementById("bizname").value = cbizname;
    document.getElementById("yourname").value = cyourname;
    document.getElementById("aboutbiz").value = caboutbiz;
    document.getElementById("rclub").value = crclub;
    document.getElementById("mcontact").value = cmcontact;
    document.getElementById("wcontact").value = cwcontact;

    document.getElementById("biztitle").innerHTML = cbizname;
    document.getElementById("profilename").innerHTML = cyourname;
    document.getElementById("bizmemo").innerText = caboutbiz
    document.getElementById("clubname").innerHTML = crclub;
    document.getElementById("phoneContact").innerHTML = `<i style="font-size:20px;" class="fas fa-phone"></i><br> <span style="font-size:12px;">${cmcontact}</span>`;
    if(myTrim(cwcontact) == "" ){
        document.getElementById("whatsaContact").innerHTML = "";
    }else{
        document.getElementById("whatsaContact").innerHTML = `<i style="font-size:30px;" class="fab fa-whatsapp-square"></i><br> <span style="font-size:12px;">${cwcontact}</span>`;
    }
   
}
document.getElementById("gocolour").addEventListener("click", function(){
    $("#rspixtext").hide();
    //$("#rscolors").show();
    document.getElementById("rscolors").style.display = "block";
});
document.getElementById("goform").addEventListener("click", function(){
    $("#rspixtext").show();
    $("#rscolors").hide();
});
let profilePix = document.querySelector("#profilePix");
let myprofile= document.querySelector("#myprofile");
profilePix.addEventListener("change", function(){
    let file = this.files[0];
    if(file){
        let reader = new FileReader();
        reader.addEventListener("load", function(){
            myprofile.style.backgroundImage = `url("${this.result}")`; 
        });
        reader.readAsDataURL(file);
    }else{
		myprofile.style.backgroundImage = "url('assets/img/testimonials-2.jpg')" ;  
    }
});

let businessPix = document.querySelector("#businessPix");
let mybizads= document.querySelector("#mybizads");
businessPix.addEventListener("change", function(){
    let file = this.files[0];
    if(file){
        let reader = new FileReader();
        reader.addEventListener("load", function(){
            mybizads.style.backgroundImage = `url("${this.result}")`; 
        });
        reader.readAsDataURL(file);
    }else{
		mybizads.style.backgroundImage = "url('assets/img/portfolio-7.jpg')" ; 
    }
});

let bizname = document.getElementById("bizname");
bizname.addEventListener("input", function(){
    let biznamePut = document.getElementById("bizname").value;
    let biztitle = document.getElementById("biztitle");
    if(myTrim(biznamePut).length > 0){
        biztitle.innerHTML = biznamePut;
    }else{
        biztitle.innerHTML = "BELLA PAINT";
    }
});

let yourname = document.getElementById("yourname");
yourname.addEventListener("input", function(){
    let yournamePut = document.getElementById("yourname").value;
    let profilename = document.getElementById("profilename");
    if(myTrim(yournamePut).length > 0){
        profilename.innerHTML = yournamePut;
    }else{
        profilename.innerHTML = "Morgan Sweeney";
    }
});

let aboutbiz = document.getElementById("aboutbiz");
aboutbiz.addEventListener("input", function(){
    let aboutbizPut = document.getElementById("aboutbiz").value;
    let bizmemo = document.getElementById("bizmemo");
    if(myTrim(aboutbizPut).length > 0){
        bizmemo.innerHTML = aboutbizPut.nl2br();
    }else{
        bizmemo.innerHTML = "Morgan has collected ants since they were six years old and now has many dozen ants but none in their pants.";
    }
});

let rclub = document.getElementById("rclub");
rclub.addEventListener("input", function(){
    let rclubPut = document.getElementById("rclub").value;
    let clubname = document.getElementById("clubname");
    if(myTrim(rclubPut).length > 0){
        clubname.innerHTML = rclubPut;
    }else{
        clubname.innerHTML = "RAC ASABA URBAN";
    }
});

let mcontact = document.getElementById("mcontact");
mcontact.addEventListener("input", function(){
    let mcontactPut = document.getElementById("mcontact").value;
    let phoneContact = document.getElementById("phoneContact");
    if(myTrim(mcontactPut).length > 0){
        phoneContact.innerHTML =  `<i style="font-size:20px;" class="fas fa-phone"></i><br> <span style="font-size:12px;">${mcontactPut}</span>`;
    }else{
        phoneContact.innerHTML = '';
    }
});

let wcontact = document.getElementById("wcontact");
wcontact.addEventListener("input", function(){
    let wcontactPut = document.getElementById("wcontact").value;
    let whatsaContact = document.getElementById("whatsaContact");
    if(myTrim(wcontactPut).length > 0){
        whatsaContact.innerHTML =  `<i style="font-size:30px;" class="fab fa-whatsapp-square"></i><br> <span style="font-size:12px;">${wcontactPut}</span>`;
    }else{
        whatsaContact.innerHTML = '';
    }
});

document.getElementById("biznamecolorS").addEventListener("click", function(){
    let biznamecolorIN = document.getElementById("biznamecolorIN").value;
    document.getElementById("biztitle").style.color = biznamecolorIN;
    document.getElementById("phoneContact").style.color = biznamecolorIN;
    document.getElementById("whatsaContact").style.color = biznamecolorIN;
});

document.getElementById("nwrupclnaS").addEventListener("click", function(){
    let nwrupclnaIN = document.getElementById("nwrupclnaIN").value;
    document.getElementById("clubname").style.color = nwrupclnaIN;
    document.getElementById("profilename").style.color = nwrupclnaIN;
    document.getElementById("bizmemo").style.color = nwrupclnaIN;
});

document.getElementById("backprobrdS").addEventListener("click", function(){
    let backprobrdIN = document.getElementById("backprobrdIN").value;
    document.getElementById("BizCard").style.backgroundColor = backprobrdIN;
    document.getElementById("myprofile").style.borderColor = backprobrdIN;
});

document.getElementById("profilepositionPS").addEventListener("click", function(){
    let imgAvatar = document.querySelector(".img-avatar");
    let imgAvatarPOS = imgAvatar.style.marginLeft;
    let imagAPR = imgAvatarPOS.replace("px", "");
    imgAvatarCAL = Number(imagAPR)+2;
    imgAvatar.style.marginLeft = `${imgAvatarCAL}px`;
}); 
document.getElementById("profilepositionMN").addEventListener("click", function(){
    let imgAvatar = document.querySelector(".img-avatar");
    let imgAvatarPOS = imgAvatar.style.marginLeft;
    let imagAPR = imgAvatarPOS.replace("px", "");
    imgAvatarCAL = Number(imagAPR)-2;
    imgAvatar.style.marginLeft = `${imgAvatarCAL}px`;
});  
function rav(params) {
   let mybizads = document.getElementById("mybizads");
   mybizads.style.backgroundPosition = params
}
var ino = 0;
var bizno = 0;
function ravv(params) {
    let mybizads = document.getElementById("mybizads");
    ino++;
    if(ino == 1 && params == "adio"){
        bizno = bizno+5;
        mybizads.style.backgroundPosition = `${bizno}% center`;
    }else if(ino > 1 && params == "adio"){
        if(bizno == 100){
            bizno = 100;
            mybizads.style.backgroundPosition = `${bizno}% center`;
        }else if(bizno < 100){
            bizno = bizno+5;
            mybizads.style.backgroundPosition = `${bizno}% center`;
        }
    }else if(ino == 1 && params == "mdio"){
        bizno = 100;
        mybizads.style.backgroundPosition = `${bizno}% center`;
    }else if(ino > 1 && params == "mdio"){
        if(bizno == 0){
            bizno = 0;
            mybizads.style.backgroundPosition = `${bizno}% center`;
        }else if(bizno > 0){
            bizno = bizno-5;
            mybizads.style.backgroundPosition = `${bizno}% center`;
        }
    }
 }
document.getElementById("bcarddone").addEventListener("click", function(){
    let profilePix = document.getElementById("profilePix").value;
    let businessPix = document.getElementById("businessPix").value;
    let bizname = document.getElementById("bizname").value;
    let yourname = document.getElementById("yourname").value;
    let aboutbiz = document.getElementById("aboutbiz").value;
    let rclub = document.getElementById("rclub").value;
    let mcontact = document.getElementById("mcontact").value;
    let wcontact = document.getElementById("wcontact").value;


    if(myTrim(profilePix).length > 4 && myTrim(businessPix).length > 4 && myTrim(bizname).length > 2 && myTrim(yourname).length > 2 && myTrim(aboutbiz).length > 4 && myTrim(rclub).length > 3 && myTrim(mcontact).length > 4){
        if(myTrim(wcontact) == "" ){
            document.getElementById("whatsaContact").innerHTML = "";
        }
        $("#bcardtoolkit").hide();
        $("#bcarddone").hide();
        $("#bcardsavect").hide();
        $("#bcardclear").hide();
    
        $("#bcardedit").show();
        $("#bcarddownload").show();
        $("#bcardclearedit").hide();
    }else{
        alert("Please Enter This Requirements: Personal Photo, Business Photo, Business Name, Your Name, About Business, Club Name & Contact Number")
    }
}); 
document.getElementById("bcardclear").addEventListener("click", function(){
    document.getElementById("profilePix").value = "";
    document.getElementById("businessPix").value = "";
    document.getElementById("bizname").value = "";
    document.getElementById("yourname").value = "";
    document.getElementById("aboutbiz").value = "";
    document.getElementById("rclub").value = "";
    document.getElementById("mcontact").value = "";
    document.getElementById("wcontact").value = "";
});
document.getElementById("bcardsavect").addEventListener("click", function(){
    let profilePix = document.getElementById("profilePix").value;
    let businessPix = document.getElementById("businessPix").value;
    let bizname = document.getElementById("bizname").value;
    let yourname = document.getElementById("yourname").value;
    let aboutbiz = document.getElementById("aboutbiz").value;
    let rclub = document.getElementById("rclub").value;
    let mcontact = document.getElementById("mcontact").value;
    let wcontact = document.getElementById("wcontact").value;

    let backprobrdIN = document.getElementById("backprobrdIN").value;
    let biznamecolorIN = document.getElementById("biznamecolorIN").value;
    let nwrupclnaIN = document.getElementById("nwrupclnaIN").value;
    if(myTrim(bizname).length > 2 && myTrim(yourname).length > 2 && myTrim(aboutbiz).length > 4 && myTrim(rclub).length > 3 && myTrim(mcontact).length > 4){
        savingtokies(bizname, yourname, aboutbiz, rclub, mcontact, wcontact, backprobrdIN, biznamecolorIN, nwrupclnaIN);
        alert("Current Contact & Template Is Saved.")
    }else{
        alert("Before Saving Please Enter This Requirements: Business Name, Your Name, About Business, Club Name & Contact Number")
    }
});
document.getElementById("bcardedit").addEventListener("click", function(){
    $("#bcardtoolkit").show();
    $("#bcarddone").show();
    $("#bcardsavect").show();
    $("#bcardclear").show();

    $("#bcardedit").hide();
    $("#bcarddownload").hide();
    $("#bcardclearedit").hide();
});
document.getElementById("bcardclearedit").addEventListener("click", function(){
    document.getElementById("profilePix").value = "";
    document.getElementById("businessPix").value = "";
    document.getElementById("bizname").value = "";
    document.getElementById("yourname").value = "";
    document.getElementById("aboutbiz").value = "";
    document.getElementById("rclub").value = "";
    document.getElementById("mcontact").value = "";
    document.getElementById("wcontact").value = "";
    
    $("#bcardtoolkit").show();
    $("#bcarddone").show();
    $("#bcardsavect").show();
    $("#bcardclear").show();

    $("#bcardedit").hide();
    $("#bcarddownload").hide();
    $("#bcardclearedit").hide();
});

document.getElementById("bcarddownload").addEventListener("click", function(){
    $("#bcardtoolkit").hide();
    $("#bcarddone").hide();
    $("#bcardsavect").hide();
    $("#bcardclear").hide();

    $("#bcardedit").show();
    $("#bcarddownload").hide();
    $("#bcardclearedit").show();

    html2canvas(document.getElementById("mirrowmirrow")).then(function (canvas){
        let a = document.createElement('a');
        a.href = canvas.toDataURL("image/jpeg");
        a.download = 'businesscard.jpg';
        a.click();
    });
});
function savingtokies(bizname, yourname, aboutbiz, rclub, mcontact, wcontact, backprobrdIN, biznamecolorIN, nwrupclnaIN) {
    let bcardbody = [
        {"bcid":"1", "cbizname": bizname, "cyourname": yourname, "caboutbiz": aboutbiz, "crclub": rclub, "cmcontact": mcontact, "cwcontact": wcontact}
      ];
    let bcardtemplate = [
        {"ccid":"1", "mainbgcc": backprobrdIN, "bnctcc": biznamecolorIN, "nwcncc": nwrupclnaIN}
    ];
    var d = new Date();
    d.setTime(d.getTime() + (120 * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = "miebcardb = "+JSON.stringify(bcardbody)+"; " + expires + "; path=/";
    document.cookie = "miebcardt = "+JSON.stringify(bcardtemplate)+"; " + expires + "; path=/";
}
function getCookie(name) {
    var cookieArr = document.cookie.split(";");
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}
function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}
String.prototype.nl2br = function(){
    return this.replace(/\n/g, "<br />");
}