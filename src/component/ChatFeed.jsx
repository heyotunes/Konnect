import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';

const ChatFeed = (props) => {    //we are going to destructure props 
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

  // map over people who read the message
  const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
    <div
      key={`read_${index}`}
      className="read-receipt"
      style={{
        float: isMyMessage ? 'right' : 'left',
        backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
      }}
    />
  ));

    //create a functional components to generate messages
    const renderMessages = () => {
        const keys = Object.keys(messages);
    
        return keys.map((key, index) => {
          const message = messages[key];
          const lastMessageKey = index === 0 ? null : keys[index - 1];
          const isMyMessage = userName === message.sender.username;
    
          //to have access to the components returned , we will pass their content as a prop
          return (
            <div key={`msg_${index}`} style={{ width: '100%' }}>
              <div className="message-block">
                {isMyMessage
                  ? <MyMessage message={message} />
                  : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
              </div>
              <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                {renderReadReceipts(message, isMyMessage)}
              </div>
            </div>
          );
        });
      };

      if (!chat) return <div />;
//creating a structure for the chat feed
// i am mapping over people to get the username for the sender
//then we leave a space and create a message form that shows where the message will be written
      return (
        <div className="chat-feed">
          <div className="chat-title-container">
            <div className="chat-title">{chat?.title}</div>
        
            <div className="chat-subtitle">
              {chat.people.map((person) => ` ${person.person.username}`)} 
            </div>
          </div>
          {renderMessages()}
          <div style={{ height: '100px' }} />
          <div className="message-form-container">
            <MessageForm {...props} chatId={activeChat} />
          </div>
        </div>
    );
}

export default ChatFeed;