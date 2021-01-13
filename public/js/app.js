const eatBtn = document.querySelector('#eatBtn')

if(eatBtn) {
    if(eatBtn){
        eatBtn.forEach((button) => {
            button.addEvenetListener('click', (e) => {
                e.preventDefault();
                const id = e.target.getAttrivute("burgId");
                const devBurg = {devoured: true};
            
                fetch(`/api/burgers/${id}`, {
                    method: "PUT",
                    headers: {
                        Accept: 'application.json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(devBurg),
                })
                .then((res) => {
                    if (res.ok) {
                        location.reload('/')
                    } else {
                        alert("Could Not Eat Burger!")
                    }
                })
            })
        })
    }
};