import { Box, IconButton, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Img10 from "../../src/img/products1.jpg"
import Img11 from "../../src/img/procuct2.jpg"
import Img12 from "../../src/img/products3.jpg"
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';

function Products() {
    return (
        <Box>
            <Typography sx={styles.TypoProducts1}>
                About <Typography sx={styles.TypoProducts2}>US</Typography>
            </Typography>
            <Box sx={styles.boxContainer}>
                <Box sx={styles.box2}>
                    <Box sx={styles.icons}>
                        <IconButton sx={styles.icon1}><ShoppingCartIcon sx={styles.icons1} /></IconButton>
                        <IconButton sx={styles.icon1}><FavoriteIcon sx={styles.icons1} /></IconButton>
                        <IconButton sx={styles.icon1}><RemoveRedEyeIcon sx={styles.icons1} /></IconButton>
                    </Box>
                    <img src={Img10} alt="" />
                    <Typography sx={styles.coffee}>Fresh Coffee</Typography>
                    <Box sx={styles.starBox}>
                        <StarRateIcon sx={styles.stars} />
                        <StarRateIcon sx={styles.stars}  />
                        <StarRateIcon sx={styles.stars}  />
                        <StarRateIcon sx={styles.stars}  />
                        <StarHalfIcon sx={styles.stars}  />
                    </Box>
                    <Typography sx={styles.price}>$15.99<Typography sx={styles.span}>$20,99</Typography></Typography>
                </Box>
                <Box sx={styles.box2}>
                    <Box sx={styles.icons}>
                        <IconButton sx={styles.icon1}><ShoppingCartIcon sx={styles.icons1} /></IconButton>
                        <IconButton sx={styles.icon1}><FavoriteIcon sx={styles.icons1} /></IconButton>
                        <IconButton sx={styles.icon1}><RemoveRedEyeIcon sx={styles.icons1} /></IconButton>
                    </Box>
                    <img src={Img11} alt="" />
                    <Typography sx={styles.coffee}>Fresh Coffee</Typography>
                    <Box sx={styles.starBox}>
                        <StarRateIcon sx={styles.stars} />
                        <StarRateIcon sx={styles.stars}  />
                        <StarRateIcon sx={styles.stars}  />
                        <StarRateIcon sx={styles.stars}  />
                        <StarHalfIcon sx={styles.stars}  />
                    </Box>
                    <Typography sx={styles.price}>$15.99<Typography sx={styles.span}>$20,99</Typography></Typography>
                </Box>
                <Box sx={styles.box2}>
                    <Box sx={styles.icons}>
                        <IconButton sx={styles.icon1}><ShoppingCartIcon sx={styles.icons1} /></IconButton>
                        <IconButton sx={styles.icon1}><FavoriteIcon sx={styles.icons1} /></IconButton>
                        <IconButton sx={styles.icon1}><RemoveRedEyeIcon sx={styles.icons1} /></IconButton>
                    </Box>
                    <img src={Img12} alt="" />
                    <Typography sx={styles.coffee}>Fresh Coffee</Typography>
                    <Box sx={styles.starBox}>
                        <StarRateIcon sx={styles.stars} />
                        <StarRateIcon sx={styles.stars}  />
                        <StarRateIcon sx={styles.stars}  />
                        <StarRateIcon sx={styles.stars}  />
                        <StarHalfIcon sx={styles.stars}  />
                    </Box>
                    <Typography sx={styles.price}>$15.99<Typography sx={styles.span}>$20,99</Typography></Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Products

const styles = {
    TypoProducts1: {
        textAlign: 'center',
        color: ' #fff',
        textTransform: 'uppercase',
        paddingBottom: ' 3rem',
        paddingTop: { md: '5rem', xs: '30rem' },
        fontSize: '3rem',
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bolder'
    },
    TypoProducts2: {
        color: '#d3ad7f',
        textTransform: 'uppercase',
        fontSize: '3rem',
        fontWeight: 'bolder'
    },
    boxContainer: {
        display: 'grid',
        gridTemplateColumns: ' repeat(auto-fit, minmax(25rem, 1fr))',
        gap: '1.5rem',
        background: 'transparent',
        margin:{md:'3rem 6rem', xs:'.5rem'}
    },
    box2: {
        padding: '1rem',
        textAlign: 'center',
        border: '.1rem solid rgba(255, 255, 255, .3)',
        background: 'transparent',
    },
    icons: {
        display: 'flex',
        flexdirection: 'row',
        gap: '20px',
        justifyContent: 'center',
        margin: '2rem 0'
    },
    icons1: {
        color: '#fff',
        height: '3rem',
        width: '3rem',
        border: '.1rem solid rgba(255, 255, 255, .3)',
        borderRadius: 'none',
        "&:hover": {
            background: '#d3ad7f',
        },
        padding: '.5rem'
    },
    coffee: {
        color: '#fff',
        fontSize: '1.7rem',
        padding: ' .5rem 0',
        fontWeight: 'bold'
    },
    starBox: {
        display: 'flex',
        flexdirection: 'row',
        gap: '.5rem',
        justifyContent: 'center',
        marginBottom:'1rem'
    },
    stars:{
        color: '#d3ad7f',
        height: '1.5rem',
        width: '1.5rem',
    },
    price: {
        color: '#fff',
        fontSize: '1.5rem',
        padding: '.3rem 0',
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        gap: '.2px'
    },
    span: {
        fontSize: ' 1rem',
        textDecoration: 'line-through',
        fontWeight: 'lighter',
    },
}