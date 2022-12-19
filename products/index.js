const galery = document.querySelector('#top-galary-row');

const data = [
    [
        'https://images.unsplash.com/photo-1595428645453-309f41e373e0?ixlib=rb-4.0.3&ix' +
                'id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=8' +
                '0',
        'lightning', [{
            section: 'lightning1',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'lightning2',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'lightning3',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'lightning4',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        }]
    ],
    [
        'https://images.unsplash.com/photo-1595428645453-309f41e373e0?ixlib=rb-4.0.3&ix' +
                'id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=8' +
                '0',
        '0',[{
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        }]
    ],
    [
        'https://images.unsplash.com/photo-1595428645453-309f41e373e0?ixlib=rb-4.0.3&ix' +
                'id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=8' +
                '0',
        '0', [{
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        }]
    ],
    [
        'https://images.unsplash.com/photo-1595428645453-309f41e373e0?ixlib=rb-4.0.3&ix' +
                'id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=8' +
                '0',
        '0',[{
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        }]
    ],
    [
        'https://images.unsplash.com/photo-1595428645453-309f41e373e0?ixlib=rb-4.0.3&ix' +
                'id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=8' +
                '0',
        '0', [{
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        }]
    ],
    [
        'https://images.unsplash.com/photo-1595428645453-309f41e373e0?ixlib=rb-4.0.3&ix' +
                'id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=8' +
                '0',
        '0', [{
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        }]
    ],
    [
        'https://images.unsplash.com/photo-1595428645453-309f41e373e0?ixlib=rb-4.0.3&ix' +
                'id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=8' +
                '0',
        '0', [{
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        }]
    ],
    [
        'https://images.unsplash.com/photo-1595428645453-309f41e373e0?ixlib=rb-4.0.3&ix' +
                'id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=8' +
                '0',
        '0', [{
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        },
        {
            section: 'test',
            url: '#',
            imgPath: 'https://www.optima-engineering.com/files/photos/hrr_hs4100_blocker_mid.jpg'
        }]
    ]
];

// create the product's section cards with a link 
const productCards = data.map(element => {
    let link = document.createElement('a');
    link.className = 'product-section-liink';
    link.href = '#'; //element[1];

    let card = document.createElement('img');
    card.className = `product-section ${element[1]}`;
    card.src = element[0];

    link.append(card);

    return link;

});


//create the branshes of the product's sections including title ,nackground and a link to each bransh
const productBranshes = data.map(element => {
    let data = [];
   // console.log(element[2])
    element[2].forEach(el => {
        let bransh = document.createElement('div');
        bransh.className = `bransh ${element[1]}`;
        bransh.style.backgroundImage = `url(${el.imgPath})`;

        let title = document.createElement('h2');
        title.className = 'bransh-title';
        title.innerText = el.section;

        let link = document.createElement('a');
        link.className = 'breansh-link';
        link.href = el.url;

        bransh.append(title);
        link.append(bransh);

        

        data.push(link);
    })
    
    return data;
});

// add cards to the page
galery.append(...productCards)

productBranshes.forEach(el => {
    el.forEach(bransh => {
        galery.append(bransh)
    })
})

// list of elements that should move to make room for the hovered on section
let elementWithMoveClass = [];

const addClassNames = (current, cards) => {
    let newCards = cards.map(el => {
        if (current !== el.firstChild) {
            
            el
                .firstChild
                .classList
                .add('move')
            return el.firstChild
        }
        return el.firstChild

    })
    return newCards;

};

// add event to each section that make it's seblings move 
//while the section go to center 
productCards.forEach(el => {
    el.addEventListener('click', (event) => {
        let current = event.target;
        let newData = addClassNames(current, productCards)
        elementWithMoveClass.splice(0)
        elementWithMoveClass = [...newData];
        moveElements(current,newData)
        //console.log(newData)
    });
});




// sections to move left
const moveLeft = (element) => {
    element.style.position = 'relative';
    element.parentNode.style.position = 'relative';
    element.parentNode.style.left = '1500px';
    $(element).animate({
        left: 1500,
        duration: 200
    })
}

//sections to move rigth
const moveRight = (element) => {
    element.style.position = 'relative';
    element.parentNode.style.position = 'relative';
    element.parentNode.style.right = '1500px';
    $(element).animate({
        right: 1500,
        duration: 200
    })
}

//main section to move to the center
const moveCenter = (element) => {
    element.parentNode.style.position = 'absolute';
    // element.parentNode.style.position = 'absolute';
    // element.parentNode.style.width = '35vh';
    // element.parentNode.style.height = '45vh',
    // element.parentNode.style.top = '25vh',
    // element.parentNode.style.left = '30vw',
    // element.parentNode.style.zIndex = '99';
    $(element.parentNode).animate({
        width: '35vh',
        height: '45vh',
        top: '25vh',
        left: '30vw',
        duration: 500
    })
    console.log(element)
}

// specify which sections should move in what direction  
const moveElements = (current,list) => {
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if (current != element) {
            i % 2 > 0 ? moveLeft(element) : moveRight(element);
        }
        else{
            //console.log(element)
            moveCenter(element)
        }
    }
}

//  console.log(elementWithMoveClass)