import React from "react";
import PropTypes from "prop-types";
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Button,
  Checkbox,
  FormGroup,
  Switch,
  Select,
  MenuItem,
} from "@mui/material";

const FormControlComponent = ({ fields, values, setValues, handleSave }) => (
  <form onSubmit={handleSave}>
    {fields.map((field, index) => {
      switch (field.type) {
        case "text":
          return (
            <TextField
              key={index}
              label={field.label}
              variant="outlined"
              fullWidth
              value={values[field.name]}
              onChange={(e) => setValues(field.name, e.target.value)}
              margin="normal"
            />
          );
        case "number":
          return (
            <TextField
              key={index}
              label={field.label}
              variant="outlined"
              type="number"
              fullWidth
              value={values[field.name]}
              onChange={(e) => setValues(field.name, Number(e.target.value))}
              margin="normal"
            />
          );
        case "radio":
          return (
            <FormControl key={index} component="fieldset">
              <FormLabel component="legend" sx={{ color: "black" }}>
                {field.label}
              </FormLabel>
              <RadioGroup
                aria-label={field.name}
                name={field.name}
                value={values[field.name]}
                onChange={(e) => setValues(field.name, e.target.value)}
              >
                {field.options.map((option) => (
                  <FormControlLabel
                    key={option.value}
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                    sx={{ color: "black" }}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          );
        case "switch":
          return (
            <FormControlLabel
              key={index}
              control={
                <Switch
                  checked={values[field.name]}
                  onChange={(e) => setValues(field.name, e.target.checked)}
                  color="primary"
                />
              }
              label={field.label}
            />
          );
        case "checkbox":
          return (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={values[field.name]}
                  onChange={(e) => setValues(field.name, e.target.checked)}
                  color="primary"
                />
              }
              label={field.label}
            />
          );
        case "select":
          return (
            <FormControl key={index} fullWidth margin="normal">
              <FormLabel component="legend" sx={{ color: "black" }}>
                {field.label}
              </FormLabel>
              <Select
                value={values[field.name]}
                onChange={(e) => setValues(field.name, e.target.value)}
              >
                {field.options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          );
        case "date":
          return (
            <TextField
              key={index}
              label={field.label}
              type="date"
              variant="outlined"
              fullWidth
              value={values[field.name]}
              onChange={(e) => setValues(field.name, e.target.value)}
              InputLabelProps={{ shrink: true }}
              margin="normal"
            />
          );
        case "textarea":
          return (
            <TextField
              key={index}
              label={field.label}
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={values[field.name]}
              onChange={(e) => setValues(field.name, e.target.value)}
              margin="normal"
            />
          );
        default:
          return null;
      }
    })}
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </Box>
  </form>
);

FormControlComponent.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf([
        "text",
        "number",
        "radio",
        "switch",
        "checkbox",
        "select",
        "date",
        "textarea",
      ]).isRequired,
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  values: PropTypes.object.isRequired,
  setValues: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default FormControlComponent;
