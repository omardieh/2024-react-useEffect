import { useState } from "react";

export default function Contact() {
  const [messageTitle, setMessageTitle] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [messageContent, setMessageContent] = useState("");
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        value={messageTitle}
        onChange={(e) => setMessageTitle(e.target.value)}
        type="text"
        placeholder="message title"
      />
      <input
        value={emailAddress}
        onChange={(e) => setEmailAddress(e.target.value)}
        type="email"
        placeholder="your email address"
      />
      <textarea
        value={messageContent}
        onChange={(e) => setMessageContent(e.target.value)}
        type="email"
        placeholder="your email address"
      />
    </form>
  );
}
