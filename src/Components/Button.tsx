/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale, scale } from '../Shared/ResponsiveUI';
import colors from '../Styles/colors';
import isTablet from '../Shared/Helpers';

type ButtonProps = {
    btnText: string;
    btnStyle?: object;
    onPress?: () => void;
};

// create a component
const Button = ({ btnText, btnStyle, onPress }: ButtonProps) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{ ...styles.btnStyles, ...btnStyle }}>
            <Text style={styles.btnTextStyles}>{btnText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btnStyles: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.themeColor,
        borderRadius: moderateScale(4),
        height: moderateScale(48),
    },
    btnTextStyles: {
        fontSize: isTablet ? scale(10) : scale(12),
        color: colors.white,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default Button;
