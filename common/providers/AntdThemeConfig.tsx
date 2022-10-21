import React, { ReactNode, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { ConfigProvider } from 'antd';
import themeColors from '../../styles/variables.module.scss';

type ThemeProviderProps = {
  children: ReactNode | ReactNode[] | null;
}

export const AntdThemeConfig: React.FC<ThemeProviderProps> = (props) => {
  const { theme, setTheme } = useTheme();
  console.log('theme', theme);

  useEffect(() => {
    ConfigProvider.config({
      theme: {
        primaryColor: themeColors.primaryColor,
      }
    })
  }, [theme]);

  return (
    <>
      {props.children}
    </>
  )
}
