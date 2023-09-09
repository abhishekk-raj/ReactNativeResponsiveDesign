/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from '../../Shared/ResponsiveUI';
import colors from '../../Styles/colors';
import isTablet from '../../Shared/Helpers';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    imageStyle: {
        height: isTablet ? moderateScale(280) : moderateScale(200),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginTextStyle: {
        fontSize: isTablet ? scale(24) : scale(32),
        color: colors.white,
        fontWeight: 'bold',
    },
    mainStyle: {
        paddingHorizontal: moderateScale(24),
        paddingTop: moderateVerticalScale(44),
    },
    forgotPasswordStyle: {
        alignSelf: 'flex-end',
        marginVertical: moderateVerticalScale(24),
    },
    forgotPasswordTextStyle: {
        fontSize: isTablet ? scale(11) : scale(16),
        color: colors.themeColor,
        fontWeight: '500',
    },
    notaMemberStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: moderateVerticalScale(72),
        justifyContent: 'center',
    },
    notaMemberTextStyle: {
        color: colors.blackOpacity80,
        fontSize: isTablet ? scale(9) : scale(12),
    },
    joinNowStyles: {
        color: colors.blackOpacity80,
        fontWeight: 'bold',
        fontSize: isTablet ? scale(9) : scale(12),
    },
});
