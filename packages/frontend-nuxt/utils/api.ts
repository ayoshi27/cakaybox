/**
 * 任意のオブジェクトをクエリパラメータ文字列に変換する
 * @param params - APIのパラメータとして渡す任意のオブジェクト
 */
export const createFetchParams = (params: { [K: string]: string }) => {
  return (
    "?" +
    Object.keys(params || {})
      .map((key) => `${key}=${params[key]}`)
      .join("&")
  );
};

/**
 * nuxtのuseAsyncDataにqueryパラメータをオブジェクトで渡せるようにしたwrapper
 * @param url - APIのURL
 * @param params - APIのパラメータ
 */
export const useAsyncApiFetchData = <T>(url: string, params?: any) => {
  const runtimeConfig = useRuntimeConfig();
  const apiBase = runtimeConfig.public.apiBase;
  const queryString = createFetchParams(params);
  return useAsyncData<T>(url, () => $fetch(`${apiBase}/${url}${queryString}`));
};
