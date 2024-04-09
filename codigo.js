//FAQ Accordion
document.addEventListener("DOMContentLoaded", () => {

    const faqContenido = document.querySelector('.faq-contenido');

    faqContenido.addEventListener('click', (e) => {

        const grupoTitulo = e.target.closest('.faq-grupo-titulo');


        if(!grupoTitulo) return; 

        const grupo = grupoTitulo.parentElement;
        const grupoBody = grupo.querySelector('.faq-grupo-body');
        const icon = grupoTitulo.querySelector('.faq-grupo-titulo i');

        //Toggle icon and body
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle visibilidad del body
        grupoBody.classList.toggle('open');

        //Close otros FAQ bodies

        const otrosGrupos = faqContenido.querySelectorAll( '.faq-grupo' );

        otrosGrupos.forEach((otrosGrupos) => {
            if(otrosGrupos !== grupo){
                const otrosGruposBody = otrosGrupos.querySelector('.faq-grupo-body');
                const otrosIconos = otrosGrupos.querySelector('.faq-grupo-titulo i');

                otrosGruposBody.classList.remove('open');
                otrosIconos.classList.remove('fa-minus');
                otrosIconos.classList.add('fa-plus');
            }
        });
    });


});

//Mobile Menu

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector('.menu');
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => {
        
        mobileMenu.classList.toggle('active');
    });


}