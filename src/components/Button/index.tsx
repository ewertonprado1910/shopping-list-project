import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"

import { style } from "./styles"

type Props = TouchableOpacityProps & {
    title: String
}

const Button = ({ title, ...rest }: Props) => {
    return (
        <TouchableOpacity
            style={style.container}
            activeOpacity={0.7}
            {...rest}>
                
            <Text style={style.title}>{title}</Text>
        </TouchableOpacity>

    )
}

export default Button