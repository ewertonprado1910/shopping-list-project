import { TextInput, TextInputProps } from "react-native"

import { style } from "./styles"

const Input = ({ ...rest }: TextInputProps) => {
    return (
        <TextInput
            style={style.container} {...rest}>
        </TextInput>

    )
}

export default Input