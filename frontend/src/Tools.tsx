import { GithubGraphqlShape, Tool, Feature, features } from './Types';
import React from 'react';
import { useTable, useSortBy, useFlexLayout } from 'react-table';
import { DateTime } from 'luxon';
import { atom, useRecoilState } from 'recoil';
import { initialToolData } from './initialToolData';

const downArrow = (
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
);

const upArrow = (
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
      strokeWidth="2"
      d="M5 10l7-7m0 0l7 7m-7-7v18"
    />
  </svg>
);

export const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    // width: 400,
  },
  {
    Header: 'Features',
    accessor: 'featureLinks',
    minWidth: 300,
  },
  {
    Header: 'Description',
    accessor: 'toolDescription',
    minWidth: 400,
    // width: 100,
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
    minWidth: 300,
  },
  {
    Header: 'GitHub Description',
    accessor: 'description',
    minWidth: 400,
  },
  {
    Header: 'Last GitHub Release',
    accessor: 'latestRelease.publishedAt',
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
    useFlexLayout,
  );

  // Render the UI for your table
  return (
    <table
      {...getTableProps()}
      className="text-center border-2 border-gray-200"
      // style={{ width: '5000px' }}
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
                  {column.isSorted
                    ? column.isSortedDesc
                      ? downArrow
                      : upArrow
                    : ''}
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
                    // style={{ width: '500px' }}
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
        ' m-1 p-1 rounded-md  '
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

export function toolDataToTableData(
  toolData: Array<Tool>,
  featuresToFilter: Array<Feature>,
) {
  return toolData
    .map((data: Tool) => ({
      ...data,
      stargazers: data.stargazers?.totalCount
        ? { totalCount: `⭐ ${data.stargazers.totalCount.toLocaleString()}` }
        : null,
      name: (
        <div className="font-bold text-lg">
          {data.url ? <a href={data.url}>{data.name}</a> : data.name}
        </div>
      ),
      featureLinks: data.features
        .sort()
        .map((feature, i) => <FeatureFilter key={i} feature={feature} />),
      description: <div className="text-left">{data.description}</div>,
      toolDescription: <div className="text-left">{data.toolDescription}</div>,
      dependsOn: data.dependsOn.sort().join(', '),
      useCases: data.useCases.join(', '),
      latestRelease: data.latestRelease
        ? {
            publishedAt: DateTime.fromISO(
              data.latestRelease.publishedAt,
            ).toFormat('MMMM dd, y'),
          }
        : '',
      timeSinceCreated: data.createdAt
        ? DateTime.fromISO(data.createdAt).toFormat('MMMM, y')
        : '',

      timeSinceUpdated: data.pushedAt
        ? DateTime.fromISO(data.pushedAt).toLocaleString()
        : '',
      urls: [data.url, data.homepageUrl]
        .filter((url) => url)
        .map((url, i) => {
          return (
            <div key={i}>
              <a href={url} className="hover:bg-yellow-300 ">
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

function mergeGithubDataWithLocalData(
  allGithubData: GithubGraphqlShape[],
): Tool[] {
  return initialToolData.map((tool) => {
    const githubDataForTool: GithubGraphqlShape | void = allGithubData.find(
      (d) => d.name?.toLocaleLowerCase() === tool.name.toLocaleLowerCase(),
    );
    if (githubDataForTool) {
      return { ...tool, ...githubDataForTool };
    } else {
      console.warn(`No github data found for ${tool.name}`);
      return tool;
    }
  });
}

export async function fetchGithubData(): Promise<any> {
  const response = await fetch('package_data');
  if (!response.ok) {
    console.warn('GitHub data unavailable');
    return initialToolData;
  }

  const allGithubData: GithubGraphqlShape[] = await response.json();
  return mergeGithubDataWithLocalData(allGithubData);
}
