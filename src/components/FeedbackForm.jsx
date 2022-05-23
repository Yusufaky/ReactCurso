import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (event) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Tem de ter pelo menos 10 carateres");
    } else {
      setBtnDisabled(false);
    }
    setText(event.target.value);
  };

  return (
    <Card>
      <form>
        <h2>Rating Service?</h2>
        {/* Rating */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Escrever a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
