const box_memoryGame_container = document.getElementById("box_memoryGame_container");

//Las keys "nameImage" y "alt" se colocaron para funciones posteriores.
const images = [
    {
        nameImage: "bear",
        src: "../assets/images/bear.svg",
        alt: "imagen de oso"
    },
    {
        nameImage: "camel",
        src: "../assets/images/camel.svg",
        alt: "imagen de camello"
    },
    {
        nameImage: "dolphin",
        src: "../assets/images/dolphin.svg",
        alt: "imagen de delfin"
    },
    {
        nameImage: "elephant",
        src: "../assets/images/elephant.svg",
        alt: "imagen de elefante"
    },
    {
        nameImage: "gorilla",
        src: "../assets/images/gorilla.svg",
        alt: "imagen de gorila"
    },
    {
        nameImage: "hippopotamus",
        src: "../assets/images/hippopotamus.svg",
        alt: "imagen de hipopotamo"
    },
    {
        nameImage: "kangaroo",
        src: "../assets/images/kangaroo.svg",
        alt: "imagen de canguro"
    },
    {
        nameImage: "koala",
        src: "../assets/images/koala.svg",
        alt: "imagen de koala"
    },
    {
        nameImage: "lion",
        src: "../assets/images/lion.svg",
        alt: "imagen de leon"
    },
    {
        nameImage: "rabbit",
        src: "../assets/images/rabbit.svg",
        alt: "imagen de conejo"
    },
    {
        nameImage: "rhinoceros",
        src: "../assets/images/rhinoceros.svg",
        alt: "imagen de rinoceronte"
    },
    {
        nameImage: "zebra",
        src: "../assets/images/zebra.svg",
        alt: "imagen de zebra"
    },
    {
        nameImage: "bear",
        src: "../assets/images/bear.svg",
        alt: "imagen de oso"
    },
    {
        nameImage: "camel",
        src: "../assets/images/camel.svg",
        alt: "imagen de camello"
    },
    {
        nameImage: "dolphin",
        src: "../assets/images/dolphin.svg",
        alt: "imagen de delfin"
    },
    {
        nameImage: "elephant",
        src: "../assets/images/elephant.svg",
        alt: "imagen de elefante"
    },
    {
        nameImage: "gorilla",
        src: "../assets/images/gorilla.svg",
        alt: "imagen de gorila"
    },
    {
        nameImage: "hippopotamus",
        src: "../assets/images/hippopotamus.svg",
        alt: "imagen de hipopotamo"
    },
    {
        nameImage: "kangaroo",
        src: "../assets/images/kangaroo.svg",
        alt: "imagen de canguro"
    },
    {
        nameImage: "koala",
        src: "../assets/images/koala.svg",
        alt: "imagen de koala"
    },
    {
        nameImage: "lion",
        src: "../assets/images/lion.svg",
        alt: "imagen de leon"
    },
    {
        nameImage: "rabbit",
        src: "../assets/images/rabbit.svg",
        alt: "imagen de conejo"
    },
    {
        nameImage: "rhinoceros",
        src: "../assets/images/rhinoceros.svg",
        alt: "imagen de rinoceronte"
    },
    {
        nameImage: "zebra",
        src: "../assets/images/zebra.svg",
        alt: "imagen de zebra"
    },
    {
        nameImage: "bear",
        src: "../assets/images/bear.svg",
        alt: "imagen de oso"
    },
    {
        nameImage: "camel",
        src: "../assets/images/camel.svg",
        alt: "imagen de camello"
    },
    
    {
        nameImage: "dolphin",
        src: "../assets/images/dolphin.svg",
        alt: "imagen de delfin"
    },
    
    {
        nameImage: "elephant",
        src: "../assets/images/elephant.svg",
        alt: "imagen de elefante"
    },
    
    {
        nameImage: "gorilla",
        src: "../assets/images/gorilla.svg",
        alt: "imagen de gorila"
    },
    
    {
        nameImage: "hippopotamus",
        src: "../assets/images/hippopotamus.svg",
        alt: "imagen de hipopotamo"
    },
    
    {
        nameImage: "kangaroo",
        src: "../assets/images/kangaroo.svg",
        alt: "imagen de canguro"
    },
    
    {
        nameImage: "koala",
        src: "../assets/images/koala.svg",
        alt: "imagen de koala"
    },
    
    {
        nameImage: "lion",
        src: "../assets/images/lion.svg",
        alt: "imagen de leon"
    },
    
    {
        nameImage: "rabbit",
        src: "../assets/images/rabbit.svg",
        alt: "imagen de conejo"
    },
    
    {
        nameImage: "rhinoceros",
        src: "../assets/images/rhinoceros.svg",
        alt: "imagen de rinoceronte"
    },
    {
        nameImage: "zebra",
        src: "../assets/images/zebra.svg",
        alt: "imagen de zebra"
    },

]

