/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from '../Shared/ResponsiveUI';
import colors from '../Styles/colors';
import isTablet from '../Shared/Helpers';


type TextInputWithLabelProps = {
    label: string;
    placeholder: string;
    inputStyles?: object;
    rightIcon?: ImageSourcePropType;
    onChangeText?: (text: string) => void;
    onRightIconPress?: () => void;
    [key: string]: any;
};

// create a component
const TextInputWithLabel = ({ label, placeholder, inputStyles, rightIcon, onChangeText, onRightIconPress, ...props }: TextInputWithLabelProps) => {
    return (
        <View style={{ ...styles.inputContainerStyle, ...inputStyles }}>
            <Text style={styles.inputLabelStyle}>{label}</Text>
            <View style={styles.inputTextAndImageContainerStyle}>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={colors.placeholderColor}
                    style={styles.inputStyle}
                    onChangeText={onChangeText}
                    {...props}
                />
                {rightIcon ? <TouchableOpacity activeOpacity={0.8} onPress={onRightIconPress}>
                    <Image source={rightIcon} style={styles.inputRightIconStyle} />
                </TouchableOpacity> : null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: colors.borderColor,
        borderRadius: moderateScale(4),
    },
    inputTextAndImageContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputLabelStyle: {
        color: colors.blackOpacity50,
        fontSize: isTablet ? scale(9) : scale(14),
    },
    inputStyle: {
        paddingVertical: moderateVerticalScale(8),
        color: colors.blackOpacity80,
        fontSize: isTablet ? scale(11) : scale(16),
        flex: 1,
    },
    inputRightIconStyle: {
        tintColor: colors.blackOpacity30,
        height: moderateScale(24),
        width: moderateScale(24),
    },
});

export default TextInputWithLabel;
