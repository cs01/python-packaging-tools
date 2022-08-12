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
    name: "hatch",
    owner: "ofek",
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
    name: "pex",
    owner: "pantsbuild",
  },
  {
    name: "shiv",
    owner: "linkedin",
  },
  {
    name: "PyOxidizer",
    owner: "indygreg",
  },
  {
    name: "xar",
    owner: "facebookincubator",
  },
  {
    name: "pyinstaller",
    owner: "pyinstaller",
  },
  {
    name: "Nuitka",
    owner: "Nuitka",
  },
  {
    name: "packaging",
    owner: "pypa",
  },
  {
    name: "build",
    owner: "pypa",
  },
  {
    name: "pep517",
    owner: "pypa",
  },
  {
    name: "PyO3",
    owner: "PyO3",
  },
  {
    name: "pybind11",
    owner: "pybind",
  },
  {
    name: "pyscript",
    owner: "pyscript",
  },
  {
    name: "cython",
    owner: "cython",
  },
  {
    name: "pyodide",
    owner: "pyodide",
  },
  {
    name: "pip-audit",
    owner: "trailofbits",
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
          latestRelease {
            publishedAt
          }
        }
      }`;
}

export async function fetchGithubData() {
  const data = (
    await Promise.all(
      tools.map((t) => {
        return octokit.graphql(getQuery(t.name, t.owner));
      })
    )
  ).map((d) => d["repository"]);
  fs.writeFileSync("./data.json", JSON.stringify(data, null, 4));
  return data;
}

async function main() {
  const response = await fetchGithubData();
  console.error(response);
}
