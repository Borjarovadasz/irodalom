const tomb = [
    {
        Szerzo_nev : "Balassi Bálint",
        Korszak : "reformáció",
        Szerelem1 : "Losonczy Anna",
        Szerelem2 : "Dobó Krisztina",

    },
    {
        Szerzo_nev : "Csokonai Vitéz Mihály",
        Korszak : "felvilágosodás",
        Szerelem1    : "Vajda Juliána",

        
    },
    {
        Szerzo_nev : "Petőfi Sándor",
        Korszak : "magyar romantika",
        Szerelem1 : "Mednyánszky Berta",
        Szerelem2 : "Szendrey Júlia",

    },
    {
        Szerzo_nev : "Ady Endre",
        Korszak: "20. század",
        Szerelem1 : "Léda",
        Szerelem2 : "Csinszka"
    }
]

const table = document.querySelector('table')
const thead = document.createElement('thead')
const tr = document.createElement('tr')
const td = document.createElement('td')
const body = document.createElement('body')


function generateheader() {

    
    const headerRow = document.createElement('tr');
    const thead1 = document.createElement('th')
    const thead2 = document.createElement('th')
    const thead3 = document.createElement('th')
    
    thead1.innerHTML = "Szerző neve"
    thead2.innerHTML = "Korszak"
    thead3.innerHTML = "Szerelmek"
    thead3.colSpan = "2"

    headerRow.append(thead1, thead2, thead3);
    table.appendChild(headerRow)
}


function submit1() {
    const szerzonevE = document.getElementById("kolto_nev").value
    const korszakE = document.getElementById("korszak").value
    const szerelemE = document.getElementById("szerelem1").value
    const Szerelem2E = document.getElementById("szerelem2").value
    const van_e = document.getElementById("masodik").checked
    
    if(!korszakE & !szerzonevE)
    {
        
    }
   

       
    
        document.getElementById("kolto_nev").value = "";
        document.getElementById("korszak").value = "";
        document.getElementById("szerelem1").value = "";
        document.getElementById("szerelem2").value = "";
    
        
    }
    
    


function tablakiir() {
    for (let i = 0; i < tomb.length; i++)
    {
        const sor = document.createElement('tr')
        
        const szerzonev = document.createElement('td')  
        const korszak = document.createElement('td')
        const szerelem = document.createElement('td')
        const Szerelem2 = document.createElement('td')
        if (i === 1) {  
            szerzonev.innerHTML = tomb[i].Szerzo_nev;
            korszak.innerHTML = tomb[i].Korszak;
            szerelem.innerHTML = tomb[i].Szerelem1;
            szerelem.colSpan = 2;  
            

            sor.append(szerzonev, korszak, szerelem);

        } else {
            szerzonev.innerHTML = tomb[i].Szerzo_nev;
            korszak.innerHTML = tomb[i].Korszak;
            szerelem.innerHTML = tomb[i].Szerelem1;
            Szerelem2.innerHTML = tomb[i].Szerelem2;
    
            sor.append(szerzonev,korszak,szerelem, Szerelem2)
           
        }
        
        table.appendChild(sor)
       
    }
}

function validate() {
    const szerzonevE = document.getElementById("kolto_nev").value
    const korszakE = document.getElementById("korszak").value

    if(!szerzonevE & !korszakE)
    {
        alert("Ki kell tölteni")
    }
}
