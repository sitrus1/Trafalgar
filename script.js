let elAdaptingBtn = document.querySelector('.adapting-button')
let bar1 = elAdaptingBtn.querySelector('.bars1')
let bar2 = elAdaptingBtn.querySelector('.bars2')
let bar3 = elAdaptingBtn.querySelector('.bars3')

let elAdaptingWrp = document.querySelector('.adapting-wrapper')

elAdaptingBtn.addEventListener('click', function(){
    elAdaptingBtn.classList.toggle('adapting-button-fixed')

    bar1.classList.toggle('bar1')
    bar2.classList.toggle('bar2')
    bar3.classList.toggle('bar3')

    elAdaptingWrp.classList.toggle('block')
})