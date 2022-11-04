import React, { ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { SESSION_STATUS } from '@app/constants';

type PreloaderProps = {
  children: ReactNode;
}

export const Preloader: React.FC<PreloaderProps> = ({ children }) => {
  const { status } = useSession();

  if (status === SESSION_STATUS.LOADING) return <p>Loading</p>;

  return <>{children}</>;
}