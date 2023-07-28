import { useEffect } from 'react';

import styled from '@emotion/styled';
import { Flex, Popover, PopoverTrigger, PopoverContent, Icon } from '@tonic-ui/react';
import { debounce as _debounce } from 'lodash-es';
import { Rnd } from 'react-rnd';

import MaskBox from './components/MaskBox';
import { useAppSelector, useAppDispatch } from '@/redux/useReactRedux';
import { dimensions } from '~/src/configs/dimensionsConfig';
import {
  startResizeDrag,
  finishResizeDrag,
  setFloatButtonPosition,
} from '~/src/modules/WebComponent/slice/floatButtonControlSlice';

const TeamIcon = styled(Flex)`
  width: ${dimensions.floatButtonWidth}px;
  height: ${dimensions.floatButtonHeight}px;
  border-radius: 50%;
  background-color: #303030;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.92);

  cursor: pointer;
  &:hover {
    background-color: #6f6f6f;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.19);
`;

function WebComponent() {
  const { floatButtonX: x, floatButtonY: y } = useAppSelector(
    (state) => state.floatButtonControlState,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleWindowResize = _debounce(() => {
      console.log('windowResizing');
    }, 150);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [dispatch]);

  const handleDragStop = (e, d) => {
    dispatch(
      setFloatButtonPosition({
        x: d.x,
        y: d.y,
      }),
    );
    dispatch(finishResizeDrag());
  };

  return (
    <MaskBox>
      <Rnd
        default={{
          x,
          y,
          width: dimensions.floatButtonWidth,
          height: dimensions.floatButtonHeight,
        }}
        position={{
          x,
          y,
        }}
        style={{
          visibility: 'visible',
          position: 'fixed',
          transition: 'all .2s',
          zIndex: '9999',
        }}
        dragHandleClassName="dla_header"
        onDragStart={() => {
          dispatch(startResizeDrag());
        }}
        onDragStop={handleDragStop}
        bounds="window"
        enableResizing={false}
      >
        <Flex alignItems="center" justifyContent="center" height="100%" width="100%">
          <Popover isOpen placement="top">
            <PopoverTrigger>
              <TeamIcon className="dla_header">
                <Icon icon="user-team" width={24} height={24} />
              </TeamIcon>
            </PopoverTrigger>
            <PopoverContent
              PopperProps={{
                modifiers: [
                  {
                    // https://popper.js.org/docs/v2/modifiers/flip/
                    name: 'flip',
                    enabled: true,
                  },
                ],
              }}
            >
              Popover
            </PopoverContent>
          </Popover>
        </Flex>
      </Rnd>
    </MaskBox>
  );
}

export default WebComponent;
