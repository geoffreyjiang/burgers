const eatBtn = document.querySelector('#eatBtn')

if(eatBtn) {
    if(eatBtn){
        eatBtn.forEach((button) => {
            button.addEvenetListener('click', (e) => {
                e.preventDefault();
                const id = e.target.getAttrivute("burgId");
                const devBurg = {devoured: true},
            })
        })
    }
}