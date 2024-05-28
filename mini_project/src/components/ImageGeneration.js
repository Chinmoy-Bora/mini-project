
import ChatBox from "./ChatBox";
import MessageInput from "./MessageInput";
const ImageGenerationPage = ({ messages, onSendMessage }) => {
    return (
      <div>
        <ChatBox messages={messages} />
        <MessageInput onSendMessage={onSendMessage} />
      </div>
    );
  };
export default ImageGenerationPage;  