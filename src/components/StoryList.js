import StoryItem from "../components/StoryItem";
const StoryList = ({stories}) => {
    const storyList = stories.map((story, index)=>{
        return <StoryItem key={story.index} story={story}  />
    })
  return (
    <>
      <h2>Story List</h2>
      <ul>
       {storyList}
      </ul>
    </>
  );
};

export default StoryList;
