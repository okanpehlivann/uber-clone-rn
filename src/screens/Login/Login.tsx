import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Form, Formik, FormikProps, FormikState} from 'formik';
import * as Yup from 'yup';
import FormikInput from '../../components/FormikInput';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export type FormikValues = {
  email: string;
  password: string;
};

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleSubmit = (values: any) => {
    // Handle submit logic
    console.log(values);

    navigation.navigate('Home');
  };

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {formikProps => (
        <ImageBackground
          style={{flex: 1, width: '100%', height: '100%'}}
          resizeMode="cover"
          source={{
            uri: 'https://cdn.kneblesauto.com/wp-content/uploads/2021/05/rideshare.jpg',
          }}>
          <View style={styles.container}>
            <FormikInput
              label="Email"
              formikProps={formikProps}
              formikKey="email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <FormikInput
              label="Password"
              formikProps={formikProps}
              formikKey="password"
              secureTextEntry
            />
            <View style={styles.center}>
              <TouchableOpacity
                style={[
                  styles.button,
                  Object.keys(formikProps.errors).length > 0 ||
                  !formikProps.values.email ||
                  !formikProps.values.password
                    ? styles.disabled
                    : null,
                ]}
                disabled={!formikProps.isValid}
                onPress={() => formikProps.handleSubmit(formikProps?.values)}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    marginTop: '50%',
    opacity: 1,
    zIndex: 999,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  error: {
    fontSize: 12,
    color: 'red',
    marginBottom: 20,
  },

  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001230',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 200,
    height: 50,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },

  disabled: {
    opacity: 0.3,
  },
});

export default Login;
