import React, { useEffect, useState} from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ListIcon from '@mui/icons-material/List';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "./PostDetail.css"
import CommentList from './Comment/CommentList';
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
  import styled from 'styled-components';
  import Api from '../../../functions/customApi';


function PostDetail(){

    const [board, setBoard] = useState({});
    const { postId } = useParams();
    const navigate = useNavigate();

    const getPostDetail = async () => {
        await axios.get(`/api/v1/posts/${postId}`)
            .then((response) => {
                console.log(response);
                setBoard(response.data.result);
            })
            .catch((err) => {
                console.log(err);
            });

    }

    const deleteBoard = async () => {
        await axios.delete(`/api/v1/posts/${postId}`)
            .then((response) => {
                navigate("/community");//게시글 목록

            }).catch((err) => {
                console.log(err);
                alert("본인이 작성한 글만 삭제할 수 있습니다")
            });

    }

    const onhandlePost = async (data) => {
        const { comment } = data;
        const postData = { comment };
    
        // post
        await Api
          .post(`/api/v1/posts/${postId}/comments`, postData)
          .then(()=>{
            alert("댓글등록이 완료되었습니다.")
            window.location.reload();
          })
          .catch(function (err) {
            console.log(err);
          });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
    
        const data = new FormData(e.currentTarget);
        const joinData = {
          comment: data.get('comment'),
        };
        onhandlePost(joinData);
        };

        const Boxs = styled(Box)`
  padding-bottom: 40px !important;
`;


    useEffect(() => {
        getPostDetail();
    }, []);

    return (
        <div className="root">
            <div className="topButtonGroup">
                <button className="btn btn-outline-secondary"><EditIcon></EditIcon>수정</button>
                <button className="btn btn-outline-danger" onClick={deleteBoard}><DeleteIcon></DeleteIcon> 삭제</button>
            </div>
            <table className="table">
                <tbody>
                <tr className="table-striped">
                    <th className="th">작성자</th>
                    <td className="td">{board.userName}</td>
                </tr>

                <tr>
                    <th className="th">제목</th>
                    <td className="td">{board.title}</td>
                </tr>

                <tr className="table-striped">
                    <th className="th">작성일</th>
                    <td className="td">{board.createdAt}</td>
                </tr>

                <tr>
                    <th className="th">내용</th>
                    <td className="td">{board.body}</td>
                </tr>
                </tbody>
            </table>
            <div className="bottomButtonGroup">
                <Link className="btn btn-outline-secondary" to="/community"><ListIcon></ListIcon> 글목록</Link>
            </div>
            <CommentList postId={postId}></CommentList>
            <Box>
                <Boxs component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <FormControl component="fieldset" variant="standard">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="comment"
                        name="comment"
                        label="댓글을 입력하세요"
                    />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    size="large"
                >댓글 등록
                </Button>
                </FormControl>
            </Boxs>
          </Box>
        </div>

    );

}
export default PostDetail;
