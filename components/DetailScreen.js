import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {
    const { cocktail } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: cocktail.strDrinkThumb }} style={styles.image} />
            <Text style={styles.title}>{cocktail.strDrink}</Text>
            <Text style={styles.subtitle}>Ingredients:</Text>
            <Text style={styles.ingredients}>{cocktail.strIngredient1}</Text>
            <Text style={styles.ingredients}>{cocktail.strIngredient2}</Text>
            <Text style={styles.ingredients}>{cocktail.strIngredient3}</Text>
            {/* Ajoutez d'autres ingrédients selon vos besoins */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    ingredients: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default DetailScreen;
