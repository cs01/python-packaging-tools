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
