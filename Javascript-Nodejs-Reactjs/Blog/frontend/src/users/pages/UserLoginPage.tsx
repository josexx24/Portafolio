import { Box,Button, Card,CardContent, Grid, Typography, TextField } from "@mui/material"
import { Navbar } from "../components/Navbar"

export const UserLoginPage  = () => {
    return (
        <Box sx={{display:'flex', backgroundSize:"cover", width:'100%',height:'100vh', backgroundImage: `url(${"../../../public/react-folder-structure.png"})`}}>
            <Navbar />
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 1, pt:10 }}>
                <Card style={{maxWidth:450, padding: "20px 5px ", margin: "0 auto" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" sx={{pb:2}}>
                            Inicio de Sesión - Usuarios
                        </Typography>
                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                <TextField
                                    placeholder="Enter username"
                                    label="UserName"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    placeholder="Enter password"
                                    label="Password"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{pt:2}} >
                                <Button
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Box>
    )
}