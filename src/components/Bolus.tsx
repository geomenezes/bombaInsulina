import React, { useState, useEffect } from 'react';
import { Stack, HStack, VStack, Heading, Center } from "native-base";
import { StyleSheet } from 'react-native';
 
export function Bolus() {

    const [newHour, setNewHour] = useState(null);
    const [oldHour, setOldHour] = useState(null);

    useEffect(() => {
        newHour == null && getNewHour();
        oldHour == null && getOldHour();
    });

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let value = Math.floor(Math.random() * (max - min) + min);

        return value;
    }

    function getNewHour() {
        let hour = getRandomInt(13, 1).toString();
        let min = getRandomInt(60, 1)
        let minutes = min <= 9 ? "0" + min.toString() : min.toString()
        setNewHour(hour + ":" + minutes)
    }

    function getOldHour() {
        let hour = getRandomInt(13, 1).toString();
        let min = getRandomInt(60, 1)
        let minutes = min <= 9 ? "0" + min.toString() : min.toString()
        setOldHour(hour + ":" + minutes)
    }

    return(
        <Stack style={styles.container}>
          <VStack>
            <Center>
              <Heading style={styles.text} fontSize={12}>
                Nova leitura de bolus em
              </Heading>
              <Heading style={styles.text} fontSize={18}>
                {newHour}
              </Heading>
              <Heading style={styles.text} fontSize={10} marginTop={5}>
                Tempo desde a última dosagem
              </Heading>
              <Heading style={styles.text} fontSize={10}>
                {oldHour}
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
        paddingLeft: 55,
        paddingRight: 55,
    },
    text: {
      margin: 5
    },
});