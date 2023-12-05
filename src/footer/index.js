import { FacebookRounded, Instagram, LinkedIn, Pinterest, Twitter } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

function Footer() {
    return (
        <Box >
            <Box sx={{
                background: '#13131A',
                textAlign: 'center,',
                marginTop:{md:'1rem', xs:'5rem'}
            }}>
                <Box sx={styles.social}>
                    <FacebookRounded sx={styles.socialIcon} />
                    <Twitter sx={styles.socialIcon} />
                    <Instagram sx={styles.socialIcon} />
                    <LinkedIn sx={styles.socialIcon} />
                    <Pinterest sx={styles.socialIcon} />
                </Box>
                <Box sx={styles.mune}>
                    <Typography sx={styles.word}>Home</Typography>
                    <Typography sx={styles.word}>Menu</Typography>
                    <Typography sx={styles.word}>About</Typography>
                    <Typography sx={styles.word}>Products</Typography>
                    <Typography sx={styles.word}>Contact</Typography>
                    <Typography sx={styles.word}>Blog</Typography>
                </Box>
                <Typography sx={styles.resived}>created by <Typography sx={styles.miss}>miss noila</Typography> | all rights reserved</Typography>
            </Box>

        </Box>
    )
}

export default Footer

const styles = {
    social: {
        padding: '3rem 0 1rem 0',
        textAlign:'center',
    },
    socialIcon: {
        height: ' 3rem',
        width: ' 3rem',
        lineHeight: '5rem',
        fontSize: '2rem',
        color: '#fff',
        border: '.1rem solid rgba(255, 255, 255, .3)',
        margin: '.3rem',
        borderRadius: '50%',
        "&:hover": {
            background: '#d3ad7f'
        },
        padding:'10px'
    },
        mune: {
            display: 'flex',
            flexDirection: {md:'row', xs:'column'},
            justifyContent: 'center',
            flexWwrap: 'wrap',
            padding: '1rem 0',
            gap: '1rem',
        },
        word: {
            padding: '.6rem 2rem',
            color: '#fff',
            border: '.1rem solid rgba(255, 255, 255, .3)',
            fontSize: '1.3rem',
            "&:hover": {
                background: '#d3ad7f'
            },
            margin:{md:0, xs:'0 2%'}
        },
        resived: {
            fontSize: '1.2rem',
            color: '#fff',
            fontWeight: 'lighter',
            padding: '1.5rem',
            textTransform: 'lowercase',
            display: 'flex',
            flexDirection: 'row',
            textAlign:'center',
            justifyContent:'center'
        },
        miss: {
            color: '#d3ad7f',
            textTransform: 'lowercase',
            fontSize:'1.2rem',
            padding:'0 1.5px'
        }
    }
