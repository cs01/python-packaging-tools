import { GithubRepo } from './Types';
import React from 'react';
import { useTable, useSortBy } from 'react-table';
import moment from 'moment';
import { atom, useRecoilState } from 'recoil';

export const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    width: 400,
  },
  {
    Header: 'Features',
    accessor: 'featureLinks',
  },
  {
    Header: 'Description',
    accessor: 'toolDescription',
    minWidth: 300,
    width: 1000,
  },
  // {
  //   Header: 'Use Cases',
  //   accessor: 'useCases',
  // },
  // {
  //   Header: 'Last Updated',
  //   accessor: 'timeSinceUpdated',
  // },
  {
    Header: 'Depends On',
    accessor: 'dependsOn',
  },
  {
    Header: 'Language',
    accessor: 'primaryLanguage.name',
  },
  {
    Header: 'Created',
    accessor: 'timeSinceCreated',
  },
  {
    Header: 'Stars',
    accessor: 'stargazers.totalCount',
  },
  {
    Header: 'License',
    accessor: 'licenseInfo.name',
  },
  {
    Header: 'Links',
    accessor: 'urls',
  },
  {
    Header: 'GitHub Description',
    accessor: 'description',
  },
];

export function Table({ columns, data }: any) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
  );

  // Render the UI for your table
  return (
    <table
      {...getTableProps()}
      className="w-full h-full text-center border-2 border-gray-200"
    >
      <thead className="bg-gray-600">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className="p-2"
              >
                {column.render('Header')}
                <span>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{ width: '12px', height: '12px' }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{ width: '12px', height: '12px' }}
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                    )
                  ) : (
                    ''
                  )}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              className={i % 2 ? 'bg-gray-200' : 'bg-white'}
            >
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className="p-5"
                    style={{ width: '500px' }}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export type Feature =
  | 'publish packages'
  | 'build packages'
  | 'application deployment'
  | 'task automation'
  | 'install cli apps'
  | 'install libraries'
  | 'install Python interpreter'
  | 'standard library'
  | 'dependency resolver'
  | 'manual virtual environment creation'
  | 'virtual environment management';

// @ts-ignore
export const features: Feature[] = [
  'publish packages',
  'build packages',
  'application deployment',
  'task automation',
  'install cli apps',
  'install libraries',
  'install Python interpreter',
  'standard library',
  'dependency resolver',
  'manual virtual environment creation',
  'virtual environment management',
].sort();

type Tool = {
  name: string;
  features: Feature[];
  toolDescription: string;
  dependsOn: string[];
  useCases: string[];
} & GithubRepo;

