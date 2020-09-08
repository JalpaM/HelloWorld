import React from 'react';
import './App.css';
import Example from "./Example";
import Asset from "./components/asset.connector"
import assetStore from "./asset.store";
import { Provider } from "react-redux";


function App() {
  return (
    <div className="App">
          {/*{Example(}*/}
        <Provider store={ assetStore }>
            <Asset />
        </Provider>
    </div>
  );
}

export default App;
