import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

export const useSocketIO = <T,>(
  connectionUrl: string,
  socketPath: string,
  callback: (message: T) => void
) => {
  const scRef = useRef<Socket>();

  useEffect(() => {
    const sc = io(connectionUrl, {
      // transports: ['websocket'],
      path: socketPath,
    });

    scRef.current = sc;

    sc.on('new-message', args => {
      if (args) {
        callback(args);
      }
    });

    return () => {
      if (sc.active) {
        sc.close();
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectionUrl, socketPath]);

  const sendMessage = (message: T) => {
    if (scRef && scRef.current) {
      scRef.current.emit('send-message', message);
    }
  };

  return { sendMessage };
};
