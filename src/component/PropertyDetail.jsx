import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Box,
} from '@chakra-ui/react'
import { PropertyImages } from './PropertyImages'
import PropertyDetaildesc from './PropertyDetaildesc'
export const PropertyDetail = ({isOpen, onOpen, onClose , purpose}) => {
  return (
   
      <Modal isOpen={isOpen} onClose={onClose} size="6xl" scrollBehavior='inside'>
          <ModalOverlay
        //   bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(20deg)'
          />
          <ModalContent>
              <ModalHeader>{purpose}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                  <Flex flexWrap="wrap">
                      <Box width="50%" minWidth="25rem">
                          <Flex justifyContent="center" alignItems={"center"} >
                              <Box flexBasis="100%" width="100%">
                                <PropertyImages />
                              </Box>
                          </Flex>
                      </Box>  
                      <Box width="50%" minWidth="25rem">
                        <PropertyDetaildesc/>
                      </Box>  
                  </Flex>
              </ModalBody>
              <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant='ghost'>Secondary Action</Button>
              </ModalFooter>
          </ModalContent>
      </Modal>
  )
}
