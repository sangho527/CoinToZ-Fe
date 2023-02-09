import React, { useEffect, useState} from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function PostDetail(){

    const [board, setBoard] = useState({});
    const { postId } = useParams();
    const navigate = useNavigate();

    const getPostDetail = async () => {
        await axios.get(`/api/v1/posts/${postId}`)
            .then((response) => {
                console.log(response);
                setBoard(response.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }

    const deleteBoard = async () => {
        await axios.delete(`/api/v1/posts/${postId}`)
            .then((response) => {
                console.log(response.data);
                navigate("");//게시글 목록

            }).catch((err) => {
                console.log(err);
            });

    }

    useEffect(() => {
        getPostDetail();
    }, []);

    return (

        <div>
            <table className="table table-striped">
                <tbody>
                <tr>
                    <th className="col-3">작성자</th>
                    <td>
                        <div>{board.userName}</div>
                    </td>
                </tr>

                <tr>
                    <th>제목</th>
                    <td>
                        <span>{board.title}</span>
                    </td>
                </tr>

                <tr>
                    <th>작성일</th>
                    <td>
                        <span>{board.createdAt}</span>
                    </td>
                </tr>

                <tr>
                    <th>내용</th>
                    <td>
                        <div>
                            {board.body}
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            <button className="btn btn-outline-danger"  onClick={deleteBoard}><i className="fas fa-trash-alt"></i> 삭제</button>

        </div>
    );

}
export default PostDetail;