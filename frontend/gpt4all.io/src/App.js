import './styles/globals.css';
import React, { useState, useEffect } from 'react';
import Vertical from './components/connectors/vertical';
import { Globe2, Edit3, FileSearch, Terminal } from "lucide-react";

import DownloadBar from './components/download_bar';


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

        {/* TODO: fix the spacing and animation here */}
        <div className='w-full items-center flex flex-col justify-center mb-24'>

            <Vertical/>
            <h2 className='text-4xl font-bold text-center mt-8'>
                    GPT4All's Capabilities
            </h2>
            <span className='text-lg text-slate-500 text-center mt-2'>Explore what GPT4All can do. On your machine.</span>
        </div>

        



      </main>
      <div className='w-full px-36 mt-8 flex justify-center'>
        <div className='grid grid-cols-2 gap-6'>
                    <div className='w-[450px] h-[380px] text-center border rounded-md flex flex-col gap-4'>
                        <div className='w-full h-2/3'>

                        </div>
                        <div className='flex flex-col gap-2 px-4'>
                            <h2 className='text-2xl font-semibold'>Answer questions about the world</h2>
                            <p className='text-sm font-normal leading normal'>
                                Ask GPT4All about anything on your mind, from philosophy to mathematics. A conversational way to learn new concepts.
                            </p>
                        </div>
                    </div>

                    <div className='w-[450px] h-[380px] text-center border rounded-md flex flex-col gap-4'>
                        <div className='w-full h-2/3'>

                        </div>
                        <div className='flex flex-col gap-2 px-12'>
                            <h2 className='text-2xl font-semibold'>Personal writing assistant</h2>
                            <p className='text-sm font-normal leading normal'>
                            GPT4all can write emails, documents, and assist with writing creative stories, poems, and plays.
                            </p>
                        </div>
                    </div>

                    <div className='w-[450px] h-[380px] text-center border rounded-md flex flex-col gap-4'>
                        <div className='w-full h-2/3'>

                        </div>
                        <div className='flex flex-col gap-2 px-12'>
                            <h2 className='text-2xl font-semibold'>Understand documents</h2>
                            <p className='text-sm font-normal leading normal'>
                                Provide your own text documents and receive summaries and answers about their contents, fully locally.
                            </p>
                        </div>
                    </div>
                    <div className='w-[450px] h-[380px] text-center border rounded-md flex flex-col gap-4'>
                        <div className='w-full h-2/3'>

                        </div>
                        <div className='flex flex-col gap-2 px-12'>
                            <h2 className='text-2xl font-semibold'>Write code</h2>
                            <p className='text-sm font-normal leading normal'>
                            GPT4All can assist you in writing code by Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>

                
            </div>
        </div>
      {/*<footer>footer</footer>*/}
    </div>
  );
}

export default App;
