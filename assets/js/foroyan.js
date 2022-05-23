var kktmkktm = getCookie("kktmkktm");
var kkbdkkbd = getCookie("kkbdkkbd");
var alltmps = "";
var ktmbd = "";
var kbdon = "";
essentialcc()
function essentialcc() {
    if(kkbdkkbd != null){
        ktmbd = JSON.parse(kktmkktm);
        kbdon = JSON.parse(kkbdkkbd);
        preinstalleddesign(1, "utm");
        preintalledtext(1);
    }
}
toptemplates()
function toptemplates() {
    alltmps = [
        {"id":"1", "celebbg": "linear-gradient(to left, #fbc7d4, #9796f0)", "celebbgctp": "2", "celebbgpst": "left", "celetextsHBD": "#444444", "celetextsCNM": "#444444", "celetextsBDM": "#444444", "cotsbg": "#925d71", "cotstxt": "#ffffff", "celebbgclar":["#fbc7d4", "#9796f0"]},
        {"id":"2", "celebbg": "linear-gradient(to right, #DDEFBB, #FFEEEE)", "celebbgctp": "2", "celebbgpst": "left", "celetextsHBD": "#444444", "celetextsCNM": "#444444", "celetextsBDM": "#444444", "cotsbg": "#95615a", "cotstxt": "#ffffff", "celebbgclar":["#DDEFBB", "#FFEEEE"]},
        {"id":"3", "celebbg": "linear-gradient(to left, #fffcdc, #d9a7c7)", "celebbgctp": "2", "celebbgpst": "left", "celetextsHBD": "#444444", "celetextsCNM": "#444444", "celetextsBDM": "#444444", "cotsbg": "#642b4f", "cotstxt": "#ffffff", "celebbgclar":["#fffcdc", "#d9a7c7"]},
        {"id":"4", "celebbg": "linear-gradient(to top, #ceeca2, #eff09d, #fff2e0)", "celebbgctp": "3", "celebbgpst": "top", "celetextsHBD": "#444444", "celetextsCNM": "#444444", "celetextsBDM": "#444444", "cotsbg": "#7a7c04", "cotstxt": "#ffffff", "celebbgclar":["#ceeca2", "#eff09d", "fff2e0"]},
        {"id":"5", "celebbg": "linear-gradient(to top, #ffffff, #ffd6f6, #ff9eea)", "celebbgctp": "3", "celebbgpst": "top", "celetextsHBD": "#444444", "celetextsCNM": "#444444", "celetextsBDM": "#444444", "cotsbg": "#91648e", "cotstxt": "#ffffff", "celebbgclar":["#ffffff", "#ffd6f6", "#ff9eea"]},
        {"id":"6", "celebbg": "linear-gradient(to left, #FFFFFF, #6DD5FA, #2980B9)", "celebbgctp": "3", "celebbgpst": "left", "celetextsHBD": "#444444", "celetextsCNM": "#444444", "celetextsBDM": "#444444", "cotsbg": "#40b3fd", "cotstxt": "#000000", "celebbgclar":["#FFFFFF", "#6DD5FA", "#2980B9"]},
        {"id":"7", "celebbg": "linear-gradient(to right, #f7797d, #FBD786, #C6FFDD)", "celebbgctp": "3", "celebbgpst": "right", "celetextsHBD": "#444444", "celetextsCNM": "#444444", "celetextsBDM": "#444444", "cotsbg": "#b8474b", "cotstxt": "#ffffff", "celebbgclar":["#f7797d", "#FBD786", "#C6FFDD"]},
        {"id":"8", "celebbg": "#ffff00", "celebbgctp": "1", "celebbgpst": "", "celetextsHBD": "#444444", "celetextsCNM": "#444444", "celetextsBDM": "#444444", "cotsbg": "#962d22", "cotstxt": "#ffffff", "celebbgclar":["#ffff00"]}
      ];

    let divstand = `float:left; margin-right:10px;`;
    let HSD = '';
    let alltmpsLength = alltmps.length;
    let chdivstylerm = alltmpsLength-1;
    for (let i = 0; i < alltmpsLength; i++) {
        // if(alltmps[i].id == alltmpsLength){
        //     divstand = "";
        // }
        HSD += `<div id="vw${alltmps[i].id}" style="cursor:pointer; margin-top:5px; ${divstand}" >
        <table cellpadding="10" cellspacing="10" border="1">
        <tr>
        <td style="background:${alltmps[i].celebbg};"> </td>	<td style="background:${alltmps[i].celetextsHBD};"> </td>	<td style="background:${alltmps[i].cotsbg};"> </td>
        </tr>
        </table>
        </div>`;    
    }
    document.getElementById("topmintemp").innerHTML = HSD;
    for (let u = 0; u < alltmpsLength; u++) {
        document.getElementById(`vw${alltmps[u].id}`).addEventListener("click", function(){
            preinstalleddesign(alltmps[u].id, "tm")
        });   
    }
}
function preinstalleddesign(params, who) {
    if(who == "tm"){
        var zosk = alltmps.filter(demx => demx.id == params); 
        var celebbg = zosk.map(bect => bect.celebbg); 
        var celebbgctp = zosk.map(bect => bect.celebbgctp); 
        var celebbgpst = zosk.map(bect => bect.celebbgpst); 
        var celebbgORG = zosk.map(bect => bect.celebbgclar); 
        var celetextsHBD = zosk.map(bect => bect.celetextsHBD); 
        var celetextsCNM = zosk.map(bect => bect.celetextsCNM); 
        var celetextsBDM = zosk.map(bect => bect.celetextsBDM); 
        var cotsbg = zosk.map(bect => bect.cotsbg); 
        var cotstxt = zosk.map(bect => bect.cotstxt); 
        onvios()
    }else if(who == "utm"){ 
        var zosk = ktmbd.filter(demx => demx.cid == params); 
        var celebbg = zosk.map(bect => bect.celebbg); 
        var celebbgctp = zosk.map(bect => bect.celebbgctp); 
        var celebbgpst = zosk.map(bect => bect.celebbgpst); 
        var celebbgORG = zosk.map(bect => bect.celebbgclar); 
        var celetextsHBD = zosk.map(bect => bect.celetextsHBD); 
        var celetextsCNM = zosk.map(bect => bect.celetextsCNM); 
        var celetextsBDM = zosk.map(bect => bect.celetextsBDM); 
        var cotsbg = zosk.map(bect => bect.cotsbg); 
        var cotstxt = zosk.map(bect => bect.cotstxt);  
        onvios()
    }
    
    function onvios() {
        var rflot = "float: left;";
        if(celebbgctp == 1){
            var cbbgarrLength = 1;
            var uslin = cbbgarrLength-1;
            document.getElementById("directionalbh").innerHTML = "";
        }else if(celebbgctp == 2){
            var cbbgarrLength = 2;
            var uslin = cbbgarrLength-1;
            document.getElementById("directionalbh").innerHTML = `<button id="" class="cbsbtn-secondary"><i class="fas fa-arrow-left" onclick="revmms('left')"></i></button>
            <button id="" class="cbsbtn-secondary" onclick="revmms('right')"><i class="fas fa-arrow-right"></i></button><br>
            <button id="" class="cbsbtn-secondary" onclick="revmms('top')"><i class="fas fa-arrow-up"></i></button>
            <button id="" class="cbsbtn-secondary" onclick="revmms('bottom')"><i class="fas fa-arrow-down"></i></button>`;
        }else if(celebbgctp == 3){
            var cbbgarrLength = 3;
            var uslin = cbbgarrLength-1;
            document.getElementById("directionalbh").innerHTML = `<button id="" class="cbsbtn-secondary"><i class="fas fa-arrow-left" onclick="revmms('left')"></i></button>
            <button id="" class="cbsbtn-secondary" onclick="revmms('right')"><i class="fas fa-arrow-right"></i></button><br>
            <button id="" class="cbsbtn-secondary" onclick="revmms('top')"><i class="fas fa-arrow-up"></i></button>
            <button id="" class="cbsbtn-secondary" onclick="revmms('bottom')"><i class="fas fa-arrow-down"></i></button>`; 
        }
        document.getElementById(`manson1opion`).classList.remove("active");
        document.getElementById(`manson2opion`).classList.remove("active");
        document.getElementById(`manson3opion`).classList.remove("active");
        var NSO = '';
        for (var i = 0; i < cbbgarrLength; i++) {
            if(i == uslin){
                document.getElementById(`manson${uslin+1}opion`).classList.add("active");
            }
            
            NSO += `<div style="float: left;"><input type="color" id="backgroundinfo${i+1}IN" name="backgroundinfo${i+1}IN" class="form-control" style="width: 60px;" ></div>`;
        }

        NSO += `<div id="backgroundinfoS" style="font-size: 12px; padding-top: 4px; padding-left: 10px; padding-right: 10px; text-decoration: underline;  color: steelblue; cursor: pointer;">Apply</div>`
        document.getElementById("setofcelebg").innerHTML = NSO;

        celebbgORG.forEach((roomie) => {
            roomie.forEach((data, index) => {
                document.getElementById(`backgroundinfo${index+1}IN`).value = data;
            });
        });

        document.getElementById("backgroundinfoS").addEventListener("click", function(){
            applybackgroundceleb()
        });

        document.getElementById("happybirdayIN").value = celetextsHBD;
        document.getElementById("celebrantnameIN").value = celetextsCNM;
        document.getElementById("messagecelebIN").value = celetextsBDM;
        document.getElementById("courtesybgIN").value = cotsbg;
        document.getElementById("courtesytxIN").value = cotstxt;
        document.getElementById("celebrantbpstIN").value = celebbgpst;

        document.getElementById("btdcard").style.background = celebbg;
        document.getElementById("hpdfcele").style.color = celetextsHBD;
        document.getElementById("clbrantName").style.color = celetextsCNM;
        document.getElementById("brdmsg").style.color = celetextsBDM;
        document.getElementById("cotsyFt").style.background = cotsbg;
        document.getElementById("cotsyName").style.color = cotstxt;
    }    
}
document.getElementById("backgroundinfoS").addEventListener("click", function(){
    applybackgroundceleb()
});
function applybackgroundceleb() {
    var orengo = document.querySelector(".cbsbtn-secondary.active").id;
    if(orengo == "manson1opion"){
        var backgroundinfo1IN = document.getElementById("backgroundinfo1IN").value;
        document.getElementById("btdcard").style.background = backgroundinfo1IN;
    }else if(orengo == "manson2opion"){
        var celebrantbpstIN = document.getElementById("celebrantbpstIN").value;

        var backgroundinfo1IN = document.getElementById("backgroundinfo1IN").value;
        var backgroundinfo2IN = document.getElementById("backgroundinfo2IN").value;
        document.getElementById("btdcard").style.background = `linear-gradient(to ${celebrantbpstIN}, ${backgroundinfo1IN},  ${backgroundinfo2IN})`;
    }else if(orengo == "manson3opion"){
        var celebrantbpstIN = document.getElementById("celebrantbpstIN").value;

        var backgroundinfo1IN = document.getElementById("backgroundinfo1IN").value;
        var backgroundinfo2IN = document.getElementById("backgroundinfo2IN").value;
        var backgroundinfo3IN = document.getElementById("backgroundinfo3IN").value;
        document.getElementById("btdcard").style.background = `linear-gradient(to ${celebrantbpstIN}, ${backgroundinfo1IN},  ${backgroundinfo2IN},  ${backgroundinfo3IN})`;
    }
}
function preintalledtext(params) {
    var zosk = kbdon.filter(demx => demx.ccid == params); 
    var celebrnm = zosk.map(bect => bect.celebrnm);
    var bdrmsg = zosk.map(bect => bect.bdrmsg);
    var cournm = zosk.map(bect => bect.cournm);

    document.getElementById("celebrantName").value = celebrnm;
    document.getElementById("bithdayWish").value = bdrmsg;
    document.getElementById("courtesyName").value = cournm;

    document.getElementById("clbrantName").innerHTML = celebrnm;
    document.getElementById("brdmsg").innerText = bdrmsg
    document.getElementById("cotsyName").innerHTML = `<i><b>Courtesy:</b></i><br>${cournm}`;
    
}
function revmms(params) {
    var orengo = document.querySelector(".cbsbtn-secondary.active").id;
    if(orengo == "manson2opion"){
        document.getElementById("celebrantbpstIN").value = params;

        var backgroundinfo1IN = document.getElementById("backgroundinfo1IN").value;
        var backgroundinfo2IN = document.getElementById("backgroundinfo2IN").value;
        document.getElementById("btdcard").style.background = `linear-gradient(to ${params}, ${backgroundinfo1IN},  ${backgroundinfo2IN})`;
    }else if(orengo == "manson3opion"){
        document.getElementById("celebrantbpstIN").value = params;

        var backgroundinfo1IN = document.getElementById("backgroundinfo1IN").value;
        var backgroundinfo2IN = document.getElementById("backgroundinfo2IN").value;
        var backgroundinfo3IN = document.getElementById("backgroundinfo3IN").value;
        document.getElementById("btdcard").style.background = `linear-gradient(to ${params}, ${backgroundinfo1IN},  ${backgroundinfo2IN},  ${backgroundinfo3IN})`;
    }
}
document.getElementById("manson1opion").addEventListener("click", function(){
    background123select(1)
});
document.getElementById("manson2opion").addEventListener("click", function(){
    background123select(2)
});
document.getElementById("manson3opion").addEventListener("click", function(){
    background123select(3)
});
function background123select(params) {
    document.getElementById(`manson1opion`).classList.remove("active");
    document.getElementById(`manson2opion`).classList.remove("active");
    document.getElementById(`manson3opion`).classList.remove("active");

    document.getElementById(`manson${params}opion`).classList.add("active");

    if(params == 1){
        var elopbLenght = 1;
        document.getElementById("directionalbh").innerHTML = "";
        document.getElementById("btdcard").style.background = "#ffffff";
        document.getElementById("celebrantbpstIN").value = "bottom";
    }else if(params == 2){
        var elopbLenght = 2;
        document.getElementById("directionalbh").innerHTML = `<button id="" class="cbsbtn-secondary"><i class="fas fa-arrow-left" onclick="revmms('left')"></i></button>
        <button id="" class="cbsbtn-secondary" onclick="revmms('right')"><i class="fas fa-arrow-right"></i></button><br>
        <button id="" class="cbsbtn-secondary" onclick="revmms('top')"><i class="fas fa-arrow-up"></i></button>
        <button id="" class="cbsbtn-secondary" onclick="revmms('bottom')"><i class="fas fa-arrow-down"></i></button>`;
        document.getElementById("btdcard").style.background = "#ffffff";
        document.getElementById("celebrantbpstIN").value = "left";
    }else if(params == 3){
        var elopbLenght = 3;
        document.getElementById("directionalbh").innerHTML = `<button id="" class="cbsbtn-secondary"><i class="fas fa-arrow-left" onclick="revmms('left')"></i></button>
        <button id="" class="cbsbtn-secondary" onclick="revmms('right')"><i class="fas fa-arrow-right"></i></button><br>
        <button id="" class="cbsbtn-secondary" onclick="revmms('top')"><i class="fas fa-arrow-up"></i></button>
        <button id="" class="cbsbtn-secondary" onclick="revmms('bottom')"><i class="fas fa-arrow-down"></i></button>`;
        document.getElementById("btdcard").style.background = "#ffffff";
        document.getElementById("celebrantbpstIN").value = "left";
    }

    var NSO = '';
        for (var i = 0; i < elopbLenght; i++) {
            NSO += `<div style="float: left;"><input type="color" id="backgroundinfo${i+1}IN" name="backgroundinfo${i+1}IN" class="form-control" style="width: 60px;" value="#ffffff"></div>`;
        }

        NSO += `<div id="backgroundinfoS" style="font-size: 12px; padding-top: 4px; padding-left: 10px; padding-right: 10px; text-decoration: underline;  color: steelblue; cursor: pointer;">Apply</div>`;

        document.getElementById("setofcelebg").innerHTML = NSO;

        document.getElementById("backgroundinfoS").addEventListener("click", function(){
            applybackgroundceleb()
        });
}
document.getElementById("happybirdayS").addEventListener("click", function(){
    let happybirdayIN = document.getElementById("happybirdayIN").value;
    document.getElementById("hpdfcele").style.color = happybirdayIN;
});
document.getElementById("celebrantnameS").addEventListener("click", function(){
    let celebrantnameIN = document.getElementById("celebrantnameIN").value;
    document.getElementById("clbrantName").style.color = celebrantnameIN;
});
document.getElementById("messagecelebS").addEventListener("click", function(){
    let messagecelebIN = document.getElementById("messagecelebIN").value;
    document.getElementById("brdmsg").style.color = messagecelebIN;
});
document.getElementById("courtesybgS").addEventListener("click", function(){
    let courtesybgIN = document.getElementById("courtesybgIN").value;
    document.getElementById("cotsyFt").style.background = courtesybgIN;
});
document.getElementById("courtesytxS").addEventListener("click", function(){
    let courtesytxIN = document.getElementById("courtesytxIN").value;
    document.getElementById("cotsyName").style.color = courtesytxIN;
});

