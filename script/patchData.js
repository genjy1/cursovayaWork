export const patchData = (table, body, id) => {
    fetch(`https://twisty-efficacious-archeology.glitch.me/${table}/${id}`,{
        method:'PATCH',
        body:JSON.stringify(body),
        headers:{
            "Content-Type": "application/json",
        },
    }).then((response) => {if (response.ok) {
        location.reload()
    }})
}