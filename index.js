// Add your code here
// fetch("http://localhost:3000/dogs", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         dogName: "Amelia",
//         dogBreed: "miniature pin"
//     })
// }
// );

function submitData (name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
            })
        })

    .then( function (response) {
        return response.json()
        
    })
    .then(function(object) {
        document.body.innerHTML = object["id"]
        console.log(object["id"])
      })
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
}


