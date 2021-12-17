import React, { useState, useEffect } from "react";
import { Button } from "antd";

interface AppProps {}

function App({}: AppProps) {
    return (
        <div className="App">
            <Button
                type="primary"
                onClick={() => {
                    console.log(11);
                }}
            >
                Button
            </Button>
        </div>
    );
}

export default App;
