import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../Theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackground";


const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up("xs")]: { // <= Mobile
            PaddingTop: "100px",
        },

        [theme.breakpoints.up("md")]: { // >= Mobile
            PaddingTop: "0",
        }
    }))

    const StyledImg = styled("img")(() => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
        
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative">

                                <Box position="absolute" width={"160%"} top={-100} right={0}>
                                    <AnimatedBackground/>
                                </Box>

                                <Box position="relative" textAlign="center">
                                <StyledImg src={Avatar} />
                                </Box>

                            </Box>
                    
                        </Grid>

                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Hiago Vinicius</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center" >I'm a Developer Front-End</Typography>

                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">

                                    <StyledButton>
                                        <DownloadIcon />
                                        <Typography>
                                            Download Cv
                                        </Typography>
                                    </StyledButton>
                                </Grid>

                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <EmailIcon />
                                        <Typography>
                                            Contact me
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>

                        </Grid>

                    </Grid>
                </Container>


            </StyledHero>
        </>
    )
}

export default Hero