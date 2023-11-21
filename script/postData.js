export const postData = (table, body) => {
    fetch(`https://twisty-efficacious-archeology.glitch.me/${table}`,{
        method:'POST',
        body:JSON.stringify(body),
        headers:{
            "Content-Type": "application/json",
        },
    }).then((response) => {if (response.ok) {
        location.reload()
    }})
}