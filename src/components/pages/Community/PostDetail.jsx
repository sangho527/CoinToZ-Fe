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
  import { Col, Row } from 'antd';


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
        await Api.delete(`/api/v1/posts/${postId}`)
            .then((response) => {
                alert("게시글이 삭제되었습니다.")
                navigate("/community");//게시글 목록

            }).catch((err) => {
                console.log(err);
                alert("본인이 작성한 글만 삭제할 수 있습니다.")
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


    useEffect(() => {
        getPostDetail();
    }, []);

    //PostUpdate.jsx에 전달
    const postUpdate = {
        postId : postId,
        id : board.userName,
        title : board.title,
        body : board.body

    }

    return (
        <Row>
        <div className="root">
            <h3 style={{marginBottom: '20px'}}>COMMUNITY</h3>
            <div style={{float:'left'}}>
                <Link className="btn btn-outline-dark" to="/community"><ListIcon></ListIcon> 글 목록</Link>
            </div>
            <div className="topButtonGroup">
                <Link className="btn btn-outline-primary" to="/postUpdate" state={{board: postUpdate}}><EditIcon></EditIcon> 수정</Link>
                <button className="btn btn-outline-danger" onClick={deleteBoard}><DeleteIcon></DeleteIcon> 삭제</button>
            </div>
            
            <div className="details">
                <Row>
                    <Col span={4} className="th">작성자</Col>
                    <Col span={8} className="td" >{board.userName}</Col>
                
                    <Col span={4} className="th">작성일</Col>
                    <Col span={8} className="td" >{board.createdAt}</Col>
                </Row>
                <Row>
                    <Col span={4} className="th">제목</Col>
                    <Col span={20} className="td" >{board.title}</Col>
                </Row>
                <Row>
                    <Col span={4} className="th">내용</Col>
                    <Col span={20} className="td"><pre style={{minHeight : "300px"}}>{board.body}</pre></Col>
                </Row>
            </div>
            
            <h4 style={{marginBottom: '20px', marginTop: '30px'}}>COMMENT</h4>
            <CommentList postId={postId}></CommentList>
            
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: 1}}>
                <FormControl variant="standard" sx={{width: 1}}>
                <Row>
                    <Col span={20}>
                        <TextField
                            sx={{height:'80%'}}
                            fullWidth
                            id="comment"
                            name="comment"
                            placeholder="댓글을 입력하세요."
                        />
                    </Col>
                    <Col span={4}>
                        <Button type="submit" variant="contained" size='large' sx={{ width:0.8, height:0.8,  mt: 0, mb: 3, ml: 3}}>댓글 등록</Button>
                    </Col>
                </Row>
                </FormControl>
            </Box>
        </div>
        </Row>
    );

}
export default PostDetail;
