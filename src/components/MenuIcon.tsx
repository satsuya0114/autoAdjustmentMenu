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

import IconButton from './IconButton';

const MainIconBtn = styled(IconButton)`
  width: 50px;
  height: 50px;
  background-color: pink;
  border-radius: 50%;
`;

const MenuIcon = (props) => {
  console.log('MenuIcon');
  return (
    <Menu>
      <MenuToggle>
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
              enabled: true,
            },
          ],
        }}
      >
        <MenuList maxHeight={200} overflow="auto" width={200}>
          {Array.from({ length: 100 }).map((_, key) => (
            // eslint-disable-next-line react/no-array-index-key
            <MenuItem key={`menuItem-${key}`}>
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
