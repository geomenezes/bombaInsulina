import { Box, HamburgerIcon, Heading, HStack, Menu, Pressable } from "native-base";

 
export function Head() {
    return(
    <HStack bgColor="#FBFBFB" height={12}>
        <Box margin={"4"}>
            <Menu trigger={triggerProps => {
            return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                    <HamburgerIcon />
                    </Pressable>;
            }}>
                <Menu.Item>Ínicio</Menu.Item>
                <Menu.Item>Histórico de Aplicações</Menu.Item>
                <Menu.Item>Checar glicemia</Menu.Item>
            </Menu>
        </Box>
        <Heading fontSize={"3xs"} margin={"4"}>
            Bomba Insulina
        </Heading>
    </HStack>
    );
}

