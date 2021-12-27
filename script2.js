let showHtml = document.getElementById('showHtml')
showHtml.addEventListener('click', function(){
    let jsShow = document.getElementById('jsShow');
    let cssShow = document.getElementById('cssShow');
    let htmlHide = document.getElementById('htmlHide');
    htmlHide.id = 'htmlShow'
    cssShow.id = 'cssHide'
    jsShow.id = 'jsHide'
})

let closeHtml = document.getElementById('closeHtml');
closeHtml.addEventListener('click', function(){
    let htmlShow = document.getElementById('htmlShow');
    htmlShow.id = 'htmlHide'
})

let showCSS = document.getElementById('showCSS')
showCSS.addEventListener('click', function(){
    let jsShow = document.getElementById('jsShow');
    let cssHide = document.getElementById('cssHide');
    cssHide.id = 'cssShow'
    jsShow.id = 'jsHide'
    htmlShow.id = 'htmlHide'
})

let closeCSS = document.getElementById('closeCSS');
closeCSS.addEventListener('click', function(){
    let cssShow = document.getElementById('cssShow');
    cssShow.id = 'cssHide'
})


let showJS = document.getElementById('showJS')
showJS.addEventListener('click', function(){
    let htmlShow = document.getElementById('htmlShow');
    let cssShow = document.getElementById('cssShow');
    let jsHide = document.getElementById('jsHide');
    jsHide.id= 'jsShow'
    cssShow.id = 'cssHide'
    htmlShow.id = 'htmlHide'
})

let closeJS = document.getElementById('closeJS');
closeJS.addEventListener('click', function(){
    let jsShow = document.getElementById('jsShow');
    jsShow.id = 'jsHide'
})

let profileImage = document.getElementById('profile-image')
profileImage.addEventListener('click', function(){
    let aboutMeHide = document.getElementById('aboutMeHide');
    aboutMeHide.id = 'aboutMeShow'
})

let table = document.getElementById('table')
table.addEventListener('click', function(){
    let aboutMeShow = document.getElementById('aboutMeShow');
    aboutMeShow.id = 'aboutMeHide'
})


