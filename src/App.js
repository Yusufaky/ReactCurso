import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>My APP</h1>
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
