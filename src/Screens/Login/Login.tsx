/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { styles } from './LoginStyles';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import { moderateVerticalScale } from '../../Shared/ResponsiveUI';
import imagePath from '../../Constants/imagePath';
import Button from '../../Components/Button';
import navigationRoutes from '../../Constants/navigation-routes';

type LoginProps = {
    navigation: any;
};

const Login = ({ navigation }: LoginProps) => {
    const [isPasswordNotVisible, setPasswordNotVisible] = useState(true);

    return (
        <View style={styles.container}>
            <View>
                <ImageBackground
                    source={{ uri: 'https://cdn.mos.cms.futurecdn.net/3qpVahdh69fiUrJdswtfUn.jpg' }}
                    style={styles.imageStyle}>
                    <Text style={styles.loginTextStyle}>LOGIN</Text>
                </ImageBackground>

                <View style={styles.mainStyle}>
                    <TextInputWithLabel
                        label="Email Address"
                        placeholder="Enter your email"
                        inputStyles={{ marginBottom: moderateVerticalScale(28) }}
                        keyboardType="email-address"
                    />
                    <TextInputWithLabel
                        label="Password"
                        placeholder="Enter your password"
                        secureTextEntry={isPasswordNotVisible}
                        rightIcon={isPasswordNotVisible ? imagePath.hideEye : imagePath.showEye}
                        onRightIconPress={() => setPasswordNotVisible(!isPasswordNotVisible)}
                    />
                    <TouchableOpacity style={styles.forgotPasswordStyle}>
                        <Text style={styles.forgotPasswordTextStyle}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <Button btnText={'Login'} />
                </View>
            </View>
            <View style={styles.notaMemberStyle}>
                <Text style={styles.notaMemberTextStyle}>Not a member? </Text>
                <TouchableOpacity onPress={() => navigation.navigate(navigationRoutes.Register)}>
                    <Text style={styles.joinNowStyles}>Join now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;
