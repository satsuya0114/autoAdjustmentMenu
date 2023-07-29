/** @jsxImportSource @emotion/react */
import React from 'react';

import { css, Global } from '@emotion/react';
import { Box, useColorMode, useColorStyle, useTheme } from '@tonic-ui/react';

interface IProps {
  children: React.ReactNode;
  simulate?: boolean;
}

function Layout(props: IProps) {
  const { children, simulate = false } = props;
  const [colorMode] = useColorMode();
  const [colorStyle] = useColorStyle({ colorMode });
  const { fontSizes, lineHeights, colors } = useTheme();
  const backgroundColor = colorStyle.background.primary;
  const color = colorStyle.color.primary;
  const scrollbarThumbBackgroundColor = colorStyle.color.disabled;
  const scrollbarThumbHoverBackgroundColor = colorStyle.color.tertiary;
  const scrollbarThumbHoverBorderColor = colorStyle.color.secondary;
  const scrollbarTrackBackgroundColor = {
    light: 'gray:30',
    dark: 'gray:70',
  }[colorMode];

  const styles = css`
    :root {
      color-scheme: ${colorMode};
      font-size: 16px;
    }
    :focus:not(:focus-visible) {
      outline: none;
    }
    body {
      font-size: ${fontSizes.sm};
      line-height: ${lineHeights.sm};
      overflow: hidden;
    }
    #pendo-base {
      color-scheme: normal;
    }
    * {
      box-sizing: border-box;
    }
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      background-color: ${colors[scrollbarTrackBackgroundColor]};
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${colors[scrollbarThumbBackgroundColor]};
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: ${colors[scrollbarThumbHoverBackgroundColor]};
      border: 1px solid ${colors[scrollbarThumbHoverBorderColor]};
    }
  `;

  return (
    <>
      <Global styles={styles} />
      {simulate ? (
        <Box
          backgroundColor={backgroundColor}
          color={color}
          fontSize="sm"
          lineHeight="sm"
          height="100vh"
          overflowY="hidden"
          overflowX="hidden"
        >
          {children}
        </Box>
      ) : (
        <Box backgroundColor={backgroundColor} color={color} fontSize="sm" lineHeight="sm">
          {children}
        </Box>
      )}
    </>
  );
}

export default Layout;
