//landing page 

import {NavigationContainer} from '@react-navigation/native' //importa o sistema de navegação ('bottom-tabs')
import {Routes} from './src/routes' //importa o 'routes'

export default function App(){
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}