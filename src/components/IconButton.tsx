import React, { FC } from 'react';

import { ButtonBase, Spinner, useColorMode, Flex } from '@tonic-ui/react';

interface Props {
  onClick?: React.MouseEventHandler;
  isLoading?: boolean;
  width?: number | string;
  height?: number | string;
  disabled?: boolean;
  hoverColor?: string;
  [restProps: string]: unknown;
}

const IconButton: FC<Props> = (props) => {
  const { isLoading, width, height, hoverColor, ...restProps } = props;
  const [colorMode] = useColorMode();
  const color = {
    dark: 'white:secondary',
    light: 'black:secondary',
  }[colorMode];
  const defaultHoverColor = {
    dark: 'white:primary',
    light: 'black:primary',
  }[colorMode];
  const activeColor = color;
  const focusColor = color;
  const focusHoverColor = hoverColor || defaultHoverColor;
  const focusActiveColor = activeColor;

  return isLoading ? (
    <Flex justifyContent="center" width={width} height={height}>
      <Spinner size="xs" strokeWidth={6} lineWidth={2} trackWidth={2} />
    </Flex>
  ) : (
    <ButtonBase
      border={1}
      borderColor="transparent"
      color={color}
      transition="all .2s"
      lineHeight={1}
      width={width || '8x'}
      height={height || '8x'}
      _hover={{
        color: hoverColor || defaultHoverColor,
      }}
      _active={{
        color: activeColor,
      }}
      _focus={{
        // borderColor: focusBorderColor,
        // boxShadow: `inset 0 0 0 1px ${focusBorderColor}`,
        color: focusColor,
      }}
      _focusHover={{
        color: focusHoverColor,
      }}
      _focusActive={{
        // borderColor: focusBorderColor,
        // boxShadow: `inset 0 0 0 1px ${focusBorderColor}`,
        color: focusActiveColor,
      }}
      _disabled={{
        opacity: 0.28, // dark: 0.28, light: 0.3
        cursor: 'not-allowed',
      }}
      {...restProps}
    />
  );
};

export default IconButton;
