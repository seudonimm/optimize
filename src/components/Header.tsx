import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

interface Props {
    text:string
}

class Header extends React.Component<Props>{
    
    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<{}>, nextContext: any): boolean {
        if(this.props.text == nextProps.text){
            return false;
        }
        return true;
    }
    renderCount = 0;
    render(){
        this.renderCount++;
        console.log('head renderCount:' + this.renderCount)
        return(
            <SafeAreaView style={styles.container}>
                <Text style={styles.textStyle}>
                    {this.props.text}
                </Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
export default Header;