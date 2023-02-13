import React , { useEffect, useState }from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';


const Comment = ({comments, rowsPerPage, emptyRows, page}) => {

    return (
        <TableBody>
          {(rowsPerPage > 0
            ? comments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : comments
          ).map((comment) => (
            <TableRow key={comment.id}>
              <TableCell component="th" scope="row">
                {comment.id}
              </TableCell>
              <TableCell style={{ width: 160 }}>
                {comment.comment}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {comment.userName}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {comment.createdAt}
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

export default Comment;