const activite = document.getElementById("aktivite");
const btn = document.getElementById("buton");
const img = document.getElementById("dog");




async function fetchActivity() {

    
    try {

        const cevap = await fetch('https://dog.ceo/api/breeds/image/random')
        const veri = await cevap.json();

        if (!veri.message) {
            return;
        }

        img.src = veri.message;

        const response = await fetch('https://www.boredapi.com/api/activity');

        const data = await response.json();

        activite.innerText = data.activity;

        if (!data.link) {
            btn.style.display = "none";
        } 

        else 
        {
           btn.style.display = "inline-block";
           let btnHref = data.link;
           btn.setAttribute("href", btnHref);
        }


    } 
    
    catch (error)
    {
        console.error('Hata:', error);
    }
}

fetchActivity()
