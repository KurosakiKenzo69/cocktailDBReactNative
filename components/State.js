import React, { useState } from 'react';
import HomeScreen from './Homescreen';

const State = () => {
    const [favorites, setFavorites] = useState([]); // Assurez-vous que la variable favorites est initialisée avec un tableau vide

    return <HomeScreen favorites={favorites} setFavorites={setFavorites} />;
};

export default State;
