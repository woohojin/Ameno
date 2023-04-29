import { Configuration, OpenAIApi } from "openai";
const { OPENAI_API_KEY } = require("./config.json");

const configuration = new Configuration({
  organization: "org-7BTSbfSnw0JcKodl6WODT6jz",
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
