import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export default function createStore(name, callback, options = {}) {
  const { ...rest } = options;

  const store = create()(
    devtools(
      persist(callback, {
        ...rest,
        name: options?.name || name,
      })
    )
  );

  return store;
}
