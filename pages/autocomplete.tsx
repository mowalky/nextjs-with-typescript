import * as React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useRef } from "react";

const AutoCompleteExample = () => {
  const [searchResults, setSearchResults] = React.useState([]);
  const [searching, setSearching] = React.useState(false);

  const [search, setSearch] = React.useState("");

  const searchData = async (search: string) => {
    setSearch(search);
    setSearchResults([]);

    const searchQuery = await fetch(`/api/search?search=${search}`);

    const searchResults = await searchQuery.json();
    console.log(searchResults.projects);
    setSearchResults(searchResults);
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={search}
        onChange={(e) => searchData(e.currentTarget.value)}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      {!searchResults && <div>searching...</div>}
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
