function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({ name: name, email: email }),
    })
        .then((response) => response.json())
        .then((data) => {
            const body = document.querySelector('body');
            body.innerHTML = data.id;
        })
        .catch(function (error) {
            const body = document.querySelector('body');
            body.innerHTML = error;
        });
}

submitData('Steve', 'steve@steve.com');
submitData('Sam', 'sam@sam.com');
