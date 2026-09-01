const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".section");

const themeToggle = document.getElementById("themeToggle");
const pageLoader = document.getElementById("pageLoader");
const downloadCv = document.getElementById("downloadCv");

const navigation = document.getElementById("navigation");
const menuBtn = document.getElementById("menuBtn");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        const target = item.dataset.section;


        // Remove ativo dos botões

        navItems.forEach(nav => {
            nav.classList.remove("active");
        });

        item.classList.add("active");


        // Atualiza os círculos

        navItems.forEach(nav => {

            const circle = nav.querySelector(".circulo");

            if (circle) {
                circle.classList.remove("active");
            }

        });

        const currentCircle = item.querySelector(".circulo");

        if (currentCircle) {
            currentCircle.classList.add("active");
        }


        // Esconde todas as seções

        sections.forEach(section => {
            section.classList.remove("active");
        });


        // Mostra a seção selecionada

        const selectedSection =
            document.getElementById(target);

        if (selectedSection) {

            selectedSection.classList.add("active");

        }


        // Volta para o topo

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


});


function updateThemeIcon() {

    if (!themeToggle) {
        return;
    }

    const icon = themeToggle.querySelector("i");

    if (!icon) {
        return;
    }

    const darkMode =
        document.body.classList.contains("dark-mode");


    if (darkMode) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        themeToggle.setAttribute(
            "aria-label",
            "Ativar modo claro"
        );

        themeToggle.setAttribute(
            "title",
            "Modo claro"
        );

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        themeToggle.setAttribute(
            "aria-label",
            "Ativar modo escuro"
        );

        themeToggle.setAttribute(
            "title",
            "Modo escuro"
        );

    }

}

const savedTheme =
    localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");


}

updateThemeIcon();

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");


        const darkMode =
            document.body.classList.contains("dark-mode");


        localStorage.setItem(
            "portfolio-theme",
            darkMode ? "dark" : "light"
        );


        updateThemeIcon();

    });

}

if (downloadCv) {


    downloadCv.addEventListener("click", () => {

        downloadCv.classList.add("downloading");

        setTimeout(() => {

            downloadCv.classList.remove("downloading");

        }, 500);

    });


}

function hideLoader() {

    if (!pageLoader) {
        return;
    }

    pageLoader.classList.add("hidden");

}

window.addEventListener("load", () => {

    setTimeout(() => {

        hideLoader();

    }, 50);

});

setTimeout(() => {

    hideLoader();


}, 1000);

window.addEventListener("resize", () => {

    if (
        window.innerWidth > 700 &&
        navigation &&
        menuBtn
    ) {

        navigation.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    }

});
