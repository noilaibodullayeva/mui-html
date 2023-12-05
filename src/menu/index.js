import { Box, Button, Typography } from "@mui/material";
import Img3 from '../../src/img/menu2.jpg'
import Img4 from '../../src/img/menu3.jpg'
import Img5 from '../../src/img/menu4.jpg'
import Img6 from '../../src/img/menu5.jpg'
import Img7 from '../../src/img/menu6.jpg'
import Img8 from '../../src/img/menu7.jpg'
import Img9 from '../../src/img/menu8.jpg'

function Menu() {
    return (
        <Box>
            <Typography sx={styles.TypoMenu1}>
                About <Typography sx={styles.TypoMenu2}>US</Typography>
            </Typography>
            <Box sx={styles.boxContainer}>
                <Box sx={styles.box1}>
                    <img src={Img3} alt="" sx={{
                        width: '250px',
                        height: '250px',
                        borderRadius: '50%',
                        overflow: 'hidden'
                    }} />
                    <Typography sx={styles.h3}>Tasty And Healthy</Typography>
                    <Typography sx={styles.price}>$15.99  <Typography sx={styles.span}>$20.00</Typography></Typography>
                    <Button variant='standart' sx={styles.button}>Add to a card</Button>
                </Box>
                <Box sx={styles.box1}>
                    <img src={Img4} alt="" sx={styles.img} />
                    <Typography sx={styles.h3}>Tasty And Healthy</Typography>
                    <Typography sx={styles.price}>$15.99<Typography sx={styles.span}>$20.00</Typography></Typography>
                    <Button variant='standart' sx={styles.button}>Add to a card</Button>
                </Box>
                <Box sx={styles.box1}>
                    <img src={Img5} alt="" sx={styles.img} />
                    <Typography sx={styles.h3}>Tasty And Healthy</Typography>
                    <Typography sx={styles.price}>$15.99<Typography sx={styles.span}>$20.00</Typography></Typography>
                    <Button variant='standart' sx={styles.button}>Add to a card</Button>
                </Box>
                <Box sx={styles.box1}>
                    <img src={Img6} alt="" sx={styles.img} />
                    <Typography sx={styles.h3}>Tasty And Healthy</Typography>
                    <Typography sx={styles.price}>$15.99<Typography sx={styles.span}>$20.00</Typography></Typography>
                    <Button variant='standart' sx={styles.button}>Add to a card</Button>
                </Box>
                <Box sx={styles.box1}>
                    <img src={Img7} alt="" sx={styles.img} />
                    <Typography sx={styles.h3}>Tasty And Healthy</Typography>
                    <Typography sx={styles.price}>$15.99<Typography sx={styles.span}>$20.00</Typography></Typography>
                    <Button variant='standart' sx={styles.button}>Add to a card</Button>
                </Box>
                <Box sx={styles.box1}>
                    <img src={Img8} alt="" sx={styles.img} />
                    <Typography sx={styles.h3}>Tasty And Healthy</Typography>
                    <Typography sx={styles.price}>$15.99<Typography sx={styles.span}>$20.00</Typography></Typography>
                    <Button variant='standart' sx={styles.button}>Add to a card</Button>
                </Box>
                <Box sx={styles.box1}>
                    <img src={Img9} alt="" sx={styles.img} />
                    <Typography sx={styles.h3}>Tasty And Healthy</Typography>
                    <Typography sx={styles.price}>$15.99<Typography sx={styles.span}>$20.00</Typography></Typography>
                    <Button variant='standart' sx={styles.button}>Add to a card</Button>
                </Box>
                <Box sx={styles.box1}>
                    <img src={Img3} alt="" sx={styles.img} />
                    <Typography sx={styles.h3}>Tasty And Healthy</Typography>
                    <Typography sx={styles.price}>$15.99<Typography sx={styles.span}>$20.00</Typography></Typography>
                    <Button variant='standart' sx={styles.button}>Add to a card</Button>
                </Box>
                <Box sx={styles.box1}>
                    <img src={Img5} alt="" sx={styles.img} />
                    <Typography sx={styles.h3}>Tasty And Healthy</Typography>
                    <Typography sx={styles.price}>$15.99<Typography sx={styles.span}>$20.00</Typography></Typography>
                    <Button variant='standart' sx={styles.button}>Add to a card</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Menu

const styles = {
    TypoMenu1: {
        textAlign: 'center',
        color: ' #fff',
        textTransform: 'uppercase',
        paddingBottom: ' 3rem',
        paddingTop: {md:'5rem', xs:'30rem'},
        fontSize: '3rem',
        display: 'flex',
        justifyContent: 'center',
        fontWeight:'bolder'
    },
    TypoMenu2: {
        color: '#d3ad7f',
        textTransform: 'uppercase',
        fontSize:'3rem',
        fontWeight:'bolder'
    },
    boxContainer: {
        display: 'grid',
        gridTemplateColumns: ' repeat(auto-fit, minmax(25rem, 1fr))',
        gap: '1.5rem',
        background: 'transparent',
        margin:{md:'3rem 6rem', xs:'.5rem'}
    },
    box1: {
        padding: '5rem',
        textAlign: 'center',
        border: '.1rem solid rgba(255, 255, 255, .3)',
        background: 'transparent',
        "&:hover": {
            background: '#fff',
            color: '#13131a'
        },
        "&:hover>*": {
            color: '#13131a'
        },
    },
    img: {
        width: '250px',
        height: '250px',
        borderRadius: '100px',
    },
    h3: {
        color: '#fff',
        fontSize: '1.7rem',
        padding: ' .5rem 0',
        fontWeight: 'bold'
    },
    price: {
        color: '#fff',
        fontSize: '1.5rem',
        padding: '.3rem 0',
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        gap:'.2px'
    },
    span: {
        fontSize: ' 1rem',
        textDecoration: 'line-through',
        fontWeight: 'lighter',
    },
    button: {
        marginTop: '.5rem',
        display: 'inline-block',
        padding: '.8rem 2rem',
        fontSize: { md: '.8rem', xs: '.5rem' },
        color: '#fff',
        background: '#d3ad7f',
        cursor: 'pointer',
        "&:hover": {
            letterSpacing: '.2rem',
            background: '#d3ad7f',
        },
        fontWeight: 'bold'
    }
}