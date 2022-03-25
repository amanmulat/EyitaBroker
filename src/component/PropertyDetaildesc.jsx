import { Avatar, Box, Flex, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import { PropertyFeature } from './PropertyFeature';
const PropertyDetaildesc = ({isVerified="true", price="200,000"  , rooms=4 , baths=4 , area= 56, rentFrequency="Yearly" , agency }) => {
  return (
    <Box w='full' p='6'>
        <Box>
            <Flex paddingTop='2' alignItems='center'>
                <Text fontWeight='semibold' fontSize='2xl'>
                    Birr {price} {rentFrequency && `/${rentFrequency}`}
                </Text>
                <Spacer />
            </Flex>
            <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' >
                {rooms}<FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
            </Flex>
            <Box>
                <Text fontWeight="semibold" fontSize="md">
                    For Rent
                </Text>
            </Box>
        </Box>
        <Box paddingTop="6">
            <Tabs>
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Features</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel  paddingLeft="0" paddingRight="0">
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magnam et esse, delectus, sequi fugiat nostrum, labore maiores excepturi ratione commodi asperiores officia?
                        </Text>
                        <br/>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magnam et esse, delectus, sequi fugiat nostrum, labore maiores excepturi ratione commodi asperiores officia?
                        </Text>
                    </TabPanel>
                    <TabPanel>
                        <PropertyFeature wifi area={5800} rooms={4} baths={4} appartment/>
                    </TabPanel>
                    <TabPanel>
                        fjsdklaj
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    </Box>
    
  )
}

export default PropertyDetaildesc