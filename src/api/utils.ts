const buildEntityUrl = (baseUrl: string, ids: number | number[]): string => {
  const idsParam = Array.isArray(ids) ? ids.join(",") : ids.toString();
  return `${baseUrl}/${idsParam}`;
};

export default buildEntityUrl;
