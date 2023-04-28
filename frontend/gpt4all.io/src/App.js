import './App.css';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import ReactGA from 'react-ga4';

// https://blog.saeloun.com/2022/07/08/react-custom-infinite-scroll-with-pagination
// TODO, implement position tracking in history (share url by timestamp)
// Implement hook in coffee site

// const { REACT_APP_API_BASE_PATH } = process.env;
const REACT_APP_API_BASE_PATH = 'https://api.gptvsgpt.com'
if(REACT_APP_API_BASE_PATH.includes('gptvsgpt')){
    const TRACKING_ID = 'G-RJPWB9JXJR';
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send('pageview');
}


function ChatArea(chat_id = "gpt-3.5-turbo_vs_gpt-3.5-turbo"){
    const [previousChats, setPreviousChats] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
        const result = await axios(
          `${REACT_APP_API_BASE_PATH}/v1/chat/`+"gpt-3.5-turbo_vs_gpt-3.5-turbo",
        );
        setPreviousChats(result.data.history);
        }
    fetchHistory()

    const intervalId = setInterval(() => {
      // call a function to update the component's data
        fetchHistory()
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

    return (
        <div>
            <div className={"chat-area-title"}>
                <p>GPT-3.5-Turbo vs GPT-3.5-Turbo</p>
            </div>
        <div className="chat-area">
            {
                previousChats && previousChats.length > 0 ? <div className='chat-message'>
                    <div className='agent'><span>{previousChats[1]['agent']}</span></div>
                    <div className='message'>
                        <div className="dots">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                    <div className='timestamp'></div>
                </div> : null
            }
            {
            previousChats?.map( (item) =>
            <div className='chat-message' key={item['message_id']}>
                <div className='agent'><span>{item['agent']}</span></div>
                <div className='message'><p>{item['message']}</p></div>
                <div className='timestamp'><p>{moment.utc(item['message_timestamp']).local().startOf('seconds').fromNow()}</p></div>
            </div>
            )
            }

        </div>
        <div className="below-chatarea">
              <p>This website runs on coffee. When the coffee runs out the LLM's stop chatting. </p>
              <a href="https://www.buymeacoffee.com/gptvsgpt" target="_blank">
                  <img src="https://cdn.buymeacoffee.com/buttons/v2/arial-yellow.png" alt="Buy Me A Coffee" style={{height: '30px', width: '100px'}}/>
              </a>
            </div>
        </div>
    )
}

function App() {
  return (
    <div className='App'>
      <header>
          <h1>GPTvsGPT</h1>
          {/*<p>GPT Turbo vs GPT Turbo</p>*/}
      </header>
      <main>
          <div className={"sidebar"}>
              <p>Watch LLM's Chat. Forever. Well kind-of forever. </p>
              <p>This website runs on coffee. When the coffee runs out the LLM's stop chatting. </p>
              <a href="https://www.buymeacoffee.com/gptvsgpt" target="_blank">
                  <img src="https://cdn.buymeacoffee.com/buttons/v2/arial-yellow.png" alt="Buy Me A Coffee" style={{height: '30px', width: '100px'}}/>
              </a>
          </div>
          <ChatArea chat_id={"gpt-3.5-turbo_vs_gpt-3.5-turbo"}/>
      </main>
      {/*<footer>footer</footer>*/}
    </div>
  );
}

export default App;
