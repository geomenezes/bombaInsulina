import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

import Routes from "./src/index";

AppRegistry.registerComponent(appName, () => Routes);