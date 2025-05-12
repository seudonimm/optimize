import React, { useCallback, useMemo, useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import HeaderFunction from "../components/HeaderFunction";
import CustomButtonFunction from "../components/CustomButtonFunction";

let renderCount = 0;

const MainFunction:React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [headText, setHeadText] = useState<string>('head');

    // shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<State>, nextContext: any): boolean {
    //     if((this.state.count == nextState.count) && (this.state.headText == nextState.headText)){
    //         return false;
    //     }
    //     return true;
    // }
    

    const increaseCount = () => {
        setCount(prevState => prevState + 1);
    };
    const sameCount = () => {
        setCount(count);
        console.log('keeping same');
    };
    const changeText = (t:string) => {
        setHeadText(t);
    };    
    
    const keepText = () => {
        setHeadText(headText);
        console.log('keeping head');

    };

    const doNothingExpensively = useCallback(() => {
        for(let i = 0; i < 100; i ++){
            setCount(prevState => prevState + 1);
            setCount(prevState => prevState - 1);
        }
    },[count]);


    renderCount++;
    console.log("renderCount: " + renderCount);

    return(
        <SafeAreaView style={styles.container}>
            <HeaderFunction
                text={headText}
            />
            <Text>
                {count}
            </Text>
            <CustomButtonFunction
                text="increase"
                onPress={() => increaseCount()}
            />
            <CustomButtonFunction
                text="keep same"
                onPress={() => sameCount()}
            />
            <TextInput style={styles.textInputStyle}
                placeholder="HeaderFunction text"
                onChangeText={changeText}
            />
            <CustomButtonFunction
                text="keep text"
                onPress={() => keepText()}
            />
            <CustomButtonFunction
                text="add 100"
                onPress={doNothingExpensively}
            />

        </SafeAreaView>
    )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center'
    },
    textInputStyle: {
        borderWidth: 1,
        borderColor: 'black',
        width: '70%'
    }
})
export default MainFunction;