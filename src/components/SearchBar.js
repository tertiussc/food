import React from 'react';
import { View, TextInput, StyleSheet, } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <FontAwesome
                name="search"
                style={styles.iconStyle}
            />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                style={styles.inputStyle}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 10,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        fontSize: 18,
        flex: 1,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
})

export default SearchBar;