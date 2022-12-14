import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const CustomSelect = props => {
    const { options, disabled, label, name, onChange, selectedValue, error, helperText } = props;
    return (
        <FormControl fullWidth error={error}>
            <InputLabel id="simple-select">{label}</InputLabel>
            <Select 
                labelId="simple-select-label" 
                value={selectedValue} 
                name={name} 
                label={label} 
                onChange={onChange}
                disabled={disabled}
                >
                
                {options.map(o => (
                    <MenuItem key={o.key} value={o.key}>
                        {o.value}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    );
};

CustomSelect.prototype = {
    options: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    selectedValue: PropTypes.string
};

CustomSelect.defaultProps = {
    options: []
};

export default CustomSelect;