let celebrantPix = document.querySelector("#celebrantPix");
let clbrantImg= document.querySelector("#clbrantImg");
celebrantPix.addEventListener("change", function(){
    let file = this.files[0];
    if(file){
        let reader = new FileReader();
        reader.addEventListener("load", function(){
            clbrantImg.style.backgroundImage = `url("${this.result}")`; 
        });
        reader.readAsDataURL(file);
    }else{
		clbrantImg.style.backgroundImage = "url('assets/img/214emasmi.jpg')" ;  
    }
});

let courtesyPix = document.querySelector("#courtesyPix");
let cotsyImg= document.querySelector("#cotsyImg");
courtesyPix.addEventListener("change", function(){
    let file = this.files[0];
    if(file){
        let reader = new FileReader();
        reader.addEventListener("load", function(){
            cotsyImg.style.backgroundImage = `url("${this.result}")`; 
        });
        reader.readAsDataURL(file);
    }else{
		cotsyImg.style.backgroundImage = "url('assets/img/testimonials-2.jpg')" ; 
    }
});

let celebrantName = document.getElementById("celebrantName");
celebrantName.addEventListener("input", function(){
    let celebrantNamePut = document.getElementById("celebrantName").value;
    let clbrantName = document.getElementById("clbrantName");
    if(myTrim(celebrantNamePut).length > 0){
        clbrantName.innerHTML = celebrantNamePut;
    }else{
        clbrantName.innerHTML = "Rotaractor Mercy Obinwa";
    }
});

