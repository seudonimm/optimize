import React from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

interface Props{

}

interface State {
    count:number
    headText:string
}

class Main extends React.Component<Props, State>{
    state:State = {
        count: 0,
        headText: 'head'
    };
    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<State>, nextContext: any): boolean {
        if((this.state.count == nextState.count) && (this.state.headText == nextState.headText)){
            return false;
        }
        return true;
    }
    increaseCount = () => {
        this.setState((state:State) => ({
            count: state.count + 1
        }))
    };
    sameCount = () => {
        this.setState((state:State) => ({
            count: state.count
        }));
        console.log('keeping same');
    };
    changeText = (t:string) => {
        this.setState((state:State) => ({
            headText: t,
        })); 
    };    
    
    keepText = () => {
        this.setState((state:State) => ({
            headText: state.headText,
        })); 
        console.log('keeping head');

    };

    renderCount = 0;

    render(){
        this.renderCount++;
        console.log("renderCount: " + this.renderCount);
        return(
            <SafeAreaView style={styles.container}>
                <Header
                    text={this.state.headText}
                />
                <Text>
                    {this.state.count}
                </Text>
                <CustomButton
                    text="increase"
                    onPress={() => this.increaseCount()}
                />
                <CustomButton
                    text="keep same"
                    onPress={() => this.sameCount()}
                />
                <TextInput style={styles.textInputStyle}
                    placeholder="header text"
                    onChangeText={this.changeText}
                />
                <CustomButton
                    text="keep text"
                    onPress={() => this.keepText()}
                />

            </SafeAreaView>
        )
    }
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
export default Main;