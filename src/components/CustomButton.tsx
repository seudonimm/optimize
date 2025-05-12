import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props{
    text:string
    onPress():void
}

class CustomButton extends React.Component<Props>{

    renderCount = 0;
    render(){
        this.renderCount++;
        console.log('button renderCount:' + this.renderCount)
        return(
            <TouchableOpacity style={styles.container}
                onPress={() => this.props.onPress()}
            >
                <Text style={styles.textStyle}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
            
        );
    }
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
export default CustomButton;