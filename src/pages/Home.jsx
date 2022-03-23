import { Flex } from '@chakra-ui/react'
import React from 'react'
import { propertiesForRent } from '../utils/utils'
import Property from '../component/Property'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
function Home() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Rent A Home</Tab>
          <Tab>Buy Your Home</Tab>
          <Tab>Buy Land</Tab>
        </TabList>
        <TabPanels>
          <TabPanel  paddingLeft="0" paddingRight="0">
            <Flex flexWrap="wrap" >
              {propertiesForRent.map((property) => <Property property={property} key={property.id}/>)}
            </Flex>
          </TabPanel>
          <TabPanel>
             <Flex flexWrap="wrap" >
              {propertiesForRent.map((property) => <Property property={property} key={property.id}/>)}
            </Flex>
          </TabPanel>
         <TabPanel>
             fjsdklaj
          </TabPanel>
        </TabPanels>
      </Tabs>
     
    </div>
  )
}

export default Home