//Variable que contendrá imágenes ordenadas al azar
const messyImages = [];

//Ciclo que toma un objeto al azar del array images, lo agrega al arreglo al array messyImages, y los elimina de images
while (images.length > 0) {
    let position = Math.floor(Math.random() * (images.length));
    messyImages.push(images[position]);
    images.splice(position, 1);
    
}

//Creando elementos div "front", cara que contiene la imagen
const div1_f = document.createElement("div"); const div2_f = document.createElement("div"); const div3_f = document.createElement("div");
const div4_f = document.createElement("div"); const div5_f = document.createElement("div"); const div6_f = document.createElement("div");
const div7_f = document.createElement("div"); const div8_f = document.createElement("div"); const div9_f = document.createElement("div");
const div10_f = document.createElement("div"); const div11_f = document.createElement("div"); const div12_f = document.createElement("div");
const div13_f = document.createElement("div"); const div14_f = document.createElement("div"); const div15_f = document.createElement("div");
const div16_f = document.createElement("div"); const div17_f = document.createElement("div"); const div18_f = document.createElement("div");
const div19_f = document.createElement("div"); const div20_f = document.createElement("div"); const div21_f = document.createElement("div");
const div22_f = document.createElement("div"); const div23_f = document.createElement("div"); const div24_f = document.createElement("div");
const div25_f = document.createElement("div"); const div26_f = document.createElement("div"); const div27_f = document.createElement("div");
const div28_f = document.createElement("div"); const div29_f = document.createElement("div"); const div30_f = document.createElement("div");
const div31_f = document.createElement("div"); const div32_f = document.createElement("div"); const div33_f = document.createElement("div");
const div34_f = document.createElement("div"); const div35_f = document.createElement("div"); const div36_f = document.createElement("div");

//Creando los elementos div "back", cara postrior
const div1_b = document.createElement("div"); const div2_b = document.createElement("div"); const div3_b = document.createElement("div");
const div4_b = document.createElement("div"); const div5_b = document.createElement("div"); const div6_b = document.createElement("div");
const div7_b = document.createElement("div"); const div8_b = document.createElement("div"); const div9_b = document.createElement("div");
const div10_b = document.createElement("div"); const div11_b = document.createElement("div"); const div12_b = document.createElement("div");
const div13_b = document.createElement("div"); const div14_b = document.createElement("div"); const div15_b = document.createElement("div");
const div16_b = document.createElement("div"); const div17_b = document.createElement("div"); const div18_b = document.createElement("div");
const div19_b = document.createElement("div"); const div20_b = document.createElement("div"); const div21_b = document.createElement("div");
const div22_b = document.createElement("div"); const div23_b = document.createElement("div"); const div24_b = document.createElement("div");
const div25_b = document.createElement("div"); const div26_b = document.createElement("div"); const div27_b = document.createElement("div");
const div28_b = document.createElement("div"); const div29_b = document.createElement("div"); const div30_b = document.createElement("div");
const div31_b = document.createElement("div"); const div32_b = document.createElement("div"); const div33_b = document.createElement("div");
const div34_b = document.createElement("div"); const div35_b = document.createElement("div"); const div36_b = document.createElement("div");

//Creando los elementos "p", para colocar los números en las tapas de las cajas
const p1 = document.createElement("p"); const p2 = document.createElement("p"); const p3 = document.createElement("p");
const p4 = document.createElement("p"); const p5 = document.createElement("p"); const p6 = document.createElement("p");
const p7 = document.createElement("p"); const p8 = document.createElement("p"); const p9 = document.createElement("p");
const p10 = document.createElement("p"); const p11 = document.createElement("p"); const p12 = document.createElement("p");
const p13 = document.createElement("p"); const p14 = document.createElement("p"); const p15 = document.createElement("p");
const p16 = document.createElement("p"); const p17 = document.createElement("p"); const p18 = document.createElement("p");
const p19 = document.createElement("p"); const p20 = document.createElement("p"); const p21 = document.createElement("p");
const p22 = document.createElement("p"); const p23 = document.createElement("p"); const p24 = document.createElement("p");
const p25 = document.createElement("p"); const p26 = document.createElement("p"); const p27 = document.createElement("p");
const p28 = document.createElement("p"); const p29 = document.createElement("p"); const p30 = document.createElement("p");
const p31 = document.createElement("p"); const p32 = document.createElement("p"); const p33 = document.createElement("p");
const p34 = document.createElement("p"); const p35 = document.createElement("p"); const p36 = document.createElement("p");

