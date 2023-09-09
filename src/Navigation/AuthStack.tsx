/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    Login,
    Register,
    ChooseAccount,
    ForgotPassword,
    SetPassword,
} from '../Screens';
import navigationRoutes from '../Constants/navigation-routes';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navigationRoutes.Login} component={Login} />
            <Stack.Screen name={navigationRoutes.Register} component={Register} />
            <Stack.Screen name={navigationRoutes.ChooseAccount} component={ChooseAccount} />
            <Stack.Screen name={navigationRoutes.ForgotPassword} component={ForgotPassword} />
            <Stack.Screen name={navigationRoutes.SetPassword} component={SetPassword} />
        </Stack.Navigator>
    );
}
