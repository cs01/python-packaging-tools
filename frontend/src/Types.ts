import React from 'react';

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
  toolDescription: string | React.ReactElement;
  dependsOn: string[];
  useCases: string[];
} & GithubGraphqlShape;

export type Feature =
  | 'application deployment'
  | 'build packages'
  | 'builds executable'
  | 'convert between lockfile formats'
  | 'core utilities'
  | 'dependency resolver'
  | 'ecosystem'
  | 'install cli apps'
  | 'install libraries'
  | 'install Python interpreter'
  | 'language bindings'
  | 'manual virtual environment creation'
  | 'package manager'
  | 'PEP-425'
  | 'PEP-440'
  | 'PEP-517'
  | 'PEP-518'
  | 'PEP-582'
  | 'PEP-660'
  | 'publish packages'
  | 'security'
  | 'standard library'
  | 'task automation'
  | 'virtual environment management';

// TODO find out how to programmatically link this to the type
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
