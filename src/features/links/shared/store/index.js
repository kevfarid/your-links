import createStore from 'core/store/createStore';

export const useUrls = createStore('urls', (set, get) => ({
  urls: [],
  addUrl: async (url) => {
    set({
      urls: [url, ...get().urls],
    });

    return Promise.resolve();
  },
  removeUrl: async (index) => {
    const urls = get().urls.filter((_, i) => i !== index);

    set({
      urls,
    });

    return Promise.resolve();
  },
}));
