const StoryItem = ({ story }) => {
  //   console.log("story: " + story);
  return (
    <>
      <h3>
        <a href={story.url}>{story.title}</a>
      </h3>
    </>
  );
};

export default StoryItem;
