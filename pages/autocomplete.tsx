import * as React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const AutoCompleteExample = () => {
  const [searchResults, setSearchResults] = React.useState([]);
  const [searching, setSearching] = React.useState(false);

  const [search, setSearch] = React.useState("");

  const searchData = async () => {
    setSearch(search);
    setSearchResults([]);
    setSearching(true);

    const searchQuery = await fetch(`/api/search?search=${search}`);

    const searchResults = await searchQuery.json();
    console.log(searchResults.projects);
    setSearchResults(searchResults);
    setSearching(false);
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      <IconButton
        onClick={searchData}
        type="submit"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <IconButton
        onClick={() => setSearch("")}
        type="submit"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <HighlightOffIcon />
      </IconButton>
      {searching && <div>searching...</div>}
      {searchResults && searchResults?.contacts?.length > 0 && (
        <div>
          <h4>Contacts</h4>
          <hr />
          {JSON.stringify(searchResults.contacts)}
        </div>
      )}
      {searchResults && searchResults?.companies?.length > 0 && (
        <div>
          <h4>companies</h4>
          <hr />
          {JSON.stringify(searchResults.companies)}
        </div>
      )}
      {searchResults && searchResults?.projects?.length > 0 && (
        <div>
          <h4>projects</h4>
          <hr />
          {JSON.stringify(searchResults.projects)}
        </div>
      )}
    </>
  );
};

export default AutoCompleteExample;
