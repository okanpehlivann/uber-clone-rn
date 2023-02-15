import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const FormikInput = ({label, formikProps, formikKey, ...rest}: any) => {
  const inputStyle = [
    styles.input,
    Object.keys(formikProps.errors).length > 0 ||
      !formikProps.values.email ||
      (!formikProps.values.password && styles.inputError),
  ];

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={inputStyle}
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        value={formikProps.values[formikKey]}
        {...rest}
      />
      {formikProps.errors[formikKey] && formikProps.touched[formikKey] && (
        <Text style={styles.error}>{formikProps.errors[formikKey]}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },
  input: {
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  error: {
    fontSize: 12,
    color: 'red',
  },

  inputError: {
    borderColor: 'red',
  },
});

export default FormikInput;
