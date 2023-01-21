import logo from "./logo.svg";

import { Configuration, OpenAIApi } from "openai";
import "./App.css";

function App() {
  // console.log(import.meta.env.Open_AI_Key);
  // const OPENAI_API_KEY = `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`;
  // const configuration = new Configuration({
  //   apiKey: process.env.OPENAI_API_KEY,
  // });

  // const openai = new OpenAIApi(configuration);

  // const generateImage = async () => {
  //   const res = await openai.createImage({
  //     prompt: prompt,
  //     n: 1,
  //     size: "512x512",
  //   });
  //   console.log(res.data);
  // };

  return (
    <div className="App">
      {/* <button onClick={generateImage}>generate an image</button> */}
    </div>
  );
}

export default App;
