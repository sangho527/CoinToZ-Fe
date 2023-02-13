import React, { useEffect, useState} from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ListIcon from '@mui/icons-material/List';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "./PostDetail.css"



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
        </div>

    );

}
export default PostDetail;
