import { Link  } from 'react-router-dom';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'
import Logo from "../assets/images/DarkBlueLogoText.svg"
const NavBar = () => (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
        <Box w="200px" h="50px">
            {/* <Link to="/"> */}
            
                <img src={Logo} alt="Eyita Logo" />
            {/* </Link>     */}
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu/>} variant="outlined" color="red.400" />
                <MenuList>
                    <Link to='/' >
                        <MenuItem icon={<FcHome/>} >Home</MenuItem>
                    </Link>
                    <Link to='/' >
                        <MenuItem icon={<BsSearch/>} >Search</MenuItem>
                    </Link>
                    <Link to='/' >
                        <MenuItem icon={<FcAbout/>} >Buy Property</MenuItem>
                    </Link>
                    <Link to='/' >
                        <MenuItem icon={<FiKey/>} >Rent Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
)

export default NavBar;