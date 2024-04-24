//configuração de rotas

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs' //importa a 'bottom-tabs' (navegação)
import {Home} from './pages/home' //importa a 'home'
import {Passwords} from './pages/passwords' //importa a 'passwords'
import {Ionicons} from '@expo/vector-icons' //importa os ícones

const Tab = createBottomTabNavigator(); //inicializa o 'bottom-tabs'

export function Routes(){
    return(
        <Tab.Navigator> 
            <Tab.Screen //tela
                name="home"
                component={Home} //página 'home'
                options={{
                    tabBarShowLabel: false, //apaga a 'label' automática
                    headerShown: false, //apaga o 'header' automático
                    tabBarIcon: ({focused, size, color}) => { //ícone exibido
                        if(focused){ //se for clicado
                            return <Ionicons size={size} color={color} name="home" />
                        }
                        return <Ionicons size={size} color={color} name="home-outline" />
                    }
                }}
            />

            <Tab.Screen
                name="passwords"
                component={Passwords} //página 'paswords']
                options={{
                    tabBarShowLabel: false, //apaga a 'label' automática
                    headerShown: false, //apaga o 'header' automático
                    tabBarIcon: ({focused, size, color}) => { //ícone exibido
                        if(focused){ //se for clicado
                            return <Ionicons size={size} color={color} name="lock-closed" />
                        }
                        return <Ionicons size={size} color={color} name="lock-closed-outline" />
                    }
                }}
            />
        </Tab.Navigator>
    )
}