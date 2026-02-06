import React from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
import Styles from './Modal.styles';
import { useTheme } from '../../context/ThemeContext';

interface CheckoutModalProps {
  visible: boolean;
  onConfirm: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
  visible,
  onConfirm,
}) => {
  const { colors } = useTheme(); 
  const styles = Styles(colors);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Checkout Successful</Text>

          <Pressable style={styles.button} onPress={onConfirm}>
            <Text style={styles.buttonText}>OK</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default CheckoutModal;
