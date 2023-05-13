import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import BookCard from './BookCard'

const bookcardDummy = require('../bookcardDummy.json')

const BookList = () => {
  const renderItem = ({ item }) => (
    <BookCard
      bookPictureUrl={item.bookPictureUrl}
      bookName={item.bookName}
      classNumber={item.classNumber}
      posterPicture={item.posterPicture}
      isSold={item.isSold}
    />
  );

  return (
    <FlatList
      data={bookcardDummy}
      renderItem={({ item }) => <BookCard {...item} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
});

export default BookList;
