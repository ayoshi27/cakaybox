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
 * nuxtのuseFetchにqueryパラメータをオブジェクトで渡せるようにしたwrapper
 * @param url - APIのURL
 * @param params - APIのパラメータ
 */
export const useAsyncApiFetchData = <T>(url: string, params?: any) => {
  const runtimeConfig = useRuntimeConfig();
  const apiBase = runtimeConfig.public.apiBase;
  const queryString = createFetchParams(params);
  return useFetch<T>(`${apiBase}/${url}${queryString}`, {
    immediate: false,
    watch: false,
  });
};

/**
 * nuxtのuseFetch（POST）にqueryパラメータをオブジェクトで渡せるようにしたwrapper
 * @param url - APIのURL
 * @param params - APIのパラメータ
 */
export const usePostData = (url: string, params?: any) => {
  const runtimeConfig = useRuntimeConfig();
  const apiBase = runtimeConfig.public.apiBase;
  return useFetch(`${apiBase}/${url}`, {
    method: "POST",
    body: params,
    immediate: false,
    watch: false,
  });
};

/**
 * nuxtの$fetch（DELETE）にパラメータをオブジェクトで渡せるようにしたwrapper
 * @param url - APIのURL
 * @param id - 削除するレコードのID
 */
export const deleteData = (url: string, id: number) => {
  const runtimeConfig = useRuntimeConfig();
  const apiBase = runtimeConfig.public.apiBase;
  return $fetch(`${apiBase}/${url}/${id}`, {
    method: "DELETE",
    immediate: false,
    watch: false,
  });
};
