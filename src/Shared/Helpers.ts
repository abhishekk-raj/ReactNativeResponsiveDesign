/* eslint-disable prettier/prettier */
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

export default isTablet;
