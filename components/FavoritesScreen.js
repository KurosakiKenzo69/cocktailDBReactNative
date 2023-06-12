import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';

const FavoritesScreen = () => {
    const [favorites, setFavorites] = useState([]);

    const handleRemoveFavorite = (cocktail) => {
        const updatedFavorites = favorites.filter((item) => item.idDrink !== cocktail.idDrink);
        setFavorites(updatedFavorites);
    };

    return (
        <View>
            {favorites.length > 0 ? (
                <ScrollView>
                    {favorites.map((cocktail) => (
                        <TouchableOpacity
                            key={cocktail.idDrink}
                            onPress={() => handleRemoveFavorite(cocktail)}
                            style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc', flexDirection: 'row', alignItems: 'center' }}
                        >
                            <Image source={{ uri: cocktail.strDrinkThumb }} style={{ width: 50, height: 50, marginRight: 10 }} />
                            <Text>{cocktail.strDrink}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            ) : (
                <Text>No favorites yet.</Text>
            )}
        </View>
    );
};

export default FavoritesScreen;
