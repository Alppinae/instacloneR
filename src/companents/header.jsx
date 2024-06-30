import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography
} from '@mui/material';
import useAuth from '../store/authContenxt.js';

export const Header = () => {
    const { setSession } = useAuth();

    return (
        <AppBar position="static" sx={{backgroundColor:"black"}}>
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Instagram
            </Typography>
            <Button color="inherit" onClick={() => setSession(null)}>{"Logout"}</Button>
            </Toolbar>
        </AppBar>
    )
}
