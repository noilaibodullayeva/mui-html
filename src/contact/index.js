import { Box, Button, Input, InputAdornment,  Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { Call, Mail } from "@mui/icons-material";

function Contact() {
    return (
        <Box>
            <Typography sx={styles.TypoProducts1}>
                Contact <Typography sx={styles.TypoProducts2}>Me</Typography>
            </Typography>
            <Box sx={{
                display: 'flex',
                background: '#13131a',
                flexWrap: 'wrap',
                gap: '1rem',
            }}>
                <Box sx={{
                    width:'50%',
                    height:'400px'
                }}>
                    <iframe sx={styles.map}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24212.444212568993!2d68.1509339130868!3d40.661727169643996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ad9dbe15778cf1%3A0xe89089a6a2f1cdc3!2sGagarin%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1699634404120!5m2!1sen!2s"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></Box>
                <Box>
                    <Typography sx={styles.h3}>GET IN TOUCH</Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        justifyContent:'center',
                        textAlign:'center',
                        margin: {md:0, xs:'15px'},
                        width:'100%'
                    }}>
                        <Input
                            sx={styles.input}
                            variant='standart'
                            placeholder='name'
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <PersonIcon sx={{ color: '#fff', pl:'5px', fontSize:'2rem' }} />
                                </InputAdornment>
                            }
                        />
                        <Input
                            sx={styles.input}
                            variant='standart'
                            placeholder='Email'
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <Mail sx={{ color: '#fff', pl:'5px', fontSize:'2rem' }} />
                                </InputAdornment>
                            }
                        />
                        <Input
                            sx={styles.input}
                            variant='standart'
                            placeholder='Phone number'
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <Call sx={{ color: '#fff', pl:'5px', fontSize:'2rem' }} />
                                </InputAdornment>
                            }
                        />
                        <Button variant='standart' sx={styles.button}>Contact mee</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact

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
    map: {
        width: '500px',
        height: '350px'
    },
    h3: {
        color: '#fff',
        fontSize: '1.8rem',
        padding: ' .7rem 0',
        fontWeight: 'bold',
        marginTop:'1rem',
        marginLeft: {md:0, xs:'15px'}
    },
    input: {
        width: {md:'600px', xs:'450px'},
        border: '.1rem solid rgba(255, 255, 255, .3)',
        height: '55px',
        color:'#fff',
        background:'transparent'
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
        fontWeight: 'bold',
        width:'250px'
    }
}