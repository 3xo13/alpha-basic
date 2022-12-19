const rows = document.querySelectorAll('.row');
const productSections = document.querySelectorAll('.product-section');
const products = document.querySelectorAll('.product');


rows.forEach(el => {
    el.addEventListener('click', (event) => {
        let current = event.target;
        let parent =  current.parentNode;
        let className = current.classList[1];
        console.log(parent.children[1]);
        current.style.marginLeft = '50px';
        parent.style.width = '100vw';
        parent.style.height = '80vh';
        parent.style.alignItems = 'flex-start';
        parent.style.flexDirection = 'column';
        parent.children[1].style.display = 'flex';
        let currentProduct = document.querySelectorAll(`.${className}`);
        
       $(`.${className}`).show(1000);
       currentProduct.forEach(el => {
            el.style.display = 'flex';
        })
    })
})



//console.log($)