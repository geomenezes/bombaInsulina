import { VStack } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';

export function ExemploStyle() {
    return (
      <VStack style={styles.container}>
        <Text>SignUp</Text>
      </VStack>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  