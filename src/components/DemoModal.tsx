import { useState, useRef } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
  Button,
  Stack,
  Flex,
} from '@tonic-ui/react';

import MenuIcon from './MenuIcon';

const DemoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const modalBodyRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Button onClick={openModal}>Open a Modal</Button>
      <Modal isOpen={isOpen} isClosable onClose={closeModal}>
        <ModalOverlay />
        <ModalContent width={480}>
          <ModalHeader>
            <Text>Header</Text>
          </ModalHeader>
          <ModalBody>
            <Stack height={300} justifyContent="space-between" id="modalBody" ref={modalBodyRef}>
              <Text>This is a Modal.</Text>
              <Flex justifyContent="space-between">
                <MenuIcon parentRef={modalBodyRef} />
                <MenuIcon parentRef={modalBodyRef} />
              </Flex>
              <Flex justifyContent="space-between">
                <MenuIcon parentRef={modalBodyRef} />
                <MenuIcon parentRef={modalBodyRef} />
              </Flex>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Text>Footer</Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DemoModal;
