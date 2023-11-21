'use strict'

export const getData = async(table) =>{

    const entity = fetch(`https://twisty-efficacious-archeology.glitch.me/${table}`);
    const entityData = await entity.then(response => response.json());

    return entityData
}