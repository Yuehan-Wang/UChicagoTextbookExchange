import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BookCard = ({ bookPictureUrl, bookName, classNumber, posterPicture, isSold }) => {
    const navigation = useNavigation();

    const goToChat = () => {
        navigation.navigate('Chat');
    }

    return (
        <View style={[styles.card, { backgroundColor: isSold ? '#FF7F7F' : '#ADD8E6' }]}>
            <Image source={{ uri: bookPictureUrl }} style={styles.bookPicture} />
            <View style={styles.details}>
                <Text style={[styles.text, styles.bookName]}>{bookName}</Text>
                <Text style={styles.text}>{classNumber}</Text>
                <Image source={{ uri: posterPicture }} style={styles.posterPicture} />
            </View>
            <View style={styles.sign}>
                {isSold ? 
                    <Text style={styles.text}>Sold</Text> : 
                    <TouchableOpacity onPress={goToChat}>
                        <MaterialCommunityIcons name="message-outline" color="#fff" size={26} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
        width:'85%',
        height: 100 
    },
    bookPicture: {
        width: 100,
        height: '100%',
        borderRadius: 10,
    },
    details: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        paddingLeft: 10,
    },
    bookName: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5, 
    },
    text: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10, 
    },
    posterPicture: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    sign: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 10,
        top:'10%'
    },
});

export default BookCard;
