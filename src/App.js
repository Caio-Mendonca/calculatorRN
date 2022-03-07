import React, {Component} from "react";
import {  SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import Display from "./components/Display";
const initialState ={
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0,0],
  current: 0
}
export default class App extends Component{
  state = {... initialState}

  addDigit = n =>{
    if(n === '.' && this.state.displayValue.includes('.')){
      return
    }
    const clearDisplay = this.state.displayValue === '0' 
      || this.state.clearDisplay
    const currentValue = clearDisplay ? '': this.state.displayValue
    const displayValue = currentValue + n
    this.setState({displayValue, clearDisplay: false})

    if(n !=='.'){
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({values})
    }
  }
  clearMemory = () =>{
    this.setState({...initialState})
  }
  setOperation = operation =>{

  }
  render(){
    return (
      <SafeAreaView style={styles.sectionContainer}>
        <Display value={this.state.displayValue}/>
        <View style={styles.buttons}>
          <Button label='AC' triple onClick={this.clearMemory}/>
          <Button label='/' operation onClick={()=> this.setOperation('/')}/>
          <Button label='7'  onClick={()=> this.addDigit(7)}/>
          <Button label='8'  onClick={()=> this.addDigit(8)}/>
          <Button label='9'  onClick={()=> this.addDigit(9)}/>
          <Button label='*' operation onClick={()=> this.setOperation('*')}/>
          <Button label='4'  onClick={()=> this.addDigit(4)}/>
          <Button label='5'  onClick={()=> this.addDigit(5)}/>
          <Button label='6'  onClick={()=> this.addDigit(6)}/>
          <Button label='-' operation onClick={()=> this.setOperation('-')} />
          <Button label='1' onClick={()=> this.addDigit(1)}/>
          <Button label='2'  onClick={()=> this.addDigit(2)}/>
          <Button label='3'  onClick={()=> this.addDigit(3)}/>
          <Button label='+' operation onClick={()=> this.setOperation('+')}/>
          <Button label='0'  double onClick={()=> this.addDigit(0)}/>
          <Button label='.' onClick={()=> this.addDigit('.')}/>
          <Button label='=' operation onClick={()=> this.setOperation('=')}/>
        </View>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  buttons:{
    backgroundColor: '#f5fcff',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});