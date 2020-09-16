export type GithubRepo = {
  stargazers?: {
    totalCount: number;
  };
  pushedAt?: string;
  createdAt?: string;
  description?: string;
  name?: string;
  issues?: {
    totalCount: number;
  };
  licenseInfo?: {
    name: string;
  };
  primaryLanguage?: {
    name: string;
  };
  owner?: string;
  url?: string;
  homepageUrl?: string;
};

export type Tool = {
  name: string;
  features: Feature[];
  toolDescription: string;
  dependsOn: string[];
  useCases: string[];
} & GithubRepo;

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
  | 'virtual environment management'
  | 'package manager'
  | 'ecosystem'
  | 'convert between lockfile formats'
  | 'PEP-518'
  | 'PEP-517';

// TODO find out how to programatically link this to the type
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
  'package manager',
  'convert between lockfile formats',
  'ecosystem',
  'PEP-517',
  'PEP-518',
].sort();
