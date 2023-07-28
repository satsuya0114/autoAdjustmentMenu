import { Button } from '@tonic-ui/react';
// import { Button, useColorMode, useColorStyle } from '@tonic-ui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { sx } from '@tonic-ui/styled-system';

function ButtonCommon({ ...props }) {
  // const [colorMode] = useColorMode();
  // const [colorStyle] = useColorStyle({ colorMode });
  const { bgColor, hoverStyle, activeStyle } = props;

  return (
    <Button
      px="2x"
      bg={bgColor || '#578AEF'}
      _hover={{
        opacity: 0.8,
        ...hoverStyle,
      }}
      _active={activeStyle}
      css={sx({
        ':disabled': {
          opacity: 0.28,
        },
        ':disabled:hover': {
          opacity: 0.28,
        },
        ':focus:not(:active)': {
          border: 'none',
          boxShadow: 'none',
        },
        ':focus': {
          border: 'none',
          boxShadow: 'none',
        },
      })}
      {...props}
    />
  );
}

export default ButtonCommon;
