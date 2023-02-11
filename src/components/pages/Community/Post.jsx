import React , { useEffect, useState }from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';

const Post = ({posts, rowsPerPage, emptyRows, page}) => {

    return (
        <TableBody>
          {(rowsPerPage > 0
            ? posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : posts
          ).map((post) => (
            <TableRow key={post.id}>
              <TableCell component="th" scope="row">
                {post.id}
              </TableCell>
              <TableCell style={{ width: 160 }}>
                {post.title}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {post.userName}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {post.createdAt}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {post.likes}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
    );
};

export default Post;