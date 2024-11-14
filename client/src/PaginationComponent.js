// src/components/PaginationComponent.js
import React from 'react';
import { Pagination } from '@mui/material';

const PaginationComponent = ({ count, currentPage, onPageChange }) => (
  <Pagination
    count={count}
    page={currentPage}
    onChange={onPageChange}
    variant="outlined"
    shape="rounded"
  />
);

export default PaginationComponent;
