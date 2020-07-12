import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'



const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchTerm) => {
    console.log('I ran the Api')
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      })
      setResults(response.data.businesses)
    } catch (err) {
      setErrorMessage('Somthing went wrong')
    }
  }

  // call search Api when componentn is first rendered
  // searchApi('food')
  useEffect(() => {
    searchApi('food')
  }, [])


  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;