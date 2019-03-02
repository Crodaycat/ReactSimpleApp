import React from 'react';
import About from '../components/About';
import Main from '../components/Main';
import getData from '../hooks/getData';

const App = () => {

    const person = getData('https://rickandmortyapi.com/api/character/1/');

    return (
        <Main>
            <About />
            {person.name}
            <img src={person.image} />
        </Main>
    );
}

export default App;