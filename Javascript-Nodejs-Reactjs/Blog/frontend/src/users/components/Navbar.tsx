import { AppBar,IconButton,Grid, Typography, Toolbar } from "@mui/material"
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";

export const Navbar = () => {
    return (
            <AppBar>
                <Toolbar>
                    <IconButton
                    color="inherit"
                    edge="start"
                    sx={{ mr: 2, display: { sm: "none" } }}
                    >
                    <MenuOutlined />
                    </IconButton>
                    <Grid container direction="row" justifyContent="space-between">
                    <Typography variant="h6" noWrap component="div">
                        BlogApp
                    </Typography>
                    <IconButton color="error" >
                        <LogoutOutlined />
                    </IconButton>
                    </Grid>
                </Toolbar>
            </AppBar>
    )
}