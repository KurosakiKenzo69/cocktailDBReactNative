import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    const [cocktails, setCocktails] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchCocktails = async () => {
            try {
                const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
                setCocktails(response.data.drinks);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCocktails();
    }, []);

    const handleCocktailPress = (cocktail) => {
        navigation.navigate('DetailScreen', { cocktail });
    };

    const toggleFavorite = (cocktail) => {
        const isFavorite = favorites.some((item) => item.idDrink === cocktail.idDrink);
        if (isFavorite) {
            const updatedFavorites = favorites.filter((item) => item.idDrink !== cocktail.idDrink);
            setFavorites(updatedFavorites);
        } else {
            setFavorites([...favorites, cocktail]);
        }
    };

    const isFavorite = (cocktail) => {
        return favorites.some((item) => item.idDrink === cocktail.idDrink);
    };

    return (
        <View>
            <ScrollView>
                {cocktails.map((cocktail) => (
                    <TouchableOpacity
                        key={cocktail.idDrink}
                        onPress={() => handleCocktailPress(cocktail)}
                        style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc', flexDirection: 'row', alignItems: 'center' }}
                    >
                        <Image source={{ uri: cocktail.strDrinkThumb }} style={{ width: 50, height: 50, marginRight: 10 }} />
                        <Text>{cocktail.strDrink}</Text>
                        <TouchableOpacity onPress={() => toggleFavorite(cocktail)} style={{ marginLeft: 'auto' }}>
                            <Ionicons
                                name={isFavorite(cocktail) ? 'heart' : 'heart-outline'}
                                size={24}
                                color={isFavorite(cocktail) ? 'red' : 'black'}
                            />
                        </TouchableOpacity>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default HomeScreen;
