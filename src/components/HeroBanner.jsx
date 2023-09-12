import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
    return (
        <div>
            <Stack direction="row" justifyContent="space-around">
                <Box sx={{
                    mt: { lg: '212px', xs: '70px' },
                    ml: { sm: '50px' }
                }} position="relative" p="20px">

                    <Typography color="#FF2625" fontWeight="600" fontSize="26px">
                        Fitness Club
                    </Typography>

                    <Typography fontWeight={700} sx={{
                        fontSize: { lg: '44px', xs: '40px' }
                    }} lineHeight="50px">
                        Sweat, Smile <br /> and Repeat
                    </Typography>

                    <Typography fontSize="22px" lineHeight="35px" mb={3}>
                        Check out the most effective exercises
                    </Typography>

                    <Button variant='contained' color="error" href="#exercises">Explore Exercises</Button>


                </Box>
                <Box>
                    <img src={HeroBannerImage} alt="banner" className='hero-banner-img' />
                </Box>
            </Stack>

        </div>
    )
}

export default HeroBanner