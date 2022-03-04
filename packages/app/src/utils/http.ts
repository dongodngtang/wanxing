type KeyValue = { [key in string]: any };

interface Config extends RequestInit {
  data?: KeyValue;
  token?: string;
}

const getParamsString = (data?: KeyValue) => {
  if (!data) return '';
  return Object.keys(data)
    .map((key) => `${key}=${data[key]}`)
    .join('&');
};

export const http = (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config,
) => {
  const config = {
    method: 'GET', // 默认
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : '',
    },
    ...customConfig,
  };
  if (config.method.toUpperCase() === 'GET') {
    // get方法参数拼到url后面
    endpoint += `?${getParamsString(data)}`; // ?a=1&b=2
  } else {
    config.body = JSON.stringify(data || {});
  }
  // todo 还要判断token失效的返回值，待定
  return window.fetch(endpoint, config).then(async (response) => {
    if (response.ok) {
      const result = await response.json();
      if (result.code === 0) {
        return result.data;
      } else {
        return Promise.reject(result.message);
      }
    } else {
      return Promise.reject(response.text());
    }
  });
};
