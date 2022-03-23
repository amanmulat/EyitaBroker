import { Box, Flex, Text, Avatar } from '@chakra-ui/react'
import { FaBed, FaBath } from "react-icons/fa"
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'
import DefaultImage from '../assets/images/house.jpg'
import { Link } from 'react-router-dom'
export default function Property({property : {coverPhoto , price , rentFrequency , rooms , title , baths , area , agency, isVerified , externalID }}) {
  return (
      <Link to="/">
        <Flex w="420px" p="5" paddingTop="0" justifyContent="flex-start" flexWrap="wrap" cursor="pointer">
            <Box>
                <img src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} alt="house" />
            </Box>
            <Box w="full">
                <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center">
                        <Box paddingRight="3" color="green.400">{isVerified && <GoVerified />}</Box>
                        <Text fontWeight="bold" fontSize="lg">Birr {millify(price) }{rentFrequency && `/${rentFrequency}`} </Text>
                    </Flex>
                    <Box>
                        <Avatar size="sm" src={agency?.logo?.url} />
                    </Box>
                </Flex>
                <Flex alignItems={"center"} p="1" justifyContent="space-between" w="250px" color="blue.400">
                    {rooms} <FaBed/> | {baths} <FaBath/> | {millify(area) } sqmt <BsGridFill/>
                </Flex>
                <Text fontSize="lg" >
                    {title.length > 30 ? `${title.substring(0 , 30)}...` : title}
                </Text>
            </Box>
        </Flex>
      </Link>
  )
}