//Colocando los números en las etiquetas "p"
p1.innerHTML = "1"; p2.innerHTML = "2"; p3.innerHTML = "3"; p4.innerHTML = "4"; p5.innerHTML = "5", p6.innerHTML = "6";
p7.innerHTML = "7"; p8.innerHTML = "8"; p9.innerHTML = "9"; p10.innerHTML = "10"; p11.innerHTML = "11", p12.innerHTML = "12";
p13.innerHTML = "13"; p14.innerHTML = "14"; p15.innerHTML = "15"; p16.innerHTML = "16"; p17.innerHTML = "17", p18.innerHTML = "18";
p19.innerHTML = "19"; p20.innerHTML = "20"; p21.innerHTML = "21"; p22.innerHTML = "22"; p23.innerHTML = "23", p24.innerHTML = "24";
p25.innerHTML = "25"; p26.innerHTML = "26"; p27.innerHTML = "27"; p28.innerHTML = "28"; p29.innerHTML = "29", p30.innerHTML = "30";
p31.innerHTML = "31"; p32.innerHTML = "32"; p33.innerHTML = "33"; p34.innerHTML = "34"; p35.innerHTML = "35", p36.innerHTML = "36";

//Agreando las etiqetas p a las cajas de las tapas
div1_b.appendChild(p1); div2_b.appendChild(p2); div3_b.appendChild(p3); div4_b.appendChild(p4); div5_b.appendChild(p5);
div6_b.appendChild(p6); div7_b.appendChild(p7); div8_b.appendChild(p8); div9_b.appendChild(p9); div10_b.appendChild(p10);
div11_b.appendChild(p11); div12_b.appendChild(p12); div13_b.appendChild(p13); div14_b.appendChild(p14); div15_b.appendChild(p15);
div16_b.appendChild(p16); div17_b.appendChild(p17); div18_b.appendChild(p18); div19_b.appendChild(p19); div20_b.appendChild(p20);
div21_b.appendChild(p21); div22_b.appendChild(p22); div23_b.appendChild(p23); div24_b.appendChild(p24); div25_b.appendChild(p25);
div26_b.appendChild(p26); div27_b.appendChild(p27); div28_b.appendChild(p28); div29_b.appendChild(p29); div30_b.appendChild(p30);
div31_b.appendChild(p31); div32_b.appendChild(p32); div33_b.appendChild(p33); div34_b.appendChild(p34); div35_b.appendChild(p35);
div36_b.appendChild(p36);



//Agregandos id's a las cajas que contienen las imágenes
div1_f.setAttribute("id", "div1_f"); div2_f.setAttribute("id", "div2_f");
div3_f.setAttribute("id", "div3_f"); div4_f.setAttribute("id", "div4_f");
div5_f.setAttribute("id", "div5_f"); div6_f.setAttribute("id", "div6_f");
div7_f.setAttribute("id", "div7_f"); div8_f.setAttribute("id", "div8_f");
div9_f.setAttribute("id", "div9_f"); div10_f.setAttribute("id", "div10_f");
div11_f.setAttribute("id", "div11_f"); div12_f.setAttribute("id", "div12_f");
div13_f.setAttribute("id", "div13_f"); div14_f.setAttribute("id", "div14_f");
div15_f.setAttribute("id", "div15_f"); div16_f.setAttribute("id", "div16_f");
div17_f.setAttribute("id", "div17_f"); div18_f.setAttribute("id", "div18_f");
div19_f.setAttribute("id", "div19_f"); div20_f.setAttribute("id", "div20_f");
div21_f.setAttribute("id", "div21_f"); div22_f.setAttribute("id", "div22_f");
div23_f.setAttribute("id", "div23_f"); div24_f.setAttribute("id", "div24_f");
div25_f.setAttribute("id", "div25_f"); div26_f.setAttribute("id", "div26_f");
div27_f.setAttribute("id", "div27_f"); div28_f.setAttribute("id", "div28_f");
div29_f.setAttribute("id", "div29_f"); div30_f.setAttribute("id", "div30_f");
div31_f.setAttribute("id", "div31_f"); div32_f.setAttribute("id", "div32_f");
div33_f.setAttribute("id", "div33_f"); div34_f.setAttribute("id", "div34_f");
div35_f.setAttribute("id", "div35_f"); div36_f.setAttribute("id", "div36_f");


