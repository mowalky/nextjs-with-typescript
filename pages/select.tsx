import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Button from "@mui/material/Button";

interface Activity {
  activityID: string;
  activityFor: string;
}

const DUMMY_DATA = [
  {
    activityFor: "Gabe",
    activityID: "2334234234234",
  },
  {
    activityFor: "Jon",
    activityID: "asdfsf333232",
  },
  {
    activityFor: "Sally",
    activityID: "gg333",
  },
];

export default function BasicSelect() {
  const [filterActivityFor, setFilterActivityFor] = React.useState<Activity>();
  let open = true;
  const handleClose = () => {};

  const handleListItemClick = (value: string) => {};

  const handleChange = (event: any) => {
    setFilterActivityFor(event.target.value as any);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Filter Activities</DialogTitle>
      <Box
        sx={{
          margin: "20px",
          width: "400px",
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Activity For</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Activity For"
            onChange={handleChange}
            value={filterActivityFor}
          >
            {DUMMY_DATA.map((activity: any) => (
              <MenuItem key={activity.activityID} value={activity}>
                {activity.activityFor}
              </MenuItem>
            ))}
          </Select>
          {filterActivityFor && (
            <Button
              variant="contained"
              sx={{ marginTop: "15px" }}
              endIcon={<FilterAltIcon />}
              onClick={() => (open = false)}
            >
              Filter by {filterActivityFor.activityFor}
            </Button>
          )}
        </FormControl>
      </Box>
    </Dialog>
  );
}
