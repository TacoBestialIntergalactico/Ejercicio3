import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';
import Details from './src/components/Details';
import Configuration from './src/components/Configuration';

const Nav = createNativeStackNavigator();

function App() {
    return (
        
        <NavigationContainer>
            <Nav.Navigator initialRouteName='Home'>
                <Nav.Screen name='Home' component={HomeScreen} />
                <Nav.Screen name='Details' component={Details} />
                <Nav.Screen name='Configuration' component={Configuration} />
            </Nav.Navigator>
        </NavigationContainer>
    );
}

export default App;