//Agregandos id's a las cajas tapa
div1_b.setAttribute("id", "div1_b"); div2_b.setAttribute("id", "div2_b"); div3_b.setAttribute("id", "div3_b"); 
div4_b.setAttribute("id", "div4_b"); div5_b.setAttribute("id", "div5_b"); div6_b.setAttribute("id", "div6_b");
div7_b.setAttribute("id", "div7_b"); div8_b.setAttribute("id", "div8_b"); div9_b.setAttribute("id", "div9_b"); 
div10_b.setAttribute("id", "div10_b"); div11_b.setAttribute("id", "div11_b"); div12_b.setAttribute("id", "div12_b");
div13_b.setAttribute("id", "div13_b"); div14_b.setAttribute("id", "div14_b"); div15_b.setAttribute("id", "div15_b"); 
div16_b.setAttribute("id", "div16_b"); div17_b.setAttribute("id", "div17_b"); div18_b.setAttribute("id", "div18_b");
div19_b.setAttribute("id", "div19_b"); div20_b.setAttribute("id", "div20_b"); div21_b.setAttribute("id", "div21_b"); 
div22_b.setAttribute("id", "div22_b"); div23_b.setAttribute("id", "div23_b"); div24_b.setAttribute("id", "div24_b");
div25_b.setAttribute("id", "div25_b"); div26_b.setAttribute("id", "div26_b"); div27_b.setAttribute("id", "div27_b"); 
div28_b.setAttribute("id", "div28_b"); div29_b.setAttribute("id", "div29_b"); div30_b.setAttribute("id", "div30_b");
div31_b.setAttribute("id", "div31_b"); div32_b.setAttribute("id", "div32_b"); div33_b.setAttribute("id", "div33_b"); 
div34_b.setAttribute("id", "div34_b"); div35_b.setAttribute("id", "div35_b"); div36_b.setAttribute("id", "div36_b");

//Agregando atributo class a las cajas que contienen las imágenes
div1_f.setAttribute("class", "front"); div2_f.setAttribute("class", "front"); div3_f.setAttribute("class", "front"); 
div4_f.setAttribute("class", "front"); div5_f.setAttribute("class", "front"); div6_f.setAttribute("class", "front");
div7_f.setAttribute("class", "front"); div8_f.setAttribute("class", "front"); div9_f.setAttribute("class", "front"); 
div10_f.setAttribute("class", "front"); div11_f.setAttribute("class", "front"); div12_f.setAttribute("class", "front");
div13_f.setAttribute("class", "front"); div14_f.setAttribute("class", "front"); div15_f.setAttribute("class", "front"); 
div16_f.setAttribute("class", "front"); div17_f.setAttribute("class", "front"); div18_f.setAttribute("class", "front");
div19_f.setAttribute("class", "front"); div20_f.setAttribute("class", "front"); div21_f.setAttribute("class", "front"); 
div22_f.setAttribute("class", "front"); div23_f.setAttribute("class", "front"); div24_f.setAttribute("class", "front");
div25_f.setAttribute("class", "front"); div26_f.setAttribute("class", "front"); div27_f.setAttribute("class", "front"); 
div28_f.setAttribute("class", "front"); div29_f.setAttribute("class", "front"); div30_f.setAttribute("class", "front");
div31_f.setAttribute("class", "front"); div32_f.setAttribute("class", "front"); div33_f.setAttribute("class", "front"); 
div34_f.setAttribute("class", "front"); div35_f.setAttribute("class", "front"); div36_f.setAttribute("class", "front");


//Agregando atributo class a las cajas tapa
div1_b.setAttribute("class", "back"); div2_b.setAttribute("class", "back"); div3_b.setAttribute("class", "back"); 
div4_b.setAttribute("class", "back"); div5_b.setAttribute("class", "back"); div6_b.setAttribute("class", "back");
div7_b.setAttribute("class", "back"); div8_b.setAttribute("class", "back"); div9_b.setAttribute("class", "back"); 
div10_b.setAttribute("class", "back"); div11_b.setAttribute("class", "back"); div12_b.setAttribute("class", "back");
div13_b.setAttribute("class", "back"); div14_b.setAttribute("class", "back"); div15_b.setAttribute("class", "back"); 
div16_b.setAttribute("class", "back"); div17_b.setAttribute("class", "back"); div18_b.setAttribute("class", "back");
div19_b.setAttribute("class", "back"); div20_b.setAttribute("class", "back"); div21_b.setAttribute("class", "back"); 
div22_b.setAttribute("class", "back"); div23_b.setAttribute("class", "back"); div24_b.setAttribute("class", "back");
div25_b.setAttribute("class", "back"); div26_b.setAttribute("class", "back"); div27_b.setAttribute("class", "back"); 
div28_b.setAttribute("class", "back"); div29_b.setAttribute("class", "back"); div30_b.setAttribute("class", "back");
div31_b.setAttribute("class", "back"); div32_b.setAttribute("class", "back"); div33_b.setAttribute("class", "back"); 
div34_b.setAttribute("class", "back"); div35_b.setAttribute("class", "back"); div36_b.setAttribute("class", "back");


