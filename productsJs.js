const gallerys = document.querySelectorAll('.products-gallery');
const leftBtn = document.querySelectorAll('.left');
const rightBtn = document.querySelectorAll('.right');

let data = [
[['./alpha-photos\P.07 Earthing & Lightening Protection\pictures\Air terminal, multipoints, lightning protection Kingsmill supplier in riyadh - Saudi arabia.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
],[['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
],[['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
],[['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
['./alpha-photos/DistributionEquipmentPowerProtection/pictures/5.jpg','description some random text for testing'],
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

rightBtn.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        console.log()
    })
})

// const galleryBuilder = (product,el) => {
//     let card = document.createElement('div');
//     card.className = 'card';
//     card.style.backgroundImage = `url(${product[0]}`;
//     let name = document.createElement('h3');
//     name.className = 'name';
//     name.innerHTML = '<h1>hello world</h1>';
//     let description = document.createElement('p');
//     description.className = 'description';
//     description.innerText = product[2];
//     card.append(name,description);
//     el.append(card);
//     return el;
// } 

// let cards = gallerys.forEach(el => {
//     data.forEach(product => {
//         galleryBuilder(product,el);
//         return el
//     })
//     return el;
// })