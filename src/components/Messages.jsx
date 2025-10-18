function Messages({ message, messageType }) {
  if (!message) return null;

  const style = {
    color: messageType === "error" ? "red" : "green",
    fontWeight: "bold"
  };

  return <p style={style}>{message}</p>;
}

export default Messages;
