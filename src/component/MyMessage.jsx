const MyMessage = ({ message }) => {
    //check the message to see if its a photo or a text
    
    if (message.attachments && message.attachments.length > 0) {
        //rendering the image
      return (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ float: 'right' }}
        />
      );
    }
   //rendering the text
    return (
      <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#222D6A' }}>
        {message.text}
      </div>
    );
  };
  
  export default MyMessage;