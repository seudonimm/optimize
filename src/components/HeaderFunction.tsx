import React, { memo } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

interface Props {
    text:string
}
let renderCount = 0;

const Header:React.FC<Props> = (props:Props) => {
    const {text} = props;

    // shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<{}>, nextContext: any): boolean {
    //     if(this.props.text == nextProps.text){
    //         return false;
    //     }
    //     return true;
    // }

    renderCount++;
    console.log('head renderCount:' + renderCount)
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.textStyle}>
                {text}
            </Text>
        </SafeAreaView>
    );
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
export default memo(Header);