
function GantiPage(id) {
    if(id == 'nav-home'){
        document.getElementById('nav-home').classList.add('active');
        document.getElementById('nav-about').classList.remove('active');
        document.getElementById('nav-portofolio').classList.remove('active');


        document.getElementById('landing-page').style.display='flex';
        document.getElementById('about').style.display='none';
        document.getElementById('portofolio').style.display='none';
        return false;
    }else if(id == 'nav-about'){
        document.getElementById('nav-home').classList.remove('active');
        document.getElementById('nav-about').classList.add('active');
        document.getElementById('nav-portofolio').classList.remove('active');


        document.getElementById('landing-page').style.display='none';
        document.getElementById('about').style.display='flex';
        document.getElementById('portofolio').style.display='none';
        return false;
    }else if(id == 'nav-portofolio'){
        document.getElementById('nav-home').classList.remove('active');
        document.getElementById('nav-about').classList.remove('active');
        document.getElementById('nav-portofolio').classList.add('active');

        document.getElementById('landing-page').style.display='none';
        document.getElementById('about').style.display='none';
        document.getElementById('portofolio').style.display='flex';
        return false;
    }
  }

function GantiAbout(id){
    if(id == 'nav-pendidikan'){

        document.getElementById('nav-pendidikan').classList.add('about-nav-active');
        document.getElementById('nav-skills').classList.remove('about-nav-active');
        document.getElementById('nav-pengalaman').classList.remove('about-nav-active');

        document.getElementById('pendidikan').style.display='flex';
        document.getElementById('skills').style.display='none';
        document.getElementById('pengalaman').style.display='none';
        
        return false;

    }else if(id == 'nav-skills'){
        document.getElementById('nav-pendidikan').classList.remove('about-nav-active');
        document.getElementById('nav-skills').classList.add('about-nav-active');
        document.getElementById('nav-pengalaman').classList.remove('about-nav-active');

        document.getElementById('pendidikan').style.display='none';
        document.getElementById('skills').style.display='flex';
        document.getElementById('pengalaman').style.display='none';
        
        return false;

    }else if(id == 'nav-pengalaman'){
        document.getElementById('nav-pendidikan').classList.remove('about-nav-active');
        document.getElementById('nav-skills').classList.remove('about-nav-active');
        document.getElementById('nav-pengalaman').classList.add('about-nav-active');

        document.getElementById('pendidikan').style.display='none';
        document.getElementById('skills').style.display='none';
        document.getElementById('pengalaman').style.display='flex';
        
        return false;
    }
}

// Modal box
const itemDetailButtons = document.querySelectorAll('.tombol-detail');

itemDetailButtons.forEach( (btn) =>{
    btn.addEventListener("click", (e) =>{
        var modal = btn.getAttribute('data-modal');
        document.getElementById(modal).style.display = 'flex';
        e.preventDefault();
    });
})


// tombol close
var closeModalButtons = document.querySelectorAll ('.modal .close-icon');

closeModalButtons.forEach( (btn) =>{
    btn.addEventListener('click', (e) =>{
        var modal = (btn.closest('.modal').style.display = 'none');
    });
} );

//klik dluar modal
window.addEventListener('click', (e) =>{
    if (e.target.className === 'modal' ){
        e.target.style.display = 'none';
    }
});