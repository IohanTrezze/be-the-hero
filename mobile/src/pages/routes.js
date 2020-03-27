import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { create } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator ScreenOptions={{ headerShown: false}}>
                <AppStack.Screen component="Incidents" component={Incidents} />
                <AppStack.Screen ncomponent="Detail" component={Detail} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}