import Cart from "@/src/Screens/Cart/Cart";
import Favorites from "@/src/Screens/Favorites/Favorites";
import Home from "@/src/Screens/Home/Home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createBottomTabNavigator();

export default function Tab() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Cart" component={Cart} />
      <Screen name="Favorites" component={Favorites} />
    </Navigator>
  );
}
