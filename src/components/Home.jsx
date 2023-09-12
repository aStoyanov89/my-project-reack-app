import React from 'react'

const Home = () => {



    return (
        <div className='home-container'>
            <header>
                <h1>
                  Welcome to my React Project !
                </h1>
            </header>
            <body>
                <img src="https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png" alt="pic" />
            </body>
            <footer>
                <h2>Александър Стоянов {new Date().getFullYear()}</h2>
            </footer>
        </div>
    )
}

export default Home