export const initialToolData: Tool[] = [
  {
    features: ['install cli apps', 'install libraries'],
    name: 'pip',
    useCases: ['Install libraries', 'Install CLI tools'],
    dependsOn: [],
    toolDescription:
      'pip is the package installer for Python. You can use pip to install packages from the Python Package Index (PyPI) and other indexes.',
  },
  {
    features: ['install cli apps', 'virtual environment management'],
    name: 'pipx',
    toolDescription:
      'pipx runs and installs cli tools in virtual environments. It focuses and improves on a specific use case handled by pip.',
    useCases: ['Install cli tools to isolated environment'],
    dependsOn: ['pip', 'venv'],
  },
  {
    features: ['dependency resolver'],
    name: 'pip-tools',
    toolDescription:
      'pip-tools takes abstract dependencies and outputs concrete dependencies to a lock file.',
    useCases: ['Separate abstract dependencies from fully resolved lock file'],
    dependsOn: ['pip'],
  },
  {
    features: [
      'publish packages',
      'build packages',
      'dependency resolver',
      'application deployment',
      'task automation',
      'virtual environment management',
    ],
    toolDescription: `Poetry helps you declare, manage and install dependencies of Python projects. It also can publish packages to PyPI.`,
    useCases: [],
    dependsOn: ['virtualenv'],
    name: 'poetry',
  },
  {
    features: [
      'virtual environment management',
      'dependency resolver',
      'task automation',
      'application deployment',
    ],
    name: 'pipenv',
    toolDescription:
      'pipenv automatically creates and manages a virtualenv for your projects, as well as adds/removes packages from a Pipfile as you install/uninstall packages. It also generates Pipfile.lock, which is used to produce deterministic builds.',
    useCases: [],
    dependsOn: ['pip', 'virtualenv', 'venv'],
  },
  {
    features: ['virtual environment management', 'application deployment'],
    name: 'tox',
    toolDescription:
      'Command line driven CI frontend and development task automation tool',
    useCases: [],
    dependsOn: ['pip', 'virtualenv', 'venv'],
  },
  {
    features: ['virtual environment management', 'application deployment'],
    name: 'nox',
    toolDescription:
      'nox is a command-line tool that automates task running, application deployment, and testing in multiple Python environments, similar to tox. Unlike tox, Nox uses a standard Python file for configuration.',
    useCases: [],
    dependsOn: ['pip', 'virtualenv', 'venv'],
  },
  {
    features: ['manual virtual environment creation'],
    name: 'virtualenv',
    toolDescription:
      'A tool for creating isolated virtual (isolated) python environments. This is essentially a 3rd party package that duplicates the standard libary venv module.',
    useCases: [],
    dependsOn: [],
  },
  {
    features: ['install Python interpreter'],
    name: 'pyenv',
    toolDescription:
      'pyenv lets you switch between multiple versions of Python on your machine',
    useCases: [],
    dependsOn: [],
  },
  {
    features: ['publish packages'],
    name: 'twine',
    toolDescription:
      'Twine is a utility for publishing Python packages on PyPI. Twine only publishes built packages; it does not build them itself.',
    useCases: [],
    dependsOn: [],
  },

  {
    features: ['build packages'],
    toolDescription:
      'Setuptools is a fully-featured, actively-maintained, and stable library designed to facilitate packaging Python projects. setuptools builds redistributable packages from source, but does not publish them to PyPI.',
    useCases: [],
    dependsOn: [],
    name: 'setuptools',
  },
  {
    features: ['manual virtual environment creation', 'standard library'],
    toolDescription:
      'The venv module provides support for creating lightweight “virtual environments” with their own site directories, optionally isolated from system site directories. Each virtual environment has its own Python binary (which matches the version of the binary that was used to create this environment) and can have its own independent set of installed Python packages in its site directories.',
    useCases: [],
    dependsOn: [],
    createdAt: '2015-09-13T00:00:00Z',
    primaryLanguage: { name: 'Python' },
    name: 'venv',
    url: 'https://docs.python.org/3/library/venv.html',
  },
];

export const recoilFilters = atom<Feature[]>({
  key: 'recoilFilters', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export function FeatureFilter(props: { feature: Feature }) {
  const [filters, setFilters] = useRecoilState<Feature[]>(recoilFilters);
  const filterIsOn = filters.indexOf(props.feature) !== -1;
  return (
    <button
      className={
        (filterIsOn ? `bg-blue-400 text-xs` : `bg-blue-200 text-xs`) +
        ' hover:bg-blue-200 m-1 p-1 rounded-md  '
      }
      onClick={() => {
        if (filterIsOn) {
          setFilters(filters.filter((f) => f !== props.feature));
        } else {
          setFilters([...filters, props.feature]);
        }
      }}
    >
      {props.feature}
    </button>
  );
}

export function getTableData(
  toolData: Array<Tool>,
  featuresToFilter: Array<Feature>,
) {
  return toolData
    .map((data) => ({
      ...data,
      name: data.url ? <a href={data.url}>{data.name}</a> : data.name,
      featureLinks: data.features.map((f, i) => (
        <FeatureFilter key={i} feature={f} />
      )),
      description: <div className="text-left">{data.description}</div>,
      toolDescription: <div className="text-left">{data.toolDescription}</div>,
      dependsOn: data.dependsOn.join(', '),
      useCases: data.useCases.join(', '),
      timeSinceCreated: data.createdAt ? moment(data.createdAt).fromNow() : '',
      timeSinceUpdated: data.pushedAt
        ? `${moment(data.pushedAt).fromNow()}`
        : '',
      urls: [data.url, data.homepageUrl]
        .filter((url) => url)
        .map((url, i) => {
          return (
            <div key={i}>
              <a href={url} className="hover:bg-yellow-200 text-xs">
                {url}
              </a>
            </div>
          );
        }),
    }))
    .filter((data) => {
      if (featuresToFilter.length) {
        return featuresToFilter.every((f: Feature) =>
          data.features.includes(f),
        );
      } else {
        return true;
      }
    });
}

export async function fetchGithubData(): Promise<any> {
  const response = await fetch('package_data');
  const allGithubData: GithubRepo[] = await response.json();
  return initialToolData.map((tool) => {
    const githubData: GithubRepo | void = allGithubData.find(
      (d) => d.name === tool.name,
    );
    if (githubData) {
      return { ...tool, ...githubData };
    } else {
      console.warn(`No github data found for ${tool.name}`);
      return tool;
    }
  });
}
