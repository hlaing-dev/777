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
        <WebView 
          source={{ uri: url }} 
          style={styles.webview}
        />
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  closeButton: {
    position: 'absolute',
    top: 15,  // Adjust to avoid any device status bar
    left: 60,  // Move to top left corner
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent background
    borderRadius: 15,
    zIndex: 1,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 14,  // Smaller font to minimize obstruction
    fontWeight: 'bold',
  },
  webview: {
    flex: 1,
  },
});

export default WebViewScreen;
