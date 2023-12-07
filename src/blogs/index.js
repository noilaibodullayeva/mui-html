import { Box, Button, Typography } from "@mui/material";
import Img12 from "../../src/img/blogs1.jpg"
import Img13 from "../../src/img/blogs2.jpg"
import Img14 from "../../src/img/blogs3.jpg"

function Blogs() {
    return (
        <Box>
            <Typography sx={styles.TypoProducts1}>
                Our <Typography sx={styles.TypoProducts2}>Blogs</Typography>
            </Typography>
            <Box sx={styles.boxBig}>
                <Box sx={styles.boxInside}>
                    <Box sx={styles.img1Box}>
                        <img style={styles.img1} src={Img12} alt="" />
                    </Box>
                    <Box sx={styles.content}>
                        <Typography href="#" class="title" sx={styles.tasty}>tasty and refreshing coffee</Typography>
                        <Typography sx={styles.admin}>by admin / 21st may/ 2023</Typography>
                        <Typography sx={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, in!</Typography>
                        <Button href="#" sx={styles.buton}></Button>
                    </Box>

                </Box>
                <Box sx={styles.boxInside}>
                <Box sx={styles.img1Box}>
                        <img style={styles.img1} src={Img13} alt="" />
                    </Box>
                    <Box sx={styles.content}>
                        <Typography href="#" class="title" sx={styles.tasty}>tasty and refreshing coffee</Typography>
                        <Typography sx={styles.admin}>by admin / 21st may/ 2023</Typography>
                        <Typography sx={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, in!</Typography>
                        <Button href="#" sx={styles.buton}></Button>
                    </Box>
                </Box>
                <Box sx={styles.boxInside}>
                <Box sx={styles.img1Box}>
                        <img style={styles.img1} src={Img14} alt="" />
                    </Box>
                    <Box sx={styles.content}>
                        <Typography  sx={styles.tasty}>tasty and refreshing coffee</Typography>
                        <Typography sx={styles.admin}>by admin / 21st may/ 2023</Typography>
                        <Typography sx={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, in!</Typography>
                        <Button href="#" sx={styles.buton}></Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Blogs

const styles = {
    TypoProducts1: {
        textAlign: 'center',
        color: ' #fff',
        textTransform: 'uppercase',
        paddingBottom: ' 3rem',
        paddingTop: { md: '5rem', xs: '10rem' },
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
    boxBig: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(25rem, 1fr))',
        gap: '1.5rem',
        margin:'0 5%'
    },
    boxInside: {
        border: '.1rem solid rgba(255, 255, 255, .3)'
    },
    img1Box: {
        height: '15rem',
        overflow: 'hidden',
        width: '100%',

    },
    img1: {
        width:'100%',
        height:'100%',
        "&:hover": {
            transform: '[{scale(2)}]'
        },
    },
    content: { padding: '2rem', },
    tasty:{
        fontSize: '1.5rem',
        lineHeight: '1.5',
        color: '#fff',
        "&:hover":{
            color:'#d3ad7f'
        }
    },
    admin: {
        fontSize: '1.3rem',
        color: ' #d3ad7f',
        display: 'block',
        paddingTop: '1rem',
    },
    lorem: {
        fontSize: '1.1rem',
        color: '#ccc',
        lineHeight: '1.8',
        padding: '1rem 0',
    },
    buton:{
        width:'100px',
        height:'20px',
        background:'#d3ad7f',
    }
}