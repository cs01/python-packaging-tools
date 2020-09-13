import * as express from "express";
import { fetchGithubData } from "./githubData";
import * as path from "path";
const app = express();
const port = process.env.PORT ?? 3001;

const secPerMin = 60;
const minPerHour = 60;
const msPerSec = 1000;
const hourInMs = secPerMin * minPerHour * msPerSec;
let cachedData: { cachedAt: number; data: any } = {
  cachedAt: 0,
  data: null,
};
const maxCacheAgeMs = hourInMs;

const msToMinutes = (1 / msPerSec) * (1 / secPerMin);

app.get("/package_data", async (req, res) => {
  const now = Date.now();
  const age = now - cachedData.cachedAt;
  const timeUntilRefetch = maxCacheAgeMs - age;
  console.error(
    `Cache is ${age * msToMinutes} minutes old. ${
      timeUntilRefetch * msToMinutes
    } minutes left until new data is used`
  );
  if (timeUntilRefetch <= 0) {
    cachedData.data = await fetchGithubData();
    cachedData.cachedAt = now;
  } else {
    console.error("using cached data");
  }
  res.json(cachedData.data);
});

app.use("/", express.static(path.join(__dirname, "..", "frontend", "build")));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
