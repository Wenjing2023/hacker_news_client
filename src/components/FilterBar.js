import React, { useState } from "react";

const FilterBar = ({ stories }) => {
  const [search, setSearch] = useState({
    query: "",
    result: [],
  });
  const handleChange = (e) => {
    console.log("result: " + search.query);
    const results = stories.filter((story) => {
      if (e.target.value === "") return stories;
      return story.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearch({
      query: e.target.value,
      result: results,
    });
  };
  return (
    <>
      <form>
        <input
          type="search"
          value={search.query}
          placeholder="Search..."
          onChange={handleChange}
        />
      </form>
      <ul>
        {search.query === ""
          ? ""
          : search.result.map((story, index) => {
              return (
                <li key={story.index}>
                  <a href={story.url}>{story.title}</a>
                </li>
              );
            })}
      </ul>
    </>
  );
};

export default FilterBar;
