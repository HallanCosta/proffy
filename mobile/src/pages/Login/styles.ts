import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F5'
  },

  header: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  backgroundContainer: {
    padding: 40,
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8257e5'
    
  },

  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {},

  form: {
    padding: 32,
    height: '55%',
    backgroundColor: '#F0F0F5'
  },

  groupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },

  title: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    lineHeight: 34,
    color: '#32264D'
  },

  createAccount: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    lineHeight: 24,
    color: '#8257E5'
  },

  groupInput: {},

  label: {
    fontSize: 10,
    left: -270,
    top: 10,
    color: '#C1BCCC'
  },

  email: {
    flexDirection: 'row',
  },


  inputEmail: {
    height: 64,
    width: '100%',
    paddingHorizontal: 24,
    paddingRight: 55,
    borderStyle: 'solid',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#6A6180',
    backgroundColor: '#FFF',
    borderBottomColor: '#E6E6F0',
    borderBottomWidth: 1
  },

  emailLabel: {
    paddingTop: 20,
  },

  password: {
    flexDirection: 'row',
  },

  inputPassword: {
    height: 64,
    width: '100%',
    paddingHorizontal: 24,
    paddingRight: 55,
    borderStyle: 'solid',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#6A6180',
    backgroundColor: '#FFF'
  },

  purpleBorderInput: { 
    borderLeftWidth: 3,
    borderLeftColor: '#9871F5'
  },

  passwordLabel: {
    paddingTop: 20,
  },

  buttonEyeIconPassword: {
    left: -40
  },

  buttonEyeIconPasswordLabel: {
    left: -68
  },

  showPasswordIcon: {
    top: 20
  },
  
  groupFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },

  remember: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  checkbox: {
    width: 24,
    height: 24,
    marginRight: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E6E6F0'
  },

  footerText: {
    color: '#9C98A6',
    fontSize: 12
  },

  submit: {
    height: 56,
    backgroundColor: '#DCDCE5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },

  submitText: {
    fontFamily: 'Archivo_400Regular',
    fontSize: 16,
    color: '#9C98A6'
  },

  submitValid: {
    backgroundColor: '#04D361',
  },

  submitTextValid: {
    color: '#FFF'
  }
});

export default styles;