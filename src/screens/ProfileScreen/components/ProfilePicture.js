import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase/config";

const ProfilePicture = () => {
  const [imageUri, setImageUri] = useState(null);
  const [image, setImage] = useState(null);

  const handleupload = async (event) => {
    event.preventDefault();

    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", imageUri, true);
      xhr.send(null);
    });
    const imageRef = ref(storage, `images/123`);
    await uploadBytes(imageRef, blob);
  };

  const getimage = async () => {
    const imageRef = ref(storage, `images/123`);
    const url = await getDownloadURL(imageRef);
    await setImage(url);
  };

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
      console.log(imageUri);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePickImage}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            overflow: "hidden",
          }}>
          {imageUri ? (
            <Image
              source={{ uri: imageUri }}
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Text>Tap to select an image</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.uploadBtn}
        onPress={handleupload}>
        <Text>Upload</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  uploadBtn: {
    width: 100,
    height: 20,
    marginTop: 50,
  },
});
export default ProfilePicture;
