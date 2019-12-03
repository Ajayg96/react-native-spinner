import React from "react";
import { View, Modal, StyleSheet, ActivityIndicator } from "react-native";

const Spinner = props => {
  return (
    <Modal
      transparent={true}
      visible={props.isModalVisible}
      onRequestClose={() => props.closeModal()}
    >
      {props.isLoading && (
        <View style={styles(props).spinnerContainer}>
          <View style={styles(props).spinner}>
            <ActivityIndicator
              size={props.spinnerSize}
              color={props.spinnerColor}
            />
          </View>
        </View>
      )}
    </Modal>
  );
};

const styles = props =>
  StyleSheet.create({
    spinnerContainer: {
      flex: 1,
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "#00000080"
    },
    spinner: {
      opacity: 0.9,
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: props.spinnerBackgroundColor
    }
  });

export default Spinner;
