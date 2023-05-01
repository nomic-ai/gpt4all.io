import './styles/globals.css';
import React, { useState, useEffect } from 'react';
import Vertical from './components/connectors/vertical';
import { ChevronDown } from "lucide-react";

import DownloadBar from './components/download_bar';
import InstallInstructions from './components/install_instructions';
import EcosystemItem from './components/ecosystem_item';
import CapabilityCard from './components/capability_card';
import PerformanceTable from './components/performance_table';

// TODO: media breakpoints

// TODO: fetch download links from .json blob

// TODO: "hot tasks" as buttons/cards, "feeding" into the
// gif/example viewer, as you select a task, changes the gif example to that specific task

const ecosystem_links = [
    {
        icon: null,
        url: "#",
        title: "Testing",
        description: "A test GPT4All project that does cool things with LLMs"   
    },
    {
        icon: null,
        url: "#",
        title: "Testing",
        description: "A test GPT4All project that does cool things with LLMs"   
    },
    {
        icon: null,
        url: "#",
        title: "Testing",
        description: "A test GPT4All project that does cool things with LLMs"   
    },
    {
        icon: null,
        url: "#",
        title: "Testing",
        description: "A test GPT4All project that does cool things with LLMs"   
    },
    {
        icon: null,
        url: "#",
        title: "Testing",
        description: "A test GPT4All project that does cool things with LLMs"   
    },
    {
        icon: null,
        url: "#",
        title: "Testing",
        description: "A test GPT4All project that does cool things with LLMs"   
    },
    {
        icon: null,
        url: "#",
        title: "Testing",
        description: "A test GPT4All project that does cool things with LLMs"   
    },
    {
        icon: null,
        url: "#",
        title: "Testing",
        description: "A test GPT4All project that does cool things with LLMs"   
    },
    {
        icon: null,
        url: "#",
        title: "Testing",
        description: "A test GPT4All project that does cool things with LLMs"   
    },
    {
        icon: null,
        url: "#",
        title: "Testing",
        description: "A test GPT4All project that does cool things with LLMs"   
    },
    {
        icon: null,
        url: "#",
        title: "Testing",
        description: "A test GPT4All project that does cool things with LLMs"   
    },
    {
        icon: null,
        url: "#",
        title: "Testing",
        description: "A test GPT4All project that does cool things with LLMs"   
    },
    {
        icon: null,
        url: "#",
        title: "Testing",
        description: "A test GPT4All project that does cool things with LLMs"   
    },
    {
        icon: null,
        url: "#",
        title: "Testing",
        description: "A test GPT4All project that does cool things with LLMs"   
    },
]


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

// TODO: fetch available models
const getModels = async () => {
    return await fetch()
};

// TODO: build experimental results table -> add average score col -> bold top score in each -> highlight vGroovy

function App() {

    const [showMore, setShowMore] = useState(false);
    const [models, setModels] = useState([]);

    

    return (
    <div className='App font-sans w-screen h-screen flex flex-col overflow-x-hidden relative'>
      <header className='z-20 fixed w-full h-14 p-6 flex flex-row gap-8 items-center bg-slate-50/50 backdrop-blur-sm'>
        <img
            src={process.env.PUBLIC_URL + "/gpt4all-128.png"}
            className='w-8 h-8'
        />
        <a href='https://github.com/nomic-ai/gpt4all'>
           <img
            src={process.env.PUBLIC_URL + "/github-mark.svg"}
            className='w-8 h-8'
           />
        </a>
      </header>
      <main className='flex flex-col justify-center h-full items-center px-36 mt-36'>
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
                    <CapabilityCard
                        header="Answer questions about the world"
                        description="Ask GPT4All about anything on your mind, from philosophy to mathematics. A conversational way to learn new concepts."
                        gif="#"
                    />

                    <CapabilityCard
                        header="Personal writing assistant"
                        description="GPT4all can write emails, documents, and assist with writing creative stories, poems, and plays."
                        gif="#"
                    />

                    <CapabilityCard
                        header="Understand documents"
                        description="Provide your own text documents and receive summaries and answers about their contents, fully locally."
                        gif="#"
                    />

                    <CapabilityCard
                        header="Write code"
                        description="GPT4All can assist you in writing code by Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
            </div>

        </div>
        <div className='w-full flex flex-col px-36 mt-24'>
            <h2 className='text-4xl font-bold text-center'>
                    Install Instructions
            </h2>
            <div className='w-full mt-8'>
                    <InstallInstructions/>
            </div>
        </div>
        
        <div className='w-full flex flex-col justify-center gap-8 px-36 mt-14'>
            <h2 className='text-4xl font-bold text-center'>Model Performance</h2>
            <PerformanceTable/>
        </div>

        
        <div className='flex flex-col w-full text-center gap-4'>
            <h2 className='text-4xl font-semibold mt-24'>
                GPT4All Ecosystem
            </h2>
            <span className='text-lg text-slate-500 text-center'>Explore the GPT4All open source community</span>

        </div>
        <div className={`w-full flex justify-center ${showMore ? "h-full": "max-h-[300px]"} mt-12`}>
            <div className='grid grid-cols-3 px-36 relative gap-4 mx-auto h-full overflow-hidden'>
                {
                    ecosystem_links.map((obj, idx) =>
                        <EcosystemItem
                            key={idx}
                            icon={obj.icon}
                            url={obj.url}
                            title={obj.title}
                            description={obj.description}
                        />
                    )
                }
                
                <div className={`${showMore ? "hidden": ""} group z-10 absolute bottom-0 left-0 w-full h-24 items-end flex justify-center bg-gradient-to-t from-white`}>
                    <button onClick={() => setShowMore(true)} className='bg-transparent flex flex-col items-center'>
                        <span className='text-xs text-slate-600 group-hover:text-black'>Show more</span>
                        <ChevronDown className='w-6 h-6'/>
                    </button>
                </div>
            </div>
        </div>
        <div className='w-full px-36 flex flex-col justify-center items-center mt-14 gap-8'>
            <h2 className='text-4xl font-bold text-center'>How GPT4All Works</h2>
            <p className='leading-normal w-2/3 mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
        </div>
        <div className='h-48 mt-24 w-screen'></div>
      {/*<footer>footer</footer>*/}
    </div>
  );
}

export default App;
