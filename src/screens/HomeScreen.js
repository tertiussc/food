import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {

    return (
        <View>
            <Button
                title="Go to Search"
                onPress={() => navigation.navigate('Search')}
            />
        </View>
    )
};

const styles = StyleSheet.create({

})

export default HomeScreen;