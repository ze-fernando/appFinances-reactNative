import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#22262b',
        height: 1018,
    },

    header: {
        backgroundColor: '#0c276b',
        width: 485,
        height: 180,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    tittle: {
        color: '#FFF',
        fontSize: 30,
        marginTop: 35,
    },

    containerHeader: {
        backgroundColor: '#333942',
        width: 440,
        height: 180,
        borderRadius: 10,
        marginTop: -70,
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    boxMoney: {
        width: 420,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    boxText: {
        backgroundColor: '#363e47',
        padding: 15,
        borderRadius: 5,
    },
    
    textMoney: {
        color: '#FFF',
    },

    numberMoney: {
        color: '#FFF',
        fontSize: 25,
    },

    boxPicker: {
        width: 420,
        backgroundColor: '#363e47',
        alignSelf: 'center',
        borderRadius: 6,
    },

    picker: {
        backgroundColor: '#363e47',
        color: '#FFF',
    },
    
    containerList: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 12,
        marginRight: 12,
        marginTop: 11,
    },
    
    containerItem: {
        width: 458,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginTop: 10,

        backgroundColor: '#333942',
        borderRadius: 7,
    },

    boxItem:{
        width: 100,
    },

    item: {
        color: '#FFF',
        fontSize: 15,
        marginLeft: 13,
    },
        
    trashIcon:{
        marginRight: 13,
    },

    containerInput: {
        height: 85,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },

    textInput: {
        position: 'absolute',
        height: 55,
        width: 310,
        margin: 12,
        bottom: 0,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#333942',
        borderRadius: 8,
    },

    numberInput: {
        position: 'absolute',
        width: 80,
        height: 55,
        borderWidth: 1,
        bottom: 12,
        left: 335,
        padding: 10,
        backgroundColor: '#333942',
        borderRadius: 8,
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        left: 425,
        bottom: 15,
        padding: 25,
        backgroundColor: '#0c276b',
        borderRadius: 5,
    },

    textButton: {
        position: 'absolute',
        bottom: 0,
        fontSize: 45,
        color: '#FFF',
    },
    });

export default styles;