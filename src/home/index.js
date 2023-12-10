import Img1 from "../../src/img/bgg.jpg"
import { Box, Typography, Button } from '@mui/material';
import "../../src/home.css"
import { useState } from "react";

function Home() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Box >
            <Box sx={styles.HomeBox}>
                <Box sx={styles.words}>
                    <Typography sx={styles.TypoHome1}>FRESH COFFE IN THE MORNING</Typography>
                    <Typography sx={styles.TypoHome2}>Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Quidem Accusamus Voluptatibus Officia Nesciunt Totam Perspiciatis?</Typography>
                    <Button variant='standart' 
                     className={`animated-button ${isHovered ? 'hovered' : ''}`}
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}  sx={styles.TypoHome3}>Get yours now</Button>
                </Box>
            </Box>

        </Box>
    )
}

export default Home

const styles = {
    HomeBox: {
        minHeight: '91vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `url(${Img1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    words: {
        maxWidth: '60rem',
        marginLeft: { md: '100px', xs: '3%' },
        textAlign: {md:'left', xs: 'center'}
    },
    TypoHome1: {
        fontSize: {md:'4rem', xs:'2rem'},
        textTransform: 'uppercase',
        color: '#fff',
        fontWeight: 900,
    },
    TypoHome2: {
        fontSize: {md:' 1.3rem', xs:'0.8rem'},
        fontWeight: 'lighter',
        color: '#eee',
        lineHeight: '1.8',
        padding: '1rem 0',
    },
    TypoHome3: {
        marginTop: '1rem',
        display: 'inline-block',
        padding: '.4rem 1.5rem',
        fontSize: {md:'1rem', xs:'.7rem'},
        color: '#fff',
        background: '#d3ad7f',
        cursor: 'pointer',
        "&:hover": {
            // width:'220px',
            background: '#d3ad7f',
            // letterSpacing:'1.2'
        },
        fontWeight:'bold',
        transition: 'width 7s',
    }
}