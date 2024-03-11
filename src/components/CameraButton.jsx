import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Modal, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

const CameraButton = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [modalVisible, setModalVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedImage(photo.uri);
      setModalVisible(false);
    }
  };

  const cameraRef = React.useRef(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, !capturedImage && styles.cameraButton]} onPress={() => setModalVisible(true)}>
        {!capturedImage && <Ionicons name="camera-outline" size={24} color="black" />}
      </TouchableOpacity>
      {capturedImage && (
        <TouchableOpacity style={[styles.button, styles.imageButton]} onPress={() => setModalVisible(true)}>
          <Image source={{ uri: capturedImage }} style={styles.image} />
        </TouchableOpacity>
      )}
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={{ flex: 1 }}>
          {hasPermission === false ? (
            <View style={styles.centeredView}>
              <Text>No access to camera</Text>
            </View>
          ) : (
            <Camera style={{ flex: 1 }} type={type} ref={cameraRef}>
              <View style={styles.cameraView}>
                <TouchableOpacity
                  style={styles.cameraButton}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}>
                  <Ionicons name="camera-reverse" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.cameraButton} onPress={takePicture}>
                  <Ionicons name="camera" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </Camera>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'lightgray',
    borderRadius: 50,
    padding: 15,
    margin: 10,
  },
  cameraButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
  imageButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 20,
  },
  cameraButton: {
    backgroundColor: 'lightgray',
    borderRadius: 50,
    padding: 15,
    margin: 20,
  },
});

export default CameraButton;
