import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControl,
    FormControlLabel,
    Checkbox,
    FormHelperText,
    Grid,
    Box,
    Typography,
    Container,
} from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';

// mui의 css 우선순위가 높기때문에 important를 설정 - 실무하다 보면 종종 발생 우선순위 문제
const FormHelperTexts = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #d32f2f !important;
`;

const Boxs = styled(Box)`
  padding-bottom: 40px !important;
`;

const PostWrite = () => {
    const theme = createTheme();


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 7,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
                    <Typography component="h1" variant="h5">
                        게시글 작성
                    </Typography>
                    <Boxs component="form" noValidate sx={{ mt: 3 }}>
                        <FormControl component="fieldset" variant="standard">
                            <Grid container spacing={2} justifyContent="center" marginBottom={3}>
                                    <TextField fullWidth label="fullWidth" margin="normal"
                                        id="title"
                                        label="제목을 작성해주세요."
                                        variant="outlined"
                                        required
                                    />
                                    <TextField fullWidth label="fullWidth" margin="normal"
                                        id="description"
                                        label="내용을 작성해주세요."
                                        variant="outlined"
                                        multiline
                                        rows={20}
                                        required
                                    />
                                <Button variant="contained" color="primary" >
                                    등록
                                </Button>
                            </Grid>
                        </FormControl>
                    </Boxs>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default PostWrite;