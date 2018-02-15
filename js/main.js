document.addEventListener('DOMContentLoaded', function(){
    let banner = document.getElementById('header');
    let devLayer = banner.querySelector('.dev');
    let delta = 0;

    banner.addEventListener('mousemove', function(e){
        delta = (e.clientX - window.innerWidth / 2) * 0.5;
        devLayer.style.width = e.clientX + 500 + delta + 'px';
    });
});
