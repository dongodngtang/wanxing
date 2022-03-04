import { useCallback, useState } from "react";

interface Config<P> {
  isModalOpen: boolean;
  params?: P;
}

export const useModalOpen = <T>() => {
  const [{ isModalOpen, params }, setModalOpen] = useState<Config<T>>({
    params: undefined,
    isModalOpen: false,
  });

  const open = useCallback(
    (params: T) => setModalOpen({ isModalOpen: true, params }),
    [setModalOpen]
  );

  const close = useCallback(
    () => setModalOpen({ isModalOpen: false, params: undefined }),
    [setModalOpen]
  );

  return {
    isModalOpen,
    params,
    open,
    close,
  };
};
