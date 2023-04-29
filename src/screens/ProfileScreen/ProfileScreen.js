import { View, Text, StyleSheet } from "react-native"
import ProfilePicture from "./components/ProfilePicture"

export default function ProfileScreen(){

    return (
        <View style={styles.rootContainer}>
          <View>
            <ProfilePicture/>
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
  });