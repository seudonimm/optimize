import React, {memo} from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props{
    text:string
    onPress():void
}

let renderCount = 0;

const CustomButton:React.FC<Props> = (props:Props) => {
    const {text} = props;

    renderCount++;
    //console.log('button renderCount:' + renderCount)
    return(
        <TouchableOpacity style={styles.container}
            onPress={() => props.onPress()}
        >
            <Text style={styles.textStyle}>
                {text}
            </Text>
        </TouchableOpacity>
        
    );
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        borderRadius: 25,
        height: '10%',
        width: '75%',
        padding: '1%',
        justifyContent: 'center',
        margin: '1%'
    },
    textStyle: {
        fontSize: 20,
        textAlign: 'center'
    }
})
export default memo(CustomButton);