import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './styles'
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';


export default Main = () =>{

 
    const [entrada, setEntrada] = useState(0);
    const [saida, setSaida] = useState(0);
    const [total, setTotal] = useState(entrada - saida);
    
    const [name, setName] = useState('');
    const [num, setNum] = useState('');
    
    const [option, setOption] = useState('Entrada');

    if (total<0){
        var color = '#eb0000';
    }
    else if(total>=0){
        var color = '#fff';
    }

    const input = Number(entrada) + Number(num);
    const output = Number(saida) + Number(num);

    const [list, setList] = useState([])

   

    const newDebt = () => {
        if (name == '' || num == ''){
            alert("Preencha os dados corretamente")
        }
        else{
            var data = {
                id: Math.random(),
                name: name,
                debt: num,
                type: option
            };
            if (option === 'Entrada'){
                setEntrada(Number(input).toFixed(1));
                setTotal(Number(input - saida).toFixed(1));
            }
            else {
                setSaida(Number(output).toFixed(1));
                setTotal(Number(entrada - output).toFixed(1));
            }
           
            setList([...list, data]);
            setName('');
            setNum('');
        }        
    }


    const delDebt = (id) => {
        const newlist = list.filter((item) => item.id !== id);
        setList(newlist);
        const newDebtList = list.filter(((item) => item.id === id));
        newDebtList.filter((item) => {           
            const money = item.debt;
            if (item.type === "Entrada"){
                setEntrada(Number(entrada) - Number(money).toFixed(1))
                setTotal((parseFloat(total) - Number(money)).toFixed(1))
            }
            else{
                setSaida(Number(saida) - Number(money).toFixed(1))
                setTotal((Number(total) + Number(money)).toFixed(1))

            }         
        })
    };

    
    useEffect(() => {
        async function loadData() {
            const load = await AsyncStorage.getItem("data");
           
            if (load){
                setList(JSON.parse(load));
            }

        }

        async function loadInput() {
            const inputLoad = await AsyncStorage.getItem("input");
            
            if (inputLoad){
                setEntrada(JSON.parse(inputLoad));
            }

        }
        async function loadOutput() {
            const outputLoad = await AsyncStorage.getItem("output");
            
            if (outputLoad){
                setSaida(JSON.parse(outputLoad));
            }

        }
        async function loadTotal() {
            const totalLoad = await AsyncStorage.getItem("total");
            
            if (totalLoad){
                setTotal(JSON.parse(totalLoad));
            }

        }
        loadInput();
        loadOutput();
        loadTotal();
        loadData();

    }, [])

    useEffect(() => {
        async function saveData() {
            AsyncStorage.setItem("data", JSON.stringify(list));

            AsyncStorage.setItem("input", JSON.stringify(entrada));
            AsyncStorage.setItem("output", JSON.stringify(saida));
            AsyncStorage.setItem("total", JSON.stringify(total));
        }
        saveData();
    }, [list])


return (
    <KeyboardAvoidingView
        style={styles.container}>
        <StatusBar
        color='#0031ad'/>

        <View style={styles.header}>
        <Text style = {styles.tittle}>
            Finances
        </Text>
        </View>
        
        <View style={styles.containerHeader}>

            <View style = {styles.boxMoney}>
                <View
                style = {styles.boxText}>
                    <Text
                    style = {styles.textMoney}>Entrada:</Text>
                <Text
                    style={styles.numberMoney}
                >R${entrada}</Text>
                </View>

            <View
            style = {styles.boxText}>
                <Text
                style = {styles.textMoney}>Saída:</Text>
            <Text
                style={styles.numberMoney}
            >R${saida}</Text>
            </View>

            <View
                style = {styles.boxText}>
                <Text
                style={styles.textMoney}>Total:</Text>
                <Text
                style={{color: color, fontSize: 25, }}
                >R${total}</Text>
            </View>
        </View>


        <View style = {styles.boxPicker}>
            <Picker
                style = {styles.picker}
                selectedValue={option}
                onValueChange={(itemValue) =>
                    setOption(itemValue)}>
            <Picker.Item label="Entrada" value="Entrada" />
            <Picker.Item label="Saída" value="Saída" />
            </Picker>
        </View>


        </View>


        <View style={styles.containerList}>
            <FlatList
            data={list}
            keyExtractor={item => item.id}
            renderItem={({item}) => <View style={styles.containerItem}>
                <View style={styles.boxItem}><Text style={styles.item}>{item.name}</Text></View>
                <View style={styles.boxItem}><Text style={styles.item}>{item.type}</Text></View>
                <View style={styles.boxItem}><Text style={styles.item}>{item.debt}</Text></View>
                <TouchableOpacity
                    style = {styles.trashIcon}
                    activeOpacity = {0.5}
                    onPress = {() => delDebt(item.id)}> 

                    <MaterialIcons
                    name="delete-forever"
                    size={30}
                    color="#f64c75"
                    />
                </TouchableOpacity>
                </View>
                }
            />
        </View>

        <View style={styles.containerInput}>
        <TextInput
            style={styles.textInput}
            placeholder='Ex: Fatura cartão'
            placeholderTextColor='#808080'
            maxLength={100}
            color='#FFF'
            onChangeText={setName}
            value={name}/>

        <TextInput
            style={styles.numberInput}
            keyboardType='numeric'
            placeholder='Ex: 650,00'
            placeholderTextColor='#808080'
            maxLength={10}
            color='#FFF'
            onChangeText={setNum}
            value={num}/>

        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={newDebt}>

            <Text style={styles.textButton}>+</Text>

        </TouchableOpacity>

        </View>
    </KeyboardAvoidingView>

    );
}


