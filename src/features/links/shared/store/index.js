import createStore from 'core/store/createStore';

export const useUrls = createStore('urls', (set, get) => ({
  urls: [],
  addUrl: async (url) => {
    set({
      urls: [url, ...get().urls]
    });

    return Promise.resolve();
  },
  removeUrl: async (url) => {
    const urls = get().urls.filter((item) => item !== url);

    set({
      urls,
    });

    return Promise.resolve();
  },
}));
