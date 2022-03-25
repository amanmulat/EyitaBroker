import React from 'react'
import { Box, Grid, GridItem } from '@chakra-ui/react'
export const PropertyImages = () => {
    return (
        <Box overflowY={"scroll"} height="60vh">
            <Grid
                h='1000px'
                templateRows='repeat(10, 1fr)'
                templateColumns='repeat(6, 1fr)'
                w="100%"
                >
                <GridItem rowSpan={3} colSpan={6} bg='black'/>
                <GridItem rowSpan={2} colSpan={3} bg='papayawhip' />
                <GridItem rowSpan={2} colSpan={3} bg='facebook.500' />
                <GridItem rowSpan={2} colSpan={6} bg='tomato' />
            </Grid>

        </Box>
        )

}