//Creando elementos img
const img1 = document.createElement("img"); const img2 = document.createElement("img"); const img3 = document.createElement("img");
const img4 = document.createElement("img"); const img5 = document.createElement("img"); const img6 = document.createElement("img");
const img7 = document.createElement("img"); const img8 = document.createElement("img"); const img9 = document.createElement("img");
const img10 = document.createElement("img"); const img11 = document.createElement("img"); const img12 = document.createElement("img");
const img13 = document.createElement("img"); const img14 = document.createElement("img"); const img15 = document.createElement("img");
const img16 = document.createElement("img"); const img17 = document.createElement("img"); const img18 = document.createElement("img");
const img19 = document.createElement("img"); const img20 = document.createElement("img"); const img21 = document.createElement("img");
const img22 = document.createElement("img"); const img23 = document.createElement("img"); const img24 = document.createElement("img");
const img25 = document.createElement("img"); const img26 = document.createElement("img"); const img27 = document.createElement("img");
const img28 = document.createElement("img"); const img29 = document.createElement("img"); const img30 = document.createElement("img");
const img31 = document.createElement("img"); const img32 = document.createElement("img"); const img33 = document.createElement("img");
const img34 = document.createElement("img"); const img35 = document.createElement("img"); const img36 = document.createElement("img");

//Agregando las imágenes a los elementos img
img1.setAttribute("src", messyImages[0]['src']); img2.setAttribute("src", messyImages[1]['src']);
img3.setAttribute("src", messyImages[2]['src']); img4.setAttribute("src", messyImages[3]['src']);
img5.setAttribute("src", messyImages[4]['src']); img6.setAttribute("src", messyImages[5]['src']);
img7.setAttribute("src", messyImages[6]['src']); img8.setAttribute("src", messyImages[7]['src']);
img9.setAttribute("src", messyImages[8]['src']); img10.setAttribute("src", messyImages[9]['src']);
img11.setAttribute("src", messyImages[10]['src']); img12.setAttribute("src", messyImages[11]['src']);
img13.setAttribute("src", messyImages[12]['src']); img14.setAttribute("src", messyImages[13]['src']);
img15.setAttribute("src", messyImages[14]['src']); img16.setAttribute("src", messyImages[15]['src']);
img17.setAttribute("src", messyImages[16]['src']); img18.setAttribute("src", messyImages[17]['src']);
img19.setAttribute("src", messyImages[18]['src']); img20.setAttribute("src", messyImages[19]['src']);
img21.setAttribute("src", messyImages[20]['src']); img22.setAttribute("src", messyImages[21]['src']);
img23.setAttribute("src", messyImages[22]['src']); img24.setAttribute("src", messyImages[23]['src']);
img25.setAttribute("src", messyImages[24]['src']); img26.setAttribute("src", messyImages[25]['src']);
img27.setAttribute("src", messyImages[26]['src']); img28.setAttribute("src", messyImages[27]['src']);
img29.setAttribute("src", messyImages[28]['src']); img30.setAttribute("src", messyImages[29]['src']);
img31.setAttribute("src", messyImages[30]['src']); img32.setAttribute("src", messyImages[31]['src']);
img33.setAttribute("src", messyImages[32]['src']); img34.setAttribute("src", messyImages[33]['src']);
img35.setAttribute("src", messyImages[34]['src']); img36.setAttribute("src", messyImages[35]['src']);

//Agregando los elementos img a los elementos div
div1_f.appendChild(img1); div2_f.appendChild(img2); div3_f.appendChild(img3); div4_f.appendChild(img4); div5_f.appendChild(img5);
div6_f.appendChild(img6); div7_f.appendChild(img7); div8_f.appendChild(img8); div9_f.appendChild(img9); div10_f.appendChild(img10);
div11_f.appendChild(img11); div12_f.appendChild(img12); div13_f.appendChild(img13); div14_f.appendChild(img14); div15_f.appendChild(img15);
div16_f.appendChild(img16); div17_f.appendChild(img17); div18_f.appendChild(img18); div19_f.appendChild(img19); div20_f.appendChild(img20);
div21_f.appendChild(img21); div22_f.appendChild(img22); div23_f.appendChild(img23); div24_f.appendChild(img24); div25_f.appendChild(img25);
div26_f.appendChild(img26); div27_f.appendChild(img27); div28_f.appendChild(img28); div29_f.appendChild(img29); div30_f.appendChild(img30);
div31_f.appendChild(img31); div32_f.appendChild(img32); div33_f.appendChild(img33); div34_f.appendChild(img34); div35_f.appendChild(img35);
div36_f.appendChild(img36); 

