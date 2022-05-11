// import things related to React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



import Dashboard from "./screens/Dashboard";
// create a "stack"
const MyStack = createNativeStackNavigator();

function StepScreen(){
  
}
const App = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator>
      <MyStack.Screen name="Dashboard"  component={Dashboard} options={{headerShown: false}}/>
      </MyStack.Navigator>
    </NavigationContainer>
  );
}



export default App;