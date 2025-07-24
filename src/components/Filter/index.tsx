import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"

import { style } from "./styles"
import { FilterStatus } from "@/types/FilterStatus"
import StatusIcon from "../StatusIcon"

type Props = TouchableOpacityProps & {
    status: FilterStatus,
    isAcitive: boolean
}

const Filter = ({ status, isAcitive, ...rest }: Props) => {
    return (
        <TouchableOpacity
            style={[style.container, { opacity: isAcitive ? 1 : 0.5 }]}
            {...rest}
            activeOpacity={0.7}>
            <StatusIcon status={status} />
            <Text style={style.title}>
                {status === FilterStatus.DONE ? "Comprados" : "Pendentes"}
            </Text>
        </TouchableOpacity>

    )
}

export default Filter