let bithdayWish = document.getElementById("bithdayWish");
bithdayWish.addEventListener("input", function(){
    let bithdayWishPut = document.getElementById("bithdayWish").value;
    let brdmsg = document.getElementById("brdmsg");
    if(myTrim(bithdayWishPut).length > 0){
        brdmsg.innerHTML = bithdayWishPut.nl2br();
    }else{
        brdmsg.innerHTML = "It is common to make birthday cards out of paper. But this time I want to make it special and for the most special being on earth today, which offcourse is you. You deserve the very best of everything, embrace it, be confident, and embark on a future of limitless possibilities and opportunities. Happy birthday.";
    }
});

let courtesyName = document.getElementById("courtesyName");
courtesyName.addEventListener("input", function(){
    let courtesyNamePut = document.getElementById("courtesyName").value;
    let cotsyName = document.getElementById("cotsyName");
    if(myTrim(courtesyNamePut).length > 0){
        cotsyName.innerHTML = `<i><b>Courtesy:</b></i><br>${courtesyNamePut}`;
    }else{
        cotsyName.innerHTML = `<i><b>Courtesy:</b></i><br>Rotaractor Favour Oghenebrume (RAC Asaba Urban)`;
    }
});

document.getElementById("edittemplato").addEventListener("click", function(){
    $("#btcdtxtedt").hide();
    $("#btcdtpledt").show();
});
document.getElementById("editbrdcrd").addEventListener("click", function(){
    $("#btcdtxtedt").show();
    $("#btcdtpledt").hide();
});
function insuv(params) {
    let clbrantImg = document.getElementById("clbrantImg");
    clbrantImg.style.backgroundPosition = params
}
 var cno = 0;
 var clbno = 0;
 function insuvv(params) {
     let clbrantImg = document.getElementById("clbrantImg");
     cno++;
     if(cno == 1 && params == "adio"){
         clbno = clbno+5;
         clbrantImg.style.backgroundPosition = `${clbno}% center`;
     }else if(cno > 1 && params == "adio"){
         if(clbno == 100){
             clbno = 100;
             clbrantImg.style.backgroundPosition = `${clbno}% center`;
         }else if(clbno < 100){
             clbno = clbno+5;
             clbrantImg.style.backgroundPosition = `${clbno}% center`;
         }
     }else if(cno == 1 && params == "mdio"){
         clbno = 100;
         clbrantImg.style.backgroundPosition = `${clbno}% center`;
     }else if(cno > 1 && params == "mdio"){
         if(clbno == 0){
             clbno = 0;
             clbrantImg.style.backgroundPosition = `${clbno}% center`;
         }else if(clbno > 0){
             clbno = clbno-5;
             clbrantImg.style.backgroundPosition = `${clbno}% center`;
         }
     }
}
var uno = 0;
var rclno = 0;
function insuvvv(params) {
    let clbrantImg = document.getElementById("clbrantImg");
    uno++;
    if(uno == 1 && params == "adio"){
        rclno = rclno+5;
        clbrantImg.style.backgroundPosition = `center ${rclno}%`;
    }else if(uno > 1 && params == "adio"){
        if(rclno == 100){
            rclno = 100;
            clbrantImg.style.backgroundPosition = `center ${rclno}%`;
        }else if(rclno < 100){
            rclno = rclno+5;
            clbrantImg.style.backgroundPosition = `center ${rclno}%`;
        }
    }else if(uno == 1 && params == "mdio"){
        rclno = 100;
        clbrantImg.style.backgroundPosition = `center ${rclno}%`;
    }else if(uno > 1 && params == "mdio"){
        if(rclno == 0){
            rclno = 0;
            clbrantImg.style.backgroundPosition = `center ${rclno}%`;
        }else if(rclno > 0){
            rclno = rclno-5;
            clbrantImg.style.backgroundPosition = `center ${rclno}%`;
        }
    }
}
document.getElementById("btdcarddone").addEventListener("click", function(){
    let celebrantPix = document.getElementById("celebrantPix").value;
    let courtesyPix = document.getElementById("courtesyPix").value;
    let celebrantName = document.getElementById("celebrantName").value;
    let bithdayWish = document.getElementById("bithdayWish").value;
    let courtesyName = document.getElementById("courtesyName").value;

    if(myTrim(celebrantPix).length > 4 && myTrim(courtesyPix).length > 4 && myTrim(celebrantName).length > 2 && myTrim(bithdayWish).length > 4 && myTrim(courtesyName).length > 2){
        
        $("#btdcarddone").hide();
        $("#btdcardsavect").hide();
        $("#btdcardclear").hide();
        $("#bcardtoolkit").hide();
    
        $("#btdcardedit").show();
        $("#btdcarddownload").show();
        $("#btdcardclearedit").hide();
    }else{
        alert("Please Enter These Requirements: Celebrate's Photo, Courtesy Photo, Celebrant's Name, Birthday Message, Courtesy Name")
    }
});
document.getElementById("btdcardclear").addEventListener("click", function(){
    document.getElementById("celebrantPix").value = "";
    document.getElementById("courtesyPix").value = "";
    document.getElementById("celebrantName").value = "";
    document.getElementById("bithdayWish").value = "";
    document.getElementById("courtesyName").value = "";
});
document.getElementById("btdcardedit").addEventListener("click", function(){
        $("#btdcarddone").show();
        $("#btdcardsavect").show();
        $("#btdcardclear").show();
        $("#bcardtoolkit").show();
    
        $("#btdcardedit").hide();
        $("#btdcarddownload").hide();
        $("#btdcardclearedit").hide();
});
document.getElementById("btdcardclearedit").addEventListener("click", function(){
    document.getElementById("celebrantPix").value = "";
    document.getElementById("courtesyPix").value = "";
    document.getElementById("celebrantName").value = "";
    document.getElementById("bithdayWish").value = "";
    document.getElementById("courtesyName").value = "";
    
    $("#btdcarddone").show();
    $("#btdcardsavect").show();
    $("#btdcardclear").show();
    $("#bcardtoolkit").show();

    $("#btdcardedit").hide();
    $("#btdcarddownload").hide();
    $("#btdcardclearedit").hide();
});

