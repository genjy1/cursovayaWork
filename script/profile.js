'use strict'
import { patchData } from './patchData.js'


const checkboxes = document.querySelectorAll('.checkbox');
const id = new URLSearchParams(location.search).get('id')
const formRefactorProfile = document.querySelector('.refactor-profile');
const author = document.querySelector('.author-form');

formRefactorProfile.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(formRefactorProfile)
    const profileData = Object.fromEntries(formData);
    
    patchData('users',profileData,id)
    
})

