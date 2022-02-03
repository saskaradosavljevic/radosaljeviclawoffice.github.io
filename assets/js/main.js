//dinamicko ispisivanje menija
let nizHref = ["index.html", "#o-nama", "#usluge", "#nas-tim", "#kontakt", "https://saskaradosavljevic.github.io/portfolio.github.io/"];
let nizText = ["Početna", "O nama", "Usluge", "Naš tim", "Kontakt", "Autor"];
let nizId = ["link1", "link2", "link3", "link4", "link5", "link6"];

let divNav = document.querySelector("#navbarNav");
//let divNav1 = $( "#navBar" );

let ispisNav = `<ul class="navbar-nav ml-auto">`;
for (let i = 0; i < nizHref.length; i++) {


    ispisNav += `<li class="nav-item"><a class="nav-link" id="${nizId[i]}" href="${nizHref[i]}">${nizText[i]}</a></li>`;
}
ispisNav += "</ul>";
divNav.innerHTML = ispisNav;

$('#link6').each(function () {
    $(this).attr('target', '_blank');
});

//slider
slideShow();

function slideShow() {
    var trenutnaSlika = $("#slider .aktivna");

    var sledecaSlika = trenutnaSlika.next().length ? trenutnaSlika.next() : trenutnaSlika.parent().children(":first");

    sledecaSlika.addClass("aktivna");
    trenutnaSlika.removeClass("aktivna");

    setTimeout(slideShow, 3000);
}
//ispisivanje stats sekcije
var nizNum=["20","30","200.000"];
var nizH5=["Godina iskustva","Advokata i saradnika","Predmeta"];
var html1=" ";
for(let i=0;i<nizNum.length;i++){
    html1 +=`<div class="col-md-4">
                <div class="stat-items mt-2">
                    <h2><span>+</span><span class="num">${nizNum[i]}</span></h2>
                    <h5 class="text-uppercase font-weight-bold">${nizH5[i]}</h5>
                </div>
            </div>`
}
document.querySelector("#s").innerHTML=html1;

//dinamicko ispisivanje usluga
let nizSlikeUsluga = ["assets/img/jail.png", "assets/img/trade.png", "assets/img/handshake.png"];
let nizAltUsluga = ["Krivično pravo", "Poslovno pravo", "Građansko pravo"];
let nizUsluga = ["Krivično pravo", "Poslovno pravo", "Građansko pravo"];
let nizP = ["Krivično pravo je sistem zakonskih pravnih propisa kojima se utvrđuju uslovi za primenu kazni i drugih krivičnih sankcija.", "Privredno pravo je posebna grana prava, koja obuhvata pravne norme kojima se regulišu pravni položaj preduzeća i društava.", "Građansko ili imovinsko definiše se kao skup pravnih normi koje uređuju društvene odnose u koje osobe stupaju povodom imovine."]

let nizStreliceId = ["flip0", "flip1", "flip2"];
let nizPanelId = ["panel0", "panel1", "panel2"];
let nizTabelaId = ["table0", "table1", "table2"];


var ispis1 = " ";
for (let i = 0; i < nizSlikeUsluga.length; i++) {
    ispis1 += `<div class="col-md-4 text center">
                <div class="services">
                    <span class="icon">
                        <img src="${nizSlikeUsluga[i]}" alt="${nizAltUsluga[i]}"/>
                    </span>
                    <div class="desc">
                        <h4 class="font-weight-bold">${nizUsluga[i]}</h4>
                        <p>${nizP[i]}</p>
                    </div>
                    <div id="${nizStreliceId[i]}" class="text-center">
                        <img src="assets/img/strelica.png" alt="strelica"/>
                    </div>
                </div>
                <div class="container" id="${nizPanelId[i]}">
                    <div class="row">
                        <div class="col-12 mb-4" id="${nizTabelaId[i]}"></div>
                    </div>
                </div>
             </div>`
}
document.querySelector("#u").innerHTML = ispis1;

//Kreiranje dinamicne tabele
function kreirajTabelu(nizTabele,tableId,flipId,panelId) {
    var nizTabeleNew = new Array(nizTabele);
    var tagTable = document.createElement("table");
    tagTable.setAttribute("border", "1");
    tagTable.setAttribute("class", "table");
    for (let i = 0; i < nizTabele.length; i++) {
        var tagTr = document.createElement("tr");

        var tagTd = document.createElement("td");
        var sadrzajTagaTd = document.createTextNode(nizTabele[i]);
        tagTd.setAttribute("class", "font-weight-bold")

        tagTd.appendChild(sadrzajTagaTd);
        tagTr.appendChild(tagTd);
        tagTable.appendChild(tagTr);
    }
    document.querySelector("#"+tableId).appendChild(tagTable);
    $(document).ready(function () {
        $("#"+flipId).click(function () {
            $("#"+panelId).slideToggle("slow");
        });
    });
}

