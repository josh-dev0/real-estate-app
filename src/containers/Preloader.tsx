import React, { ReactNode, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRecoilState } from "recoil";
import { SESSION_STATUS } from '@app/constants';
import { jwtState, publicProfileState } from '@app/stores';

type PreloaderProps = {
  children: ReactNode;
}

/**
 * @name Preloader
 * @description
 */
export const Preloader: React.FC<PreloaderProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const [, setJWT] = useRecoilState(jwtState);
  const [, setPublicProfile] = useRecoilState(publicProfileState);

  useEffect(() => {
    setJWT(session?.token || null);
    setPublicProfile(session?.user || null);
  }, [session]);

  if (status === SESSION_STATUS.LOADING) return <p>Loading</p>;

  return <>{children}</>;
}