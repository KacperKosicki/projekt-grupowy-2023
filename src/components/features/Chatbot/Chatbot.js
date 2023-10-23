import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBan,
  faComments,
  faPaperPlane,
  faRetweet,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Chatbot.module.scss';

const Chatbot = () => {
  const messagesRef = useRef(null);
  const [messages, setMessages] = useState([
    { text: 'Witaj! W czym mogę pomóc?', isUser: false },
  ]);
  const [inputText, setInputText] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const responses = {
    'cena dostawy': 'Cena dostawy wynosi 50zł',
    'opcje dostawy': 'Korzystamy z kuriera firmy DPD',
    'ile produktów': 'Jeden kurier może dostarczyć do 10 produktów.',
    'czas oczekiwania': 'Czas oczekiwania na produkty wynosi 20 dni',
    'instrukcje montażu': 'Tak, każdy mebel zawiera instrukcję montażu',
    gwarancja: 'Tak, meble są objęte 2-letnią gwarancją',
    zwrot: 'Meble można zwrócić do 14 dni na koszt sklepu',
    'metody płatności': 'Za meble można zapłacić przelewem i przy odbiorze',
  };

  const scrollToBottom = () => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Przewiń okno czatu na dół po każdej aktualizacji wiadomości
    scrollToBottom();
  }, [messages]);

  const addMessage = (message, isUser = false) => {
    setMessages([...messages, { text: message, isUser }]);
  };

  const handleUserInput = () => {
    if (inputText.trim() !== '') {
      const userMessage = { text: inputText, isUser: true }; // Tworzymy obiekt reprezentujący wiadomość użytkownika
      const newMessages = [...messages, userMessage]; // Tworzymy nową tablicę wiadomości, dodając wiadomość użytkownika

      // Sprawdzamy, czy wiadomość użytkownika pasuje do któregoś z kluczy w obiekcie responses
      let userInput = inputText.toLowerCase();
      if (userInput.endsWith('?')) {
        userInput = userInput.slice(0, -1);
      }
      const matchedKeyword = Object.keys(responses).find(keyword =>
        userInput.includes(keyword.toLowerCase())
      );

      // Dodanie odpowiedzi bota do tablicy wiadomości
      if (matchedKeyword) {
        const botMessage = { text: responses[matchedKeyword], isUser: false };
        const updatedMessages = [...newMessages, botMessage];
        setMessages(updatedMessages);
      } else {
        const errorMessage = {
          text:
            'W takim przypadku proponuję kontakt z naszym pracownikiem. Czy mogę pomóc w czymś jeszcze?',
          isUser: false,
        };
        const updatedMessages = [...newMessages, errorMessage];
        setMessages(updatedMessages);
      }

      setInputText(''); // Czyścimy pole inputText
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    handleUserInput();
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
          <div className={styles.chatbotMessages} ref={messagesRef}>
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
            <form onSubmit={handleFormSubmit}>
              <input
                type='text'
                placeholder='Wpisz swoje pytanie...'
                value={inputText}
                onChange={e => setInputText(e.target.value)}
              />
              <button type='submit'>
                <FontAwesomeIcon icon={faPaperPlane} onClick={handleUserInput} />
              </button>
            </form>
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
