function App() {
  const title = "Hello World";
  const subtitle = "This is my first React app";
  const comments = [
    { id: 1, text: "This is a comment" },
    { id: 2, text: "This is another comment" },
    { id: 3, text: "This is a third comment" },
  ];

  const loading = false;
  const showComments = false;

  const commentBlock = (
    <div className="comments">
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{subtitle}</p>

      {showComments && commentBlock}
    </div>
  );
}

export default App;
