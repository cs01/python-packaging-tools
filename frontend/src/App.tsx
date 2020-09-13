import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import {
  columns,
  getTableData,
  Table,
  fetchGithubData,
  initialToolData,
  features,
  Feature,
  recoilFilters,
  FeatureFilter,
} from './Tools';
import { RecoilRoot, useRecoilValue } from 'recoil';

interface AppProps {}

function FeatureFilters() {
  return (
    <>
      {features.map((feature: Feature, i) => (
        <FeatureFilter key={i} feature={feature} />
      ))}
    </>
  );
}

function FeaturesAndTable() {
  useEffect(() => {
    async function _fetchGithubData() {
      setToolData(await fetchGithubData());
    }
    _fetchGithubData();
  }, []);

  const [toolData, setToolData] = useState(initialToolData);
  const featureFilters = useRecoilValue(recoilFilters);
  const data = useMemo(() => getTableData(toolData, featureFilters), [
    toolData,
    featureFilters,
  ]);
  return (
    <>
      <FeatureFilters />
      <Table columns={columns} data={data} />
    </>
  );
}

function App() {
  return (
    <RecoilRoot>
      <div className="w-full h-full content-center  items-center flex flex-col">
        <nav className="bg-blue-800 p-2 w-full mb-10">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div className="pl-4 flex items-center">
              <img
                alt="Python logo"
                src="https://www.python.org/static/img/python-logo.png"
              />
              <div className="text-white text-xl">
                The Big List of Python Packaging and Distribution Tools
              </div>
            </div>
          </div>
        </nav>
        <div className="container w-full mx-15">
          <FeaturesAndTable />
        </div>
        <footer className="w-full flex items-center bg-black mt-20 h-64 text-white ">
          <div className="w-full text-center">
            <a href="http://grassfedcode.com">grassfedcode.com</a>
          </div>
        </footer>
      </div>
    </RecoilRoot>
  );
}

export default App;
