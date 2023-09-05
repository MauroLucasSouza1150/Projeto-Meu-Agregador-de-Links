function toggleMode () {
    const html = document.documentElement;

    /*if (html.classList.contains("light")) {
        html.classList.remove("light");
    } else {
        html.classList.add("light");
    } */

    // Melhor maneira de fazer
    html.classList.toggle("light");
    
    // trocar a imagem de perfil no modo light
    // 1 - Pegar a tag da imagem
    const img = document.querySelector("#profile img")
    
    // 2 - Substituir a imagem
    if (html.classList.contains("light")) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "assets/foto-light.png");
    }else {
        // se tiver sem light mode, manter a imagem normal(padrão)
        img.setAttribute("src", "assets/foto.png");
    }

};

