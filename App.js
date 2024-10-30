import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [imageSource, setImageSource] = useState(require('./assets/image2.jpg')); 
  const changeImage = () => {
    setImageSource(prevImage =>
      prevImage == require('./assets/image2.jpg')
        ? require('./assets/image1.jpg')
        : require('./assets/image2.jpg')
    );
  };
  return (
    <View style={styles.container}>
      <Image style ={styles.image} source={imageSource} />
      <TouchableOpacity style={styles.button} onPress={changeImage}>
        <Text style={styles.text}>Cambiar Imagen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  button:{
    margin: 50,
    color: '#fff',
    backgroundColor: '#000', 
    borderRadius: 10,
    justifyContent: 'center',
    cursor: 'pointer',
  },
  text:{
    color: '#fff',
    fontSize: 10,
    padding: 4,
  }
});
