import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";


interface FormInput extends ChakraInputProps {
    name: string;
    label?: string;
}

export function Input({ name, label, ...rest }: FormInput) {
    return (
        <FormControl>
            {/* <FormLabel htmlFor={name}>{label}</FormLabel> */}
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                id={name}
                name={name}
                focusBorderColor='pink.500'
                bgColor='gray.900'
                variant='filled'
                _hover={{
                    bgColor: 'gray.900'
                }}
                size="lg"
                {...rest}
            />
        </FormControl>
    )
}