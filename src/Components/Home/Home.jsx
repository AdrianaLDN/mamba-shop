import React from 'react';
import TextAppear from '../TextAppear';
import './home.css';


function Home () {
    return (
        <div>
            <div className='banner'>
                <p className='welcome'>Welcome to <TextAppear text="Mamba, sustainable clothing brand for urban people" delay={100} /></p>
            </div>  
        </div>
    )
}

export default Home;