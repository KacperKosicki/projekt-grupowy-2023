import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Chatbot.module.scss';
import {
  faBan,
  faComments,
  faPaperPlane,
  faRetweet,
} from '@fortawesome/free-solid-svg-icons';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'W czym mogę pomóc?', isUser: false },
  ]);
  const [inputText, setInputText] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const addMessage = (message, isUser = false) => {
    setMessages([...messages, { text: message, isUser }]);
  };

  const handleUserInput = () => {
    if (inputText.trim() !== '') {
      addMessage(inputText, true);
      setInputText('');
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className={styles.chatbot}>
      {isChatOpen && (
        <div className={styles.chatbotWindow}>
          <div className={styles.chatbotHeader}>
            <FontAwesomeIcon icon={faRetweet} className={styles.icon} />
            <FontAwesomeIcon
              icon={faBan}
              className={styles.icon}
              onClick={toggleChat}
            />
          </div>
          <div className={styles.chatbotMessages}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={message.isUser ? styles.userMessage : styles.botMessage}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className={styles.chatbotInput}>
            <input
              type='text'
              placeholder='Wpisz swoje pytanie...'
              value={inputText}
              onChange={e => setInputText(e.target.value)}
            />
            <button>
              <FontAwesomeIcon icon={faPaperPlane} onClick={handleUserInput} />
            </button>
          </div>
        </div>
      )}
      <div className={styles.chatbotToggleButton}>
        <button onClick={toggleChat}>
          {isChatOpen ? (
            <FontAwesomeIcon icon={faComments} />
          ) : (
            'Potrzebujesz pomocy, napisz!'
          )}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
