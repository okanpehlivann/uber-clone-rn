import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {FormikProps} from 'formik';

export interface FormValues {
  email: string;
  password: string;
}

export interface FormikInputProps {
  label: string;
  formikProps: FormikProps<FormValues>;
  formikKey: keyof FormValues; // allow only keys of FormValues as formikKey
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
  [key: string]: any; // allow any additional props
  testID: string;
}

const FormikInput = ({
  label,
  formikProps,
  formikKey,
  testID,
  ...rest
}: FormikInputProps) => {
  const inputStyle: any = [
    styles.input,
    Object.keys(formikProps.errors).length > 0 ||
      !formikProps.values.email ||
      (!formikProps.values.password && styles.inputError),
  ];

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>
        {label} {testID}{' '}
      </Text>
      <TextInput
        style={inputStyle}
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        value={formikProps.values[formikKey]}
        testID={testID}
        {...rest}
      />
      {formikProps.errors[formikKey] && formikProps.touched[formikKey] && (
        <Text testID="input-error" style={styles.error}>
          {formikProps.errors[formikKey]}
        </Text>
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
    color: '#000',
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
