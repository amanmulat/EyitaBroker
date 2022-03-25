import { Box, Flex, Text } from "@chakra-ui/react"
import {BsWifi2} from "react-icons/bs"
import { BsGridFill , BsBuilding } from 'react-icons/bs';
import {BiBed} from 'react-icons/bi';
import { FaBed, FaBath } from 'react-icons/fa';

export const PropertyFeature = ({wifi , rooms , baths , area  , residential , appartment}) => {
  return (
   <Box>
       { appartment && 
        <Flex alignItems="start" paddingBottom={'2'}> 
            <BsBuilding  size={20} /> <Text paddingLeft={"2"}>Appartment</Text> 
        </Flex>
        }
        { rooms && 
            <Flex alignItems="start" paddingBottom={'2'}>
                <BiBed  size={20} /> <Text paddingLeft={"2"}>{rooms}</Text> 
            </Flex>
        }
        { baths && 
        <Flex alignItems="start" paddingBottom={'2'}>
            <FaBath  size={20} /> <Text paddingLeft={"2"}>{baths}</Text> 
        </Flex>
        }
        {area && 
        <Flex alignItems="start" paddingBottom={'2'}>
            <BsGridFill  size={20} /> <Text paddingLeft={"2"}>{area} sqmt</Text> 
        </Flex>     
        }
        { wifi && 
        <Flex alignItems="start" paddingBottom={'2'}> 
            <BsWifi2  size={20} /> <Text paddingLeft={"2"}>Wifi Available</Text> 
        </Flex>
        }
   </Box>
  )
}
