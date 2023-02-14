import { Configuration, OpenAIApi } from "openai";

import "./App.css";

import OptionSelection from "./components/OptionSelection";

import { arrayItems } from "./AIOptions";

import Translation from "./components/Translation";
import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  const [option, setOption] = useState({});

  const [input, setInput] = useState("");

  const [result, setResult] = useState("");

  const [loading, setLoading] = useState(false);

  const selectOption = (option) => {
    setOption(option);
  };

  const getResult = async () => {
    setLoading(true);

    let object = { ...option, prompt: input };

    const response = await openai.createCompletion(object);

    console.log(response.data.choices[0]);

    if (input === response.data.choices[0].text) {
      setResult(
        "I'm sorry, I don't understand what you're trying to communicate. Could you please provide a clear question or request?"
      );
    }

    setResult(response.data.choices[0].text);

    setLoading(false);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <OptionSelection
                arrayItems={arrayItems}
                selectOption={selectOption}
              />
            }
          />
          <Route
            path="chat"
            element={
              <Translation
                getResult={getResult}
                setInput={setInput}
                result={result}
                setResult={setResult}
                loading={loading}
                setLoading={setLoading}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
