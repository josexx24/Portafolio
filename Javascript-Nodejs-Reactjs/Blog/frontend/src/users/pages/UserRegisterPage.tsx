import { Box,Button, Card,CardContent, Grid, Typography, TextField } from "@mui/material"
import { Navbar } from "../components/Navbar"

export const UserRegisterPage  = () => {
    return (
        <Box sx={{display:'flex', backgroundImage: `url(${"../../../public/react-folder-structure.png"})`}}>
            <Navbar />
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 1, pt:10 }}>
                <Card style={{maxWidth:450, padding: "20px 5px ", margin: "0 auto" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Registro de Usuarios
                        </Typography>
                        <form>
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                <TextField
                                    placeholder="Enter first name"
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                <TextField
                                    placeholder="Enter last name"
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    type="email"
                                    placeholder="Enter email"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    type="number"
                                    placeholder="Enter phone number"
                                    label="Phone"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    type="number"
                                    placeholder="xxx"
                                    label="Esim iccid(optional)"
                                    variant="outlined"
                                    fullWidth
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    label="Enter your comment"
                                    multiline
                                    rows={4}
                                    placeholder="Enter your comment"
                                    variant="outlined"
                                    fullWidth
                                />
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
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