document.getElementById("btdcarddownload").addEventListener("click", function(){    
    $("#btdcarddone").hide();
    $("#btdcardsavect").hide();
    $("#btdcardclear").hide();
    $("#bcardtoolkit").hide();

    $("#btdcardedit").show();
    $("#btdcarddownload").hide();
    $("#btdcardclearedit").show();

    html2canvas(document.getElementById("mirrowmirrow")).then(function (canvas){
        let a = document.createElement('a');
        a.href = canvas.toDataURL("image/jpeg");
        a.download = 'birthday-card.jpg';
        a.click();
    });
});
document.getElementById("btdcardsavect").addEventListener("click", function(){
    let celebrantName = document.getElementById("celebrantName").value;
    let bithdayWish = document.getElementById("bithdayWish").value;
    let courtesyName = document.getElementById("courtesyName").value;

    let happybirdayIN = document.getElementById("happybirdayIN").value;
    let celebrantnameIN = document.getElementById("celebrantnameIN").value;
    let messagecelebIN = document.getElementById("messagecelebIN").value;
    let courtesybgIN = document.getElementById("courtesybgIN").value;
    let courtesytxIN = document.getElementById("courtesytxIN").value;
    if(myTrim(celebrantName).length > 2 && myTrim(bithdayWish).length > 4 && myTrim(courtesyName).length > 2){
        savetomyrckks(celebrantName, bithdayWish, courtesyName, happybirdayIN, celebrantnameIN, messagecelebIN, courtesybgIN, courtesytxIN);
        alert("Template Saved.")
    }else{
        alert("Before Saving Please Enter These Requirements: Celebrant's Name, Birthday Message & Courtesy Name")
    }
});
function savetomyrckks(celebrantName, bithdayWish, courtesyName, happybirdayIN, celebrantnameIN, messagecelebIN, courtesybgIN, courtesytxIN) {
    var orengo = document.querySelector(".cbsbtn-secondary.active").id;
    if(orengo == "manson1opion"){
        var backgroundinfo1IN = document.getElementById("backgroundinfo1IN").value;
        var btdtemplatkkar = [
        {"id":"1", "celebbg": backgroundinfo1IN, "celebbgctp": "1", "celebbgpst": "", "celetextsHBD": happybirdayIN, "celetextsCNM": celebrantnameIN, "celetextsBDM": messagecelebIN, "cotsbg": courtesybgIN, "cotstxt": courtesytxIN, "celebbgclar":[backgroundinfo1IN]}
        ];
    }else if(orengo == "manson2opion"){
        var celebrantbpstIN = document.getElementById("celebrantbpstIN").value;

        var backgroundinfo1IN = document.getElementById("backgroundinfo1IN").value;
        var backgroundinfo2IN = document.getElementById("backgroundinfo2IN").value;

        var btdtemplatkkar = [
            {"id":"1", "celebbg": `linear-gradient(to ${celebrantbpstIN}, ${backgroundinfo1IN}, ${backgroundinfo2IN})`, "celebbgctp": "2", "celebbgpst": celebrantbpstIN, "celetextsHBD": happybirdayIN, "celetextsCNM": celebrantnameIN, "celetextsBDM": messagecelebIN, "cotsbg": courtesybgIN, "cotstxt": courtesytxIN, "celebbgclar":[backgroundinfo1IN, backgroundinfo2IN]}
            ];
    }else if(orengo == "manson3opion"){
        var celebrantbpstIN = document.getElementById("celebrantbpstIN").value;

        var backgroundinfo1IN = document.getElementById("backgroundinfo1IN").value;
        var backgroundinfo2IN = document.getElementById("backgroundinfo2IN").value;
        var backgroundinfo3IN = document.getElementById("backgroundinfo3IN").value;

        var btdtemplatkkar = [
            {"cid":"1", "celebbg": `linear-gradient(to ${celebrantbpstIN}, ${backgroundinfo1IN}, ${backgroundinfo2IN}, ${backgroundinfo3IN})`, "celebbgctp": "3", "celebbgpst": celebrantbpstIN, "celetextsHBD": happybirdayIN, "celetextsCNM": celebrantnameIN, "celetextsBDM": messagecelebIN, "cotsbg": courtesybgIN, "cotstxt": courtesytxIN, "celebbgclar":[backgroundinfo1IN, backgroundinfo2IN, backgroundinfo3IN]}
            ];
    }
    var btdbodykkar = [
        {"ccid":"1", "celebrnm": celebrantName, "bdrmsg": bithdayWish, "cournm": courtesyName}
    ];

    var d = new Date();
    d.setTime(d.getTime() + (120 * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = "kktmkktm = "+JSON.stringify(btdtemplatkkar)+"; " + expires + "; path=/";
    document.cookie = "kkbdkkbd = "+JSON.stringify(btdbodykkar)+"; " + expires + "; path=/";
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