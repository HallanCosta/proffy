import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
    },

    purpleContainer: {
      height: '50%',
      backgroundColor: '#8257E5',
      padding: 30
    },

    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20
    },

    buttonProfile: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },

    avatar: {
      height: 40,
      width: 40,
      borderRadius: 110,
      resizeMode: 'contain'
    },

    avatarName: {
     fontSize: 12,
     color: '#D4C2FF',
     paddingHorizontal: 10,
     fontFamily: 'Poppins_400Regular'
    },

    buttonLogout: {
      height: 40,
      width: 40,
      backgroundColor: '#774DD6',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8
    },

    banner: {
        width: '100%',
        resizeMode: 'contain',
        marginTop: 20
    },

    whiteContainer: {
      height: '50%',
      backgroundColor: '#fff',
      padding: 30
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#6A6180',
        fontSize: 20,
        lineHeight: 30
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between'
    },

    button: {
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 9,
        padding: 24,
        justifyContent: 'space-between'
    },

    buttonPrimary: {
        backgroundColor: '#9871f5'
    },

    buttonSecondary: {
        backgroundColor: '#04d361'
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 20
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#9C98A6',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 20
    }
})

export default styles