const repoBasePath = '/tunjiangquan';
const productionBasePath = process.env.NODE_ENV === 'production' ? repoBasePath : '';

const absoluteUrlPattern = /^(?:[a-z]+:)?\/\//i;

export const assetUrl = (path: string) => {
  if (!path) {
    return path;
  }

  if (absoluteUrlPattern.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${productionBasePath}${normalizedPath}`;
};
