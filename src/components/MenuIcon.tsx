import { useState, RefObject, useRef, useEffect, useCallback } from 'react';

import styled from '@emotion/styled';
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuList,
  MenuToggle,
  Icon,
  Flex,
  Text,
} from '@tonic-ui/react';
import { debounce as _debounce } from 'lodash-es';
import { v4 as uuidV4 } from 'uuid';

const MainIconBtn = styled(Flex)`
  width: 50px;
  height: 50px;
  background-color: pink;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`;

type MenuIconProps = {
  parentRef?: RefObject<HTMLDivElement>;
  defaultPlacementX?: 'top' | 'bottom';
  defaultPlacementY?: 'start' | 'end';
};

const MENU_LIST_WIDTH = 200;

const DEFAULT_LIST_HEIGHT = 250;

const MenuIcon = (props: MenuIconProps) => {
  const { parentRef = null, defaultPlacementX, defaultPlacementY } = props;
  const [placementX, setPlacementX] = useState(defaultPlacementX || 'bottom');
  const [placementY, setPlacementY] = useState(defaultPlacementY || 'start');
  const [menuListMaxHeight, setMenuListMaxHeight] = useState(DEFAULT_LIST_HEIGHT);
  const toggleTargetRef = useRef<HTMLDivElement>(null);
  const menuListRef = useRef<HTMLDivElement>(null);

  const calculatePlacement = useCallback(() => {
    const itemPosition = toggleTargetRef.current?.getBoundingClientRect() || {
      bottom: 0,
      top: 0,
      right: 0,
      left: 0,
    };
    let xPositionCalculate: 'bottom' | 'top' =
      window.innerHeight - itemPosition.bottom > itemPosition.top ? 'bottom' : 'top';
    let yPositionCalculate: 'start' | 'end' =
      window.innerWidth - itemPosition.right > itemPosition.left ? 'start' : 'end';
    if (defaultPlacementX !== xPositionCalculate && defaultPlacementX === 'top') {
      if (itemPosition.top - DEFAULT_LIST_HEIGHT > 0) xPositionCalculate = 'top';
    } else if (defaultPlacementX !== xPositionCalculate && defaultPlacementX === 'bottom') {
      if (itemPosition.bottom + DEFAULT_LIST_HEIGHT < window.innerHeight) {
        xPositionCalculate = 'bottom';
      }
    }
    if (defaultPlacementY !== yPositionCalculate && defaultPlacementY === 'start') {
      if (itemPosition.left + MENU_LIST_WIDTH < window.innerWidth) yPositionCalculate = 'start';
    } else if (defaultPlacementY !== yPositionCalculate && defaultPlacementY === 'end') {
      if (itemPosition.right - MENU_LIST_WIDTH > 0) yPositionCalculate = 'end';
    }
    setPlacementX(xPositionCalculate);
    setPlacementY(yPositionCalculate);
  }, [defaultPlacementX, defaultPlacementY]);

  const calculateHeight = useCallback(() => {
    const itemPosition = toggleTargetRef.current?.getBoundingClientRect() || {
      bottom: 0,
      top: 0,
      right: 0,
      left: 0,
    };
    let elementHeight = window.innerHeight;
    let elementBasic = 0;
    if (parentRef?.current) {
      elementHeight = parentRef?.current?.getBoundingClientRect().bottom;
      elementBasic = parentRef?.current?.getBoundingClientRect().top;
    }
    let height = DEFAULT_LIST_HEIGHT;
    if (placementX === 'bottom') {
      height = Math.min(DEFAULT_LIST_HEIGHT, elementHeight - itemPosition.bottom);
    } else {
      height = Math.min(DEFAULT_LIST_HEIGHT, itemPosition.top - elementBasic);
    }
    setMenuListMaxHeight(height);
  }, [parentRef, placementX]);

  useEffect(() => {
    calculatePlacement();
    calculateHeight();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleWindowResize = _debounce(() => {
      calculatePlacement();
      calculateHeight();
    }, 150);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [calculateHeight, calculatePlacement]);

  return (
    <Menu placement={`${placementX}-${placementY}`}>
      <MenuToggle ref={toggleTargetRef}>
        <MainIconBtn>
          <Icon icon="user-team" size="5x" />
        </MainIconBtn>
      </MenuToggle>
      <MenuContent
        PopperProps={{
          modifiers: [
            {
              // https://popper.js.org/docs/v2/modifiers/flip/
              name: 'flip',
              options: {
                altBoundary: true,
                fallbackPlacements: ['top', 'right'],
                rootBoundary: 'viewport',
              },
              enabled: true,
            },
          ],
        }}
      >
        <MenuList
          maxHeight={menuListMaxHeight}
          overflow="auto"
          width={MENU_LIST_WIDTH}
          ref={menuListRef}
        >
          {Array.from({ length: 100 }).map((_, key) => (
            <MenuItem key={`menuItem-${uuidV4()}`}>
              <Flex alignItems="center" columnGap="2x" justifyContent="space-between" width="100%">
                <Text>List Item {key + 1}</Text>
              </Flex>
            </MenuItem>
          ))}
        </MenuList>
      </MenuContent>
    </Menu>
  );
};

export default MenuIcon;