//Agregando los div al container, debe ir intencalado cada _f con su _b, para que cuando se oculte la tapa se muestr el frente
//en el mismo lugar y viceversa
box_memoryGame_container.appendChild(div1_f); box_memoryGame_container.appendChild(div1_b); box_memoryGame_container.appendChild(div2_f); box_memoryGame_container.appendChild(div2_b);
box_memoryGame_container.appendChild(div3_f); box_memoryGame_container.appendChild(div3_b); box_memoryGame_container.appendChild(div4_f); box_memoryGame_container.appendChild(div4_b);
box_memoryGame_container.appendChild(div5_f); box_memoryGame_container.appendChild(div5_b); box_memoryGame_container.appendChild(div6_f); box_memoryGame_container.appendChild(div6_b); 
box_memoryGame_container.appendChild(div7_f); box_memoryGame_container.appendChild(div7_b); box_memoryGame_container.appendChild(div8_f); box_memoryGame_container.appendChild(div8_b);
box_memoryGame_container.appendChild(div9_f); box_memoryGame_container.appendChild(div9_b); box_memoryGame_container.appendChild(div10_f); box_memoryGame_container.appendChild(div10_b); 
box_memoryGame_container.appendChild(div11_f); box_memoryGame_container.appendChild(div11_b); box_memoryGame_container.appendChild(div12_f); box_memoryGame_container.appendChild(div12_b);
box_memoryGame_container.appendChild(div13_f); box_memoryGame_container.appendChild(div13_b); box_memoryGame_container.appendChild(div14_f); box_memoryGame_container.appendChild(div14_b); 
box_memoryGame_container.appendChild(div15_f); box_memoryGame_container.appendChild(div15_b); box_memoryGame_container.appendChild(div16_f); box_memoryGame_container.appendChild(div16_b);
box_memoryGame_container.appendChild(div17_f); box_memoryGame_container.appendChild(div17_b); box_memoryGame_container.appendChild(div18_f); box_memoryGame_container.appendChild(div18_b);
box_memoryGame_container.appendChild(div19_f); box_memoryGame_container.appendChild(div19_b); box_memoryGame_container.appendChild(div20_f); box_memoryGame_container.appendChild(div20_b);
box_memoryGame_container.appendChild(div21_f); box_memoryGame_container.appendChild(div21_b); box_memoryGame_container.appendChild(div22_f);  box_memoryGame_container.appendChild(div22_b); 
box_memoryGame_container.appendChild(div23_f); box_memoryGame_container.appendChild(div23_b); box_memoryGame_container.appendChild(div24_f); box_memoryGame_container.appendChild(div24_b);
box_memoryGame_container.appendChild(div25_f); box_memoryGame_container.appendChild(div25_b); box_memoryGame_container.appendChild(div26_f); box_memoryGame_container.appendChild(div26_b); 
box_memoryGame_container.appendChild(div27_f); box_memoryGame_container.appendChild(div27_b); box_memoryGame_container.appendChild(div28_f); box_memoryGame_container.appendChild(div28_b);
box_memoryGame_container.appendChild(div29_f); box_memoryGame_container.appendChild(div29_b); box_memoryGame_container.appendChild(div30_f); box_memoryGame_container.appendChild(div30_b); 
box_memoryGame_container.appendChild(div31_f); box_memoryGame_container.appendChild(div31_b); box_memoryGame_container.appendChild(div32_f); box_memoryGame_container.appendChild(div32_b);
box_memoryGame_container.appendChild(div33_f); box_memoryGame_container.appendChild(div33_b); box_memoryGame_container.appendChild(div34_f); box_memoryGame_container.appendChild(div34_b);
box_memoryGame_container.appendChild(div35_f); box_memoryGame_container.appendChild(div35_b); box_memoryGame_container.appendChild(div36_f); box_memoryGame_container.appendChild(div36_b);

   
   
   
   
   
  
   
   
  


const selected = [];//En este array se van guardando las tres selecciones que se hacen por cada intento
let counter = 0;//Este contador lleva la cuenta de las imágenes descubiertas para finalizar la partida
let attempts = 0;//Almacena el número de intentos, aumenta 1 en cada selección de imagen

document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;

function compare(img1, img2, img3, id1_f, id2_f, id3_f, id1_b, id2_b, id3_b){
    document.getElementById("box_memoryGame_container").style.pointerEvents = "none"; //Se bloquea el click para evitar que se seleccionen más de 3 elementos
    if (img1 == img2 && img2 == img3) {
        console.log("Son iguales");
        document.getElementById(id1_f).style.backgroundColor = "#48C9B0"
        document.getElementById(id2_f).style.backgroundColor = "#48C9B0"
        document.getElementById(id3_f).style.backgroundColor = "#48C9B0"

        counter += 3;//LLeva el conteo de la cantidad de imágenes descubiertas

        //Este condicional evalua cuando las últimas 3 imágenes son descubiertas para lanzar un modal de felicitaciones
        if(counter == 36){
            document.getElementById("congratulations").style.display = "flex";
        }

        document.getElementById("box_memoryGame_container").style.pointerEvents = "auto"; // Se desbloquea el click si las 3 imágenes son iguales
    }else{
        
        console.log("Son diferentes");

        function hide() {//Esta función culta las imágenes cuando no resultan iguales las tres selecciones
            document.getElementById(id1_f).style.display = "none";
            document.getElementById(id2_f).style.display = "none";
            document.getElementById(id3_f).style.display = "none";
            document.getElementById(id1_b).style.display = "flex";
            document.getElementById(id2_b).style.display = "flex";
            document.getElementById(id3_b).style.display = "flex";

            document.getElementById("box_memoryGame_container").style.pointerEvents = "auto";// Se desbloquea el click y después de ocultarse las imágenes
        }

        setTimeout(hide, 3000);//Se llama a la función que oculta las imágenes cuando no son iguales
    }
    selected.length = 0; //Se vacía el array selected
}



