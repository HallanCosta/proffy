import React from 'react'
import { StyleSheet } from 'react-native'



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7'
    },

    teacherList: {
        marginTop: -40
    },

    searchForm: {
        marginBottom: 24
    },

    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular'
    },

    select: {},

    selectPlaceholderTextColor: {
      height: 54,
      fontSize: 14,
      paddingHorizontal: 16,
      paddingTop: 15,
      paddingBottom: 15,
      marginBottom: 16,
      color: '#c1bccc',
      borderRadius: 8,
      backgroundColor: '#FFF'
    },

    selectTextColor: {
      color: '#000'
    },

    buttonTime: {
      backgroundColor: '#FFF',
      height: 54,
      paddingHorizontal: 16,
      paddingTop: 15,
      flexDirection: 'row',
      borderRadius: 8
    },

    buttonTimeText: {
      color: '#c1bccc'
    },

    buttonTimeTextWhenChange: {
      color: '#000'
    },

    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputBlock: {
        width: '48%'
    },

    submitButton: {
        backgroundColor: '#04d361',
        height: 56,
        flexDirection: 'row',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16
    },

    submitButtonText: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16
    }
})

export default styles