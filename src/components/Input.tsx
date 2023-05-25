import { Input as NBInput, IInputProps, FormControl } from 'native-base'
 
export function Input({ ...rest}: IInputProps) {
    return(
        <NBInput
            bg="gray.700"
            fontSize="md"
            h={16}
            mb={4}
            _focus={{
                bgColor: "gray.200",
                borderWidth: 2,
                borderColor: "green.500"
            }}
            { ...rest}
        />
    );
}