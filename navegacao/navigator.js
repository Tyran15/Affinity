import { NavigationContainer } from '@react-navigation/native';

import TabRoutes from './tab.navigator';


export default function Navigator() {
    return (
      <NavigationContainer>
          <TabRoutes />
      </NavigationContainer>
    );
  }