//Agregando los eventos click para el control de las cajas
div1_b.addEventListener("click", ()=> {
    div1_b.style.display = "none";
    div1_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img1.src;  
    obj.id_f = "div1_f";
    obj.id_b = "div1_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})


div2_b.addEventListener("click", ()=> {
    div2_b.style.display = "none";
    div2_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img2.src;  
    obj.id_f = "div2_f";
    obj.id_b = "div2_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero

        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div3_b.addEventListener("click", ()=> {
    div3_b.style.display = "none";
    div3_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img3.src;  
    obj.id_f = "div3_f";
    obj.id_b = "div3_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div4_b.addEventListener("click", ()=> {
    div4_b.style.display = "none";
    div4_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img4.src;  
    obj.id_f = "div4_f";
    obj.id_b = "div4_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div5_b.addEventListener("click", ()=> {
    div5_b.style.display = "none";
    div5_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img5.src;  
    obj.id_f = "div5_f";
    obj.id_b = "div5_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div6_b.addEventListener("click", ()=> {
    div6_b.style.display = "none";
    div6_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img6.src;  
    obj.id_f = "div6_f";
    obj.id_b = "div6_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div7_b.addEventListener("click", ()=> {
    div7_b.style.display = "none";
    div7_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img7.src;  
    obj.id_f = "div7_f";
    obj.id_b = "div7_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div8_b.addEventListener("click", ()=> {
    div8_b.style.display = "none";
    div8_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img8.src;  
    obj.id_f = "div8_f";
    obj.id_b = "div8_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div9_b.addEventListener("click", ()=> {
    div9_b.style.display = "none";
    div9_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img9.src;  
    obj.id_f = "div9_f";
    obj.id_b = "div9_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div10_b.addEventListener("click", ()=> {
    div10_b.style.display = "none";
    div10_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img10.src;  
    obj.id_f = "div10_f";
    obj.id_b = "div10_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div11_b.addEventListener("click", ()=> {
    div11_b.style.display = "none";
    div11_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img11.src;  
    obj.id_f = "div11_f";
    obj.id_b = "div11_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div12_b.addEventListener("click", ()=> {
    div12_b.style.display = "none";
    div12_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img12.src;  
    obj.id_f = "div12_f";
    obj.id_b = "div12_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div13_b.addEventListener("click", ()=> {
    div13_b.style.display = "none";
    div13_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img13.src;  
    obj.id_f = "div13_f";
    obj.id_b = "div13_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div14_b.addEventListener("click", ()=> {
    div14_b.style.display = "none";
    div14_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img14.src;  
    obj.id_f = "div14_f";
    obj.id_b = "div14_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div15_b.addEventListener("click", ()=> {
    div15_b.style.display = "none";
    div15_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img15.src;  
    obj.id_f = "div15_f";
    obj.id_b = "div15_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div16_b.addEventListener("click", ()=> {
    div16_b.style.display = "none";
    div16_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img16.src;  
    obj.id_f = "div16_f";
    obj.id_b = "div16_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div17_b.addEventListener("click", ()=> {
    div17_b.style.display = "none";
    div17_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img17.src;  
    obj.id_f = "div17_f";
    obj.id_b = "div17_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div18_b.addEventListener("click", ()=> {
    div18_b.style.display = "none";
    div18_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img18.src;  
    obj.id_f = "div18_f";
    obj.id_b = "div18_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div19_b.addEventListener("click", ()=> {
    div19_b.style.display = "none";
    div19_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img19.src;  
    obj.id_f = "div19_f";
    obj.id_b = "div19_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div20_b.addEventListener("click", ()=> {
    div20_b.style.display = "none";
    div20_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img20.src;  
    obj.id_f = "div20_f";
    obj.id_b = "div20_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div21_b.addEventListener("click", ()=> {
    div21_b.style.display = "none";
    div21_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img21.src;  
    obj.id_f = "div21_f";
    obj.id_b = "div21_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div22_b.addEventListener("click", ()=> {
    div22_b.style.display = "none";
    div22_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img22.src;  
    obj.id_f = "div22_f";
    obj.id_b = "div22_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div23_b.addEventListener("click", ()=> {
    div23_b.style.display = "none";
    div23_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img23.src;  
    obj.id_f = "div23_f";
    obj.id_b = "div23_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div24_b.addEventListener("click", ()=> {
    div24_b.style.display = "none";
    div24_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img24.src;  
    obj.id_f = "div24_f";
    obj.id_b = "div24_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div25_b.addEventListener("click", ()=> {
    div25_b.style.display = "none";
    div25_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img25.src;  
    obj.id_f = "div25_f";
    obj.id_b = "div25_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div26_b.addEventListener("click", ()=> {
    div26_b.style.display = "none";
    div26_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img26.src;  
    obj.id_f = "div26_f";
    obj.id_b = "div26_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div27_b.addEventListener("click", ()=> {
    div27_b.style.display = "none";
    div27_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img27.src;  
    obj.id_f = "div27_f";
    obj.id_b = "div27_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div28_b.addEventListener("click", ()=> {
    div28_b.style.display = "none";
    div28_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img28.src;  
    obj.id_f = "div28_f";
    obj.id_b = "div28_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div29_b.addEventListener("click", ()=> {
    div29_b.style.display = "none";
    div29_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img29.src;  
    obj.id_f = "div29_f";
    obj.id_b = "div29_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div30_b.addEventListener("click", ()=> {
    div30_b.style.display = "none";
    div30_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img30.src;  
    obj.id_f = "div30_f";
    obj.id_b = "div30_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div31_b.addEventListener("click", ()=> {
    div31_b.style.display = "none";
    div31_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img31.src;  
    obj.id_f = "div31_f";
    obj.id_b = "div31_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div32_b.addEventListener("click", ()=> {
    div32_b.style.display = "none";
    div32_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img32.src;  
    obj.id_f = "div32_f";
    obj.id_b = "div32_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div33_b.addEventListener("click", ()=> {
    div33_b.style.display = "none";
    div33_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img33.src;  
    obj.id_f = "div33_f";
    obj.id_b = "div33_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div34_b.addEventListener("click", ()=> {
    div34_b.style.display = "none";
    div34_f.style.display = "flex";
    
    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img34.src;  
    obj.id_f = "div34_f";
    obj.id_b = "div34_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div35_b.addEventListener("click", ()=> {
    div35_b.style.display = "none";
    div35_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img35.src;  
    obj.id_f = "div35_f";
    obj.id_b = "div35_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
})

div36_b.addEventListener("click", ()=> {
    div36_b.style.display = "none";
    div36_f.style.display = "flex";

    const obj = {src: "", id_f: "", id_b: ""};
    obj.src = img36.src;  
    obj.id_f = "div36_f";
    obj.id_b = "div36_b"

    selected.push(obj); 
 
    if (selected.length == 3) {
        attempts++; //Modifica la cuenta de los intentos
        document.getElementById("attempts").innerHTML = `Intentos: ${attempts}`;//Actualiza el valor de los intentos en el tablero
        
        compare(selected[0]['src'], selected[1]['src'], selected[2]['src'], 
                selected[0]['id_f'], selected[1]['id_f'], selected[2]['id_f'],
                selected[0]['id_b'], selected[1]['id_b'], selected[2]['id_b']);
    }
});




//Eventos click para el control de los botones******************************************

//Al terminar una partida, presionando el botón de "nueva partida", se recarga la página 
document.getElementById("newGame").addEventListener("click", ()=> {
    location.reload();
});

//Se muestra el modal de las instrucciones y se deshabilita el click en el tablero
document.getElementById("help_container").addEventListener("click", ()=> {
    document.getElementById("box_memoryGame_container").style.pointerEvents = "none";
    document.getElementById("instructions_memoryGame").style.display = "block";
})

//Se cierra el modal de las instrucciones y se habilita el click en el tablero
    document.getElementById("close_button").addEventListener("click", ()=> {
        document.getElementById("box_memoryGame_container").style.pointerEvents = "auto";
        document.getElementById("instructions_memoryGame").style.display = "none";
});





//Función que controla el cronómetro/

function chronometer(){
    let min = 0;
    let sec = 0;

    let interval = setInterval(()=>{
        sec++;
        if (sec == 60) {//No se contempla que la partida dure más de una hora
           min++;
           sec = 0;
        }
        document.getElementById("minutes").innerHTML = `Min: ${min}`;
        document.getElementById("seconds").innerHTML =  `Seg: ${sec}`;

        if (counter == 36) {
            clearInterval(interval);
        }
    },1000);
}


chronometer();