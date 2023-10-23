import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './stack.navigator';


export default function Navigator() {
    return (
      <NavigationContainer>
          <StackRoutes />
      </NavigationContainer>
    );
  }