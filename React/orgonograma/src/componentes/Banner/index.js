import "./Banner.css";
//  Importando o CSS do Banner

function Banner() {
    //  JSX parece html, mas é JavaScript
    //  JSX é uma sintaxe que permite escrever HTML dentro do JavaScript
    return (
        <header className="banner">
            <img src="/imagens/banner.png" alt="Banner principal"/>
        </header>
    )
}

export default Banner;