// WebViewScreen.js
import React from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewScreen = ({ visible, onClose, url }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}> X </Text>
        </TouchableOpacity>
        <View style={styles.webviewContainer}>
          <WebView 
            source={{ uri: url }} 
            style={styles.webview}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    alignSelf: 'flex-end',
    margin: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#f00',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  webviewContainer: {
    flex: 1,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  webview: {
    flex: 1,
  },
});

export default WebViewScreen;
