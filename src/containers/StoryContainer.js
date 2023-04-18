import React, { useState, useEffect } from "react";
import StoryList from "../components/StoryList";
import FilterBar from "../components/FilterBar";

const StoryContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const [stories, setStories] = useState([]);
  const [filteredStory, setFilteredStory] = useState(null);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((res) => res.json())
      .then((data) => setStoryIds(data))
      .catch((error) => console.log("Error getting data", error));
    //   array of id
  }, []);

  useEffect(() => {
    const storyPromises = storyIds.map((storyId) => {
      return fetch(
        `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
      ).then((res) => res.json());
    });

    Promise.all(storyPromises).then((storiesData) => setStories(storiesData));
  }, [storyIds]);

  //   const handleFilterChange = (filteredStory) => {
  //     console.log("stories inside handleFilterChange : " + stories);
  //     const storyId = stories.map((story) => {
  //       return Object.values(story);
  //     });
  //
  //     setFilteredStory(filteredStory);
  //   };

  return (
    <>
      <h2>story container</h2>
      <FilterBar stories={stories} />
      <StoryList stories={stories} filteredStory={filteredStory} />
    </>
  );
};

export default StoryContainer;
