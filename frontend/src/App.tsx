import React, { useState, useEffect } from "react";
import AddButton from "./components/AddButton";

interface AppProps {}

function App({}: AppProps) {
    return (
        <div className="App">
            <AddButton />
        </div>
    );
}

export default App;
