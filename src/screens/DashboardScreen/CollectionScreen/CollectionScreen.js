import { View, Text, StyleSheet } from "react-native"
import BookList from "../component/BookList";

export default function CollectionScreen(){
    return (
        <View style={styles.rootContainer}>
          <View style ={styles.bookListContainer}>
          <BookList/>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    highlight: {
      fontWeight: 'bold',
      color: 'orange',
    },
    bookListContainer:{
      alignItems:'center',
      marginTop: '35%', 
    }
  });