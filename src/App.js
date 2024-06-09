import React, { useState } from 'react';
import NavBar from './components/navbar/NavBar';
import Hero from './components/hero/Hero';
import Main from './components/main/Main';

const App = () => {
    const [search, setSearch] =
        useState('everything');
    return (
        <div className="App">
            <NavBar setSearch={setSearch} />
            <Hero setSearch={setSearch} />
            <Main search={search} />
        </div>
    );
};

export default App;