// Kreiranje prve tabele
kreirajTabelu(Array("Krivični postupak", "Prekršajni postupak", "Postupak po privrednim prestupima"), 'table0','flip0','panel0');

// Kreiranje druge tabele
kreirajTabelu(Array("Bankarstvo i finansije", "Nepokretnosti i infrastruktura", "Porezi", "Privredno pravo", "Radno pravo", "Zaštita intelektualne svojine", "Zaštita prava konkurencije"), 'table1','flip1','panel1');

// Kreiranje trece tabele
kreirajTabelu(Array("Obligaciono pravo", "Stvarno pravo", "Nasledno pravo", "Porodično pravo"), 'table2','flip2','panel2');


//dinamicko ispisivanje slika zaposlenih
let nizSrc = ["assets/img/people1wb.png", "assets/img/people2wb.png", "assets/img/people3wb.png", "assets/img/people4wb.png", "assets/img/people5wb.png", "assets/img/people6wb.png", "assets/img/people7wb.png", "assets/img/people8wb.png", "assets/img/people9wb.png"];
var nizAlt = ["Jovana Simić", "Darko Marić", "Miloš Simić", "Jana Dačić", "Olja Rajković", "Ana Bojić", "Vuk Živković", "Petar Ivić", "Nebojša Rakić"];
var nizZanjimanje = ["krivično pravo", "poslovno pravo", "krivično pravo", "građansko pravo", "poslovno pravo", "krivično pravo", "građansko pravo", "poslovno pravo", "krivično pravo"];
let nizSrc1 = ["assets/img/people1.png", "assets/img/people2.png", "assets/img/people3.png", "assets/img/people4.png", "assets/img/people5.png", "assets/img/people6.png", "assets/img/people7.png", "assets/img/people8.png", "assets/img/people9.png"];

let ispis = " ";
for (let i = 0; i < nizSrc.length; i++) {

    ispis += `<div class="col-md-4 col-sm-12">
                <div class="images">
                    <figure>
                        <img  class="card-img-top" src="${nizSrc[i]}" data-src="${nizSrc[i]}" data-src1="${nizSrc1[i]}" alt="${nizAlt[i]}"/>
                        <figcaption>${nizAlt[i]}-${nizZanjimanje[i]}</figcaption>
                    </figure>
                </div>
            </div>`
}
document.querySelector("#galerija").innerHTML = ispis;


// Promena slike preko data atributa
$(".images").hover(
    function () {
        $(this).find('figcaption').show();
        $(this).find('img').attr("src", $(this).find('img').data('src1'));
    }, function () {
        $(this).find('figcaption').hide();
        $(this).find('img').attr("src", $(this).find('img').data('src'));
    }
);
//ispis ddl vreme
var nizVreme=["Vreme sastanka","9:00h","9:30h","10:00h","10:30h","11:00h","11:30h","12:00h","12:30h","13:00h","13:30h","14:00h","14:30h","15:00h","15:30h","16:00h"];
ispisVreme=" ";
for(var i=0;i<nizVreme.length;i++){
    ispisVreme +=`<option value=${i}>${nizVreme[i]}</option>`
}
document.querySelector("#ddlVreme").innerHTML=ispisVreme;
//FORMA PROVERA
document.querySelector("#btnPosalji").addEventListener("click",proveraForme);
function proveraForme(){
    var greska=0;
    
    //provera ime i prezime
    var poljeImePrezime = document.querySelector("#tbImePrezime");

    var reImePrezime = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,14}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,19})+$/

    if (poljeImePrezime.value.length < 3 || (!reImePrezime.test(poljeImePrezime.value))) {
        poljeImePrezime.nextElementSibling.classList.add("prikaz");
        greska++;
    }
    else {
        poljeImePrezime.nextElementSibling.classList.remove("prikaz");
    }

    //provera mejla
    var poljeEmail = document.querySelector("#tbEmail");
    var reEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (!reEmail.test(poljeEmail.value)) {
        poljeEmail.nextElementSibling.classList.add("prikaz");
        greska++;
    }
    else {
        poljeEmail.nextElementSibling.classList.remove("prikaz");
    }

    //provera liste
    var ddl=document.querySelector("#ddlOblast");

    if(ddl.options.selectedIndex==0){
        ddl.nextElementSibling.classList.add("prikaz");
        greska++;
    }
    else{
        ddl.nextElementSibling.classList.remove("prikaz");
    }
    //datum
    var datum=document.querySelector("#datum");

    if(datum.value.length<1){
        datum.nextElementSibling.classList.add("prikaz");
    }
    else{
        datum.nextElementSibling.classList.remove("prikaz");
    }
    //vreme
    var vreme=document.querySelector("#ddlVreme");
    if(ddlVreme.options.selectedIndex==0){
        vreme.nextElementSibling.classList.add("prikaz");
        greska++;
    }
    else{
        vreme.nextElementSibling.classList.remove("prikaz");
    }


    //provera gresaka
    if(greska==0){
        document.querySelector("#uspesno").classList.add("prikaz");
        document.querySelector("#neuspesno").classList.remove("prikaz");
    }
    else{
        document.querySelector("#neuspesno").classList.add("prikaz");
    }

}

//counter increment
jQuery(document).ready(function() {
    $('.num').counterUp({
        delay: 10,
        time: 1000
    });
});

//ispis glider-a
var nizPohvala=["Radosavljević Law Office je advokatska kancelarija koja nas je tokom dugogodišnje saradnje uverila da odnos advokat-klijent ne mora da bude striktno formalan, naprotiv tokom svih ovih godina zajedničkog rada, oni su bili naša puna pravna podrška, spremni da odgovore svim postavljenim zadacima, nesagledavajući rešenje problema isključivo sa pravnog aspekta, već iz svih drugih pratećih aspekata.","Saradnja sa advokatskom kancelarijom Radosavljević omogućila je našoj kompaniji i meni da celokupnu investicionu i poslovnu aktivnost u Srbiji u pravom delu usmerim na najbolji mogući način, uz vrlo efikasan i profesionalan pristup, minimizujući troškove, uz kompletnu i veoma kvalitetnu pravnu podršku.","Advokastka kancelarija Radosavljević imaju komunikativne, pristupačne, staložene advokate koji ostavaljaju izuzetan dojam. Moj predmet je stručno, savesno i detaljno završen. Saradnju ćemo zasigurno nastaviti i ubuduće.","Zbog nezakonitog otkaza sam morala tužiti poslodavce. Posle više godine sudskog postupka, otkaz je poništen i vraćena sam na posao. Veliku zahvalnost dugujem advokatskoj kancelariji Radosavljević.","Profesionalnost i ljudskost na prvom mestu... Znati svoj posao, biti tačan i jadan i odgovoran su prave vrednosti svake profesije. U kancelariji Radosavljević dobio sam sve to, a za mene nešto nemerljivo, a to je razumevanje i ljudskost u svakom kontaktu. Imati empatiju za čoveka, a uz to mu pomoći u svakoj situaciji - to su za mene neprocenjive vrednosti. Stručnjaci i ljudi za sve.","Najiskrenije preporučujem advokatsku kancelariju Radosavljević. Pomogli su mi pri kupovini nekretnina, a mojoj porodici u sudskom procesu u vezi ostavine. Tražila sam iskusnog, pouzdanog i efikasnog advokata u koga ću imati poverenja. Sve to, a i mnogo više od toga, našla sam baš kod njih. Posvećeni, strpljivi i puni razumevanja. Sve probleme, kojih je bilo prilično, rešavali su efikasno, precizno i veoma brzo shvatajući šta treba da urade i kakav savet da pruže."];
var nizKlijenata=["MediGroup","Dimitar Angelov-Company Kaolin","Nikola Mikić","Marina Marić","Janko Vinkić","Jovana Radisavljević"];
let html=" ";
for(let i=0;i<nizPohvala.length;i++){
    html +=`<figure>
                <blockquote>"${nizPohvala[i]}"</blockquote>
                <figcaption>${nizKlijenata[i]}</figcaption>
            </figure>`
}
document.querySelector(".glider").innerHTML=html;

//funkcija glider
new Glider(document.querySelector(".glider"),{
    slidesToShow:1,
    slidesToScroll:1,
    scrollLock:true,
    dots:"#dots"
    
});
