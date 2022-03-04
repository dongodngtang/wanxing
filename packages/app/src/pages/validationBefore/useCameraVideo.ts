import { useCallback, useRef } from 'react';

export const useCameraVideo = () => {
  const videoRef = useRef<HTMLVideoElement>();
  const startVideo = useCallback(() => {
    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        videoRef.current!.srcObject = stream;
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return {
    videoRef,
    startVideo,
  };
};
