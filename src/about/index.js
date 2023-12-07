import { Box, Typography, Button } from '@mui/material';
import Img2 from "../../src/img/aboutbg.jpg"

function About() {
    return (
        <Box>
            <Typography sx={styles.TypoAbout1}>
                About <Typography sx={styles.TypoAbout2}>US</Typography>
            </Typography>
            <Box sx={styles.BoxContainer}>
                <Box sx={styles.Box1}></Box>
                <Box sx={styles.Box2}>
                    <Typography sx={styles.TypoAbout3} >What Makes Our Coffee Special?</Typography>
                    <Typography sx={styles.TypoAbout4} >Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Rem Deleniti Ex Eum Excepturi Illum Rerum In Molestias, Ad Dolorum Sequi Similique Iusto Consequuntur Assumenda. Architecto Sit Cumque Molestias Obcaecati Excepturi.</Typography>
                    <Typography sx={styles.TypoAbout4} >Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Hic Rem Quo Minus Ducimus Modi Quos Ad Eligendi Repellat Libero.</Typography>
                    <Button variant='standart' sx={styles.TypoHome3}>Get yours now</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default About

const styles = {
    TypoAbout1: {
        textAlign: 'center',
        color: ' #fff',
        textTransform: 'uppercase',
        paddingBottom: ' 3rem',
        paddingTop: {md:'3rem', xs:'5rem'},
        fontSize: '3rem',
        display: 'flex',
        justifyContent: 'center',
        fontWeight:'bolder'
    },
    TypoAbout2: {
        color: '#d3ad7f',
        textTransform: 'uppercase',
        fontSize:'3rem',
        fontWeight:'bolder'
    },
    BoxContainer: {
        display: 'flex',
        alignItems: 'center',
        background: '#13131a',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: {md:'80%', xs:'100%'},
        height:{md:'450px', xs:'700px'},
        margin:{md:'1px 10%', xs:'1%'}
    },
    Box1: {
        backgroundImage: `url(${Img2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: {md:'450px', xs:'270px'},
        width: {md:'50%', xs:'100%'},
    },
    Box2: {
        padding: '1rem',
        width: {md:'50%', xs:'100%'},
        height:{md:'450px', xs:'700px'},
        textAlign:'left'
    },
    TypoAbout3: {
        fontSize: '2.2rem',
        color: '#fff',
    },
    TypoAbout4: {
        fontSize: {md:'1.3rem', xs:'0.9rem'},
        color: '#ccc',
        padding: '.5rem 0',
        lineHeight: '1.8',
    },
    TypoHome3: {
        marginTop: '1rem',
        display: 'inline-block',
        padding: '.5rem 2rem',
        fontSize: { md: '1rem', xs: '.7rem' },
        color: '#fff',
        background: '#d3ad7f',
        cursor: 'pointer',
        "&:hover": {
            letterSpacing: '.2rem',
            background: '#d3ad7f',
            width:'320px'
        },
        fontWeight: 'bold',
        transition: 'width 7s',
    }
}