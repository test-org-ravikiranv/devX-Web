import "./App.scss";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import { ThemeProvider } from "@mui/material/styles";
import GlobalStyleOverrides from "./GlobalStyleOverrides";
import RouteComponent from "./routing/route";

const App = () => {
  return (
    <ThemeProvider theme={GlobalStyleOverrides()}>
      <Provider store={Store}>
        <RouteComponent />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
