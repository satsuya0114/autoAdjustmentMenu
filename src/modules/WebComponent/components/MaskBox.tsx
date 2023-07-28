import { useState, useEffect, ReactNode } from 'react';

import { Box } from '@tonic-ui/react';

import { useAppSelector } from '@/redux/useReactRedux';

const MaskBox = (props: { children: ReactNode }) => {
  const { children } = props;
  // resize / drag mouse issue
  const [maskSize, setMaskSize] = useState({ width: '0', height: '0' });
  const { isResizingDragging } = useAppSelector((state) => state.floatButtonControlState);

  useEffect(() => {
    if (isResizingDragging)
      setMaskSize({
        width: '100%',
        height: '100%',
      });
    else
      setMaskSize({
        width: '0',
        height: '0',
      });
  }, [isResizingDragging]);

  return (
    <Box
      backgroundColor="transparent"
      position="fixed"
      left={0}
      top={0}
      zIndex="8888"
      {...maskSize}
    >
      {children}
    </Box>
  );
};

export default MaskBox;
