import { Text, ITextProps, View } from 'native-base'
import { StyleSheet } from 'react-native';

type Props = ITextProps & {
    title: string;
    // link: string;
}

export function SmallCard({ title, ...rest}: Props) {
    return(
        <View style={styles.container}>
        <Text color="black" { ...rest} fontSize={13}>
            {title}
        </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 15,
        h: 16,
        w: "full",
        backgroundColor:"#FBFBFB"
    },
});