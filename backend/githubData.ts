import { Octokit } from "@octokit/core";
import * as dotenv from "dotenv";
import * as fs from "fs";

const env = dotenv.config().parsed;
const apiKey = env.API_KEY;
const octokit = new Octokit({ auth: apiKey });

const tools = [
  {
    name: "pip",
    owner: "pypa",
  },
  {
    name: "conda",
    owner: "conda",
  },
  {
    name: "dephell",
    owner: "dephell",
  },
  {
    name: "flit",
    owner: "takluyver",
  },
  {
    name: "pyflow",
    owner: "David-OConnor",
  },
  {
    name: "pdm",
    owner: "frostming",
  },
  {
    name: "python-build",
    owner: "FFY00",
  },
  {
    name: "tox",
    owner: "tox-dev",
  },
  {
    name: "nox",
    owner: "theacodes",
  },
  {
    owner: "pipxproject",
    name: "pipx",
  },
  {
    name: "poetry",
    owner: "python-poetry",
  },
  {
    name: "pipenv",
    owner: "pypa",
  },
  {
    name: "virtualenv",
    owner: "pypa",
  },
  {
    name: "pipenv",
    owner: "pypa",
  },
  {
    name: "pyenv",
    owner: "pyenv",
  },
  {
    name: "twine",
    owner: "pypa",
  },
  {
    name: "setuptools",
    owner: "pypa",
  },
  {
    name: "pip-tools",
    owner: "jazzband",
  },
  {
    name: "fades",
    owner: "PyAr",
  },
];

function getQuery(name: string, owner: string) {
  return `query {
        repository(owner: "${owner}", name: "${name}") {
          stargazers {
            totalCount
          }
          pushedAt
          createdAt
          description
          name
          issues {
            totalCount
          }
          licenseInfo {
            name
          }
          primaryLanguage {
            name
          }
          url
          homepageUrl
        }
      }`;
}

export async function fetchGithubData() {
  // try {
  //   console.error("Attempting to read data");
  //   return JSON.parse(String(fs.readFileSync("./data.json")));
  // } catch (e) {
  // console.error(e.message);
  // console.error("Failed to read, fetching...");
  const data = (
    await Promise.all(
      tools.map((t) => {
        return octokit.graphql(getQuery(t.name, t.owner));
      })
    )
  ).map((d) => d["repository"]);
  fs.writeFileSync("./data.json", JSON.stringify(data, null, 4));
  return data;
  // }
}

async function main() {
  const response = await fetchGithubData();
  console.error(response);
}

// (async () => {
//   try {
//     var text = await main();
//     console.log(text);
//   } catch (e) {
//     console.error(e);
//   }
// })();
