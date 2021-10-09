
const res=[
    "./Assets/photo-1521337581100-8ca9a73a5f79.jpg"
    ,
    "./Assets/photo-1596334861142-48f19282fcba.jpg"
    ,
    "./Assets/photo-1604513843835-cda9439cca7c.jpg"
    ,
    "./Assets/photo-1618176580189-c299faaa585c.jpg"
    ,
    "./Assets/photo-1618455495538-78e47b742be4.jpg"
    ,
    "./Assets/photo-1619378778949-2af10f8c8c20.jpg"
]
const names=["Mark Dimitri" , "Henry Styles" , "William Debowski" , "Vladimir Borisovoch", "Peter Mitrichiev","Adam Jerricho","Madeline Wuntch"]

async function getPhotos (){
 
    const cards=document.querySelector(".cards");
    
    console.log(res);
    for(let i=0;i<6;i++)
    {
        const div=document.createElement('div');
        div.classList.add('card-element');
        div.style.background=`url(${res[i]})
        center center no-repeat`
        div.innerHTML=` <div class="description">
        <div class="song">${names[i]}</div>
        <div class="artist">Artist</div> 
        </div>`
        cards.appendChild(div)
    }
    


}
getPhotos();