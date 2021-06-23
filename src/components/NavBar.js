import React from 'react'
import CardWidget from './CardWidget'

const menus = [
    {
        categoria: 'Ropa',
        item: [
            'calzados',
            'chaquetas',
            'camisetas',
            'etc'
        ]

    },
    {
        categoria: 'Accesorios',
        item: [
            'calzados',
            'chaquetas',
            'camisetas',
            'etc'
        ]

    },
    {
        categoria: 'Calzados',
        item: [
            'calzados',
            'chaquetas',
            'camisetas',
            'etc'
        ]

    },
    {
        categoria: 'Mas..',
        item: [
            'calzados',
            'chaquetas',
            'camisetas',
            'etc'
        ]

    }
]

function NavBar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <CardWidget />
                    <a class="navbar-brand" href="#!">CONTACHUELAS</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">

                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#!">INICIO</a>
                            </li>
                            {
                                menus.map(
                                    menu => (
                                        <li class="nav-item">
                                            <a class="nav-link" href="#!">{menu.categoria}</a>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
