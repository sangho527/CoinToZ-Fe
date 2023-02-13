import styles from "./Mypage.module.css";
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import Post from "../Community/Post";
import Api from "../../../functions/customApi";


function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};


const MyBoard = () => {

  const userName = localStorage.getItem('userName');
  const imageUrl = localStorage.getItem('imageUrl');

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Api.get('/api/v1/posts/myPost')
      .then((response) => {
        var temps = response.data.result.content;
        setPosts(temps);
        // temps.map((temp) => getLikes(temp));
        // console.log(posts)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  // const getLikes = (post) => {
  //     axios.get(`api/v1/posts/${post.id}/likes`) 
  //         .then((response) => {
  //             post.likes = response.data.result;
  //             posts.push(post);
  //         })
  //         .catch(function(error){
  //         console.log(error);
  //         });
  //     };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - posts.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <div className={styles.Layout}>
      <main className={[styles.Content, styles.Clearfix].join(" ")}>
        <div className={styles.Clearfix}>
          <section className={styles.Member}><div className={styles.MemberSide}>
            <div className={[styles.MemberCard, styles.Clearfix].join(" ")}>
              <div className={styles.MemberCardBody}>
                <div className={[styles.Avatar, styles.TwMb2].join(" ")}>
                  {imageUrl === 'null' ? <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile_image" /> : <img src={imageUrl} alt="profile_image" />}
                </div>
                <div>
                  <div className={[styles.TwFontBold, styles.TwMb1].join(" ")}>{userName}</div>
                </div>
              </div>
            </div>  <div className={[styles.MemberCard, styles.MemberMenu].join(" ")}>
              <ul>
                <li className={styles.Active}>
                  <a href="/mypage">회원정보 보기</a>
                </li><li>
                  <a href="/mypage/upbitkey">업비트 등록</a>
                </li><li>
                  <a href="/mypage/myboard">작성 글 보기</a>
                </li><li>
                  <a href="/diary">매매일지 & 포트폴리오</a>
                </li></ul>
            </div></div><div className={styles.MemberContent}>
              <div className={styles.MemberCard}>
                <div className={styles.MemberCardHeader}>
                  <h1>작성한 글 목록</h1>
                </div>

                <div className={styles.MemberCardBody}>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: '80%' }} aria-label="custom pagination table">
                      <TableHead>
                        <TableRow>
                          <TableCell>No</TableCell>
                          <TableCell>제목</TableCell>
                          <TableCell align="right">글쓴이</TableCell>
                          <TableCell align="right">작성일</TableCell>
                          <TableCell align="right">좋아요</TableCell>
                        </TableRow>
                      </TableHead>
                      <Post posts={posts} rowsPerPage={rowsPerPage} emptyRows={emptyRows} page={page}></Post>
                      <TableFooter>
                        <TableRow>
                          <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={posts.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                              inputProps: {
                                'aria-label': 'rows per page',
                              },
                              native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                          />
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </TableContainer>


                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}



export default MyBoard;