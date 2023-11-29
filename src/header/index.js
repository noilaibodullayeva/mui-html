import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import {TextField} from '@mui/material';
import {  SearchOffRounded } from '@mui/icons-material';

const pages = ['Home', 'Menu', 'About', 'Products', 'Review', 'Contact', 'Blogs'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#010103' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Roboto, sans-serif',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                            fontSize: '30px'
                        }}
                    >
                        Coffee
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                width: '200px',
                                left: '-20px',
                                top: '5px'
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography sx={{
                                        color: '#222',
                                        "&:hover": {
                                            borderBottom: '1px solid #d3ad7f',
                                        },
                                        textAlign: "center",
                                        width: '300px',
                                    }} >{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            fontFamily: 'Roboto, sans-serif',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                            fontSize: '25px',
                            textAlign: 'center',
                            marginRight: '40%'
                        }}
                    >
                        Coffee
                    </Typography>
                    <Box sx={{
                        flexGrow: 1,
                        display: { xs: 'none', md: 'flex' },
                        gap: '7px',
                        justifyContent: 'center'
                    }}>
                        {pages.map((page) => (
                            <Typography
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    margin: '0 1rem',
                                    fontSize: '1rem',
                                    color: '#fff',
                                    display: 'block',
                                    gap: '5px',
                                    "&:hover": {
                                        borderBottom: '.1rem solid #d3ad7f',
                                        color: '#d3ad7f',
                                    },

                                }}
                            >
                                {page}
                            </Typography>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, }}>
                        <IconButton>
                            <SearchOffRounded
                                size="large"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                            />
                        </IconButton>

                        <Box sx={{
                            position: 'absolute',
                            top: '15%',
                            right: '7%',
                            background: '#fff',
                            width: '50rem',
                            height: '5rem',
                            display: 'flex',
                            alignItems: 'center',
                            transform: 'scaleY(0)',
                            transformOrigin: 'top',
                        }}>

                            <TextField
                                id="standard-basic"
                                label="search here..."
                                variant="standard"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    height: '100 %',
                                    width: '100 %',
                                    fontSize: '1.6rem',
                                    color: '#222',
                                    padding: '1rem',
                                    textTransform: 'none',
                                    display: { xs: 'block', md: 'none' },
                                }} />
                        </Box>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;


const styles = {
    img: {
        width: '70px',
        height: '70px',
        borderRadius: '50%'
    }
}