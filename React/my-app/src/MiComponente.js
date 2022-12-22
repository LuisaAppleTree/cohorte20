import React from "react"

const micomponente = () => {
    let nombre = "LuisaManzano"
    let web = "artstation.com"
    let usuario = {
        gamertag: "Bulma",
        videojuego: "Overwatch",
        nivel: "plata2"
    }
    return (
        <div>
        <header>
            <p>Este es mi primer componente</p>
            <ul>
                <li>nombre: <strong>{nombre}</strong></li>
                <li>web: {web}</li>
                <li>usuario: <small>{usuario.gamertag}</small></li>
            </ul>
        </header>
        </div>
    )
}
export default micomponente;
