import { useRef } from 'react';

import styled from '@emotion/styled';
import { TonicProvider, Box, TextLabel, Space, Stack, Flex } from '@tonic-ui/react';

import DemoModal from '@/components/DemoModal';
import MenuIcon from '@/components/MenuIcon';
import Layout from '@/Layout';

const SideNav = styled.div`
  width: 64px !important;
  position: fixed;
  flex: 0 0 64px !important;
  left: 0px;
  height: 100vh;
  background-color: #000;
  min-width: 64px !important;
  max-width: 64px !important;
`;

const PageMain = styled(Box)`
  margin-left: 64px;
`;

const Header = styled(Flex)`
  height: 48px;
  background-color: #2c2c2c;
  padding: 0 2px 0 20px;
  border-bottom: 1px #111 solid;
  line-height: 40px;
  box-shadow: 0 0 2px #0000001a;
  align-items: center;
  flex-wrap: nowrap;
`;

const TM = styled.p`
  color: #fff;
  font-size: 24px;
  line-height: 40px;
  height: 40px;
  cursor: pointer;
  margin-bottom: 1em;
`;

const Divider = styled.div`
  margin: 0 8px;
  border-left: 1px solid rgba(255, 255, 255, 0.12);
  border-top: 0;
  display: inline-block;
  background: #424242;
  height: 20px;
  width: 1px;
  top: 0;
  vertical-align: middle;
`;

const Content = styled.div`
  overflow: auto;
  height: calc(100vh - 48px);
`;

function HomePageSimulator() {
  const mainContentRef = useRef<HTMLDivElement>(null);
  return (
    <TonicProvider colorMode={{ defaultValue: 'dark' }} useCSSBaseline>
      <Layout simulate>
        <Box height="100vh" style={{ backgroundColor: 'rgb(21, 21, 21)' }}>
          <SideNav>
            <Stack height="100%" justifyContent="space-around">
              <MenuIcon />
              <MenuIcon />
            </Stack>
          </SideNav>
          <PageMain>
            <Header>
              <Flex alignItems="center" justifyContent="space-between" width="100%">
                <Flex alignItems="center">
                  <TM>TX One™</TM>
                  <Divider />
                  <TextLabel fontSize={14}>breadcrumb (localhost)</TextLabel>
                </Flex>
                <MenuIcon />
              </Flex>
            </Header>
            <Content>
              <Stack
                height="100%"
                width="100%"
                direction="column"
                justifyContent="center"
                alignItems="center"
                ref={mainContentRef}
              >
                <TextLabel fontSize="48px">TXone Platform</TextLabel>
                <Space height="4x" />
                <MenuIcon
                  defaultPlacementX="bottom"
                  defaultPlacementY="start"
                  parentRef={mainContentRef}
                />
                <Space height="4x" />
                <DemoModal />
              </Stack>
            </Content>
          </PageMain>
        </Box>
      </Layout>
    </TonicProvider>
  );
}

export default HomePageSimulator;
