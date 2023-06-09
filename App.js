// npx expo start --tunnel
// eas build -p android --profile preview

import { Provider } from "react-redux";
import { Store } from "./redux/store.jsx";
import Main from "./main.js";

export default function App() {
  return (
    <Provider store={Store}>
      <Main />
    </Provider>
  );
}
