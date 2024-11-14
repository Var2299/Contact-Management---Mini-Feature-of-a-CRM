import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const RowsPerPageSelect = ({ contactsPerPage, handleRowsPerPageChange }) => (
  <FormControl fullWidth margin="normal">
    <InputLabel>Rows per page</InputLabel>
    <Select
      value={contactsPerPage}
      onChange={handleRowsPerPageChange}
      label="Rows per page"
    >
      <MenuItem value={5}>5</MenuItem>
      <MenuItem value={10}>10</MenuItem>
      <MenuItem value={15}>15</MenuItem>
    </Select>
  </FormControl>
);

export default RowsPerPageSelect;
