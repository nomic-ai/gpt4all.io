import './styles/globals.css';
import React, { useState, useEffect } from 'react';
import Task from './components/task';
import Vertical from './components/connectors/vertical';

import DownloadBar from './components/download_bar';

// https://blog.saeloun.com/2022/07/08/react-custom-infinite-scroll-with-pagination
// TODO, implement position tracking in history (share url by timestamp)
// Implement hook in coffee site


// TODO: media breakpoints

// TODO: fetch download links from .json blob

// TODO: "hot tasks" as buttons/cards, "feeding" into the
// gif/example viewer, as you select a task, changes the gif example to that specific task

const installers = [
    {
        osName: "Windows", link: "#"
    },
    {
        osName: "OSX", link: "#"
    },
    {
        osName: "Ubuntu", link: "#"
    }
];

function App() {
  return (
    <div className='App font-sans w-screen h-screen flex flex-col overflow-x-hidden'>
      <header className='w-full h-14 p-6 flex flex-row'>
      </header>
      <main className='flex flex-col justify-center h-full items-center px-36 mt-24'>
        <div className='flex flex-row justify-between w-full'>
            <div className='flex flex-col w-1/2 gap-4'>
                <h2 className='text-3xl font-bold'>
                    GPT4All
                </h2>
                <p className='text-5xl leading-normal pr-12'>
                A free-to-use, locally running, privacy-aware chatbot that runs on your laptop. <strong>No GPU required.</strong>
                </p>

            </div>

            <div className='w-1/2'>
                <div className='border w-full h-full'>
                    placeholder for gif
                </div>
            </div>
        </div>



        <div className='flex flex-col gap-4 mt-24 w-full items-center'>
            <h4 className='font-semibold text-zinc-500/50 text-lg'>Download Installers</h4>
            
            <div className='flex flex-row justify-center gap-24 mt-4'>
                {installers.map((obj, idx) =>
                    <DownloadBar
                        key={idx}
                        osName={obj.osName}
                        link={obj.link}
                    />
                )}
            </div>
        </div>
        <div className='w-full items-center flex justify-center'>

        <Vertical/>
        </div>


      </main>
      {/*<footer>footer</footer>*/}
    </div>
  );
}

export default App;
