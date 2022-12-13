const gallerys = document.querySelectorAll('.products-gallery');
const leftBtn = document.querySelectorAll('.left');
const rightBtn = document.querySelectorAll('.right');

let data = [
[['./alpha-photos\P.07 Earthing & Lightening Protection\pictures\Air terminal, multipoints, lightning protection Kingsmill supplier in riyadh - Saudi arabia.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['.\alpha-photos\DistributionEquipmentPowerProtection\Logo brand\ABBElectric supplier in riyadh Saudi Arabia Supplier.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
],[['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
],[['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','hi','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
],[['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','bye','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
],[['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
],[['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
],[['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
],[['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','Name','description some random text for testing'],
],];

let newData = [];

const cardMaker = () => {
    data.forEach(arr => {
        let s = [];
        arr.forEach(el => {
        s.push(
            `<div class="card" style="background-image: url(${el[0]});">
            <h3 class="name">${el[1]}</h3>
            <p class="description">${el[2]}</p>
        </div>`
        )
    })
    newData.push(s);
    })
    
}
cardMaker();
//console.log(newData)

const galleryBuilder = () => {

    for (let i = 0; i < gallerys.length; i++) {
        for (let x = 0; x < newData[i].length; x++) {
            gallerys[i].innerHTML = gallerys[i].innerHTML + newData[i][x];
            
        }
        
    }
}
galleryBuilder()




gallerys.forEach(el => {
    el.addEventListener('click',(e)=>{
        // let id = e.target.parentNode.id;
        // console.log(e.target.classList[0]);
        bigImage(e)

    })
})
  


// big gallery section

const bigGalleryImg = document.querySelector('#big-img');
const bigName = document.querySelector('#big-name');
const bigText = document.querySelector('#big-text');

const bigImage = (e) => {
    if(e.target.classList[0] == 'card'){
        let url = e.target.style.backgroundImage.split('');
    url.splice(0,6);
    url.splice(url.length - 2)
    bigGalleryImg.src = url.join('');

    let name = e.target.firstElementChild.innerHTML;
    bigName.innerHTML = name;

    let text = e.target.children[1].innerHTML;
    bigText.innerHTML = text;
   console.log(e.target.parentNode.id -1)
    }
    
}
    
console.log(rightBtn[0])
