import React, { useState, useEffect } from 'react';
import { Stack, HStack, VStack, Heading, Center } from "native-base";
import { StyleSheet } from 'react-native';

export function Glicemia() {

    const [glicemia, setGlicemia] = useState(0);
    const [color, setColor] = useState('');
    const [text, setText] = useState('');
    const [hour, setHour] = useState(null);

    useEffect(() => {
        glicemia == 0 && getRandomInt();
        hour == null && getHour();
    });

    function getRandomInt() {
        let min = Math.ceil(70);
        let max = Math.floor(150);
        let value = Math.floor(Math.random() * (max - min) + min);

        setGlicemia(value);
        getValues(value);

        return value;
    }

    function getValues(value) {
        setColor(value > 126 ? "#FF6363" : value < 100 ? "#1C6609" : "#f7b25e");
        setText(value > 126 ? "Acima do Normal" : value < 100 ? "Normal" : "Anormal");
    }

    function getHour() {
        let date = new Date();
        let hour = date.getHours().toString();
        let minutes = date.getMinutes() <= 9 ? "0" + date.getMinutes().toString() : date.getMinutes().toString()
        setHour(hour + ":" + minutes)
    }

    return(
        <Stack style={styles.container}>
          <VStack>
            <Center>
              <Heading style={styles.text} fontSize={12}>
                Nível de glicemia no sangue
              </Heading>
              <Heading style={styles.text} color={color} fontSize={20}>
                {glicemia} mg/dl
              </Heading>
              <Heading style={styles.text} fontSize={10}>
                {text} - atualizado as {hour}
              </Heading>
            </Center>
          </VStack>
        </Stack>
    );
}


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
        h: 16,
        w: "full",
        backgroundColor:"#FBFBFB",
        paddingLeft: 45,
        paddingRight: 45,
    },
    text: {
      margin: 10
    },
});