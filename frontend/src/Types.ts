export type GithubGraphqlShape = {
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
  latestRelease?: {
    publishedAt: string;
  };
};

export type Tool = {
  name: string;
  features: Feature[];
  toolDescription: string;
  dependsOn: string[];
  useCases: string[];
} & GithubGraphqlShape;

export type Feature =
  | 'core utilities'
  | 'publish packages'
  | 'build packages'
  | 'language bindings'
  | 'builds executable'
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
  | 'PEP-440'
  | 'PEP-425'
  | 'PEP-582'
  | 'PEP-518'
  | 'PEP-517'
  | 'PEP-660';

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
