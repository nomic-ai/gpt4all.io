import './styles/globals.css';
import React, { useState, useEffect } from 'react';
import Vertical from './components/connectors/vertical';
import { ChevronDown } from "lucide-react";

import DownloadBar from './components/download_bar';
import InstallInstructions from './components/install_instructions';
import EcosystemItem from './components/ecosystem_item';
import CapabilityCard from './components/capability_card';
import PerformanceTable, { PerformanceTableMobile } from './components/performance_table';
import ModelsTable from './components/models';

// TODO: media breakpoints

// Links to project in the GPT4All ecosystem. Lives here as const to keep things easy.
const ecosystem_links = [
    {
        icon: "/github-mark.svg",
        url: "https://github.com/nomic-ai/gpt4all",
        title: "GPT4All Training",
        description: "Train your own GPT4All models."
    },
    {
        icon: "/github-mark.svg",
        url: "https://github.com/nomic-ai/gpt4all",
        title: "GPT4All Chat Source",
        description: "See the source code of the chat launcher and contribute!"
    },
    {
        icon: "/github-mark.svg",
        url: "https://github.com/nomic-ai/pygpt4all",
        title: "Python Bindings",
        description: "GPT4All Python Bindings"
    }
    
   
]

// Update installers here
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

    const [showMore, setShowMore] = useState(false);

    return (
    <div className='App font-sans w-screen h-screen flex flex-col overflow-x-hidden relative'>
      <header className='z-20 fixed w-full h-14 p-6 flex flex-row gap-8 items-center bg-slate-50/50'>
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
      <main className='flex flex-col justify-center h-full items-center px-8 md:px-36 mt-36'>
        <div className='flex flex-col lg:flex-row justify-center lg:justify-between w-full'>
            <div className='flex flex-col w-full lg:w-1/2 gap-4 text-center md:text-start'>
                <h2 className='text-xl md:text-3xl font-bold'>
                    GPT4All
                </h2>
                <p className='text-3xl md:text-5xl leading-normal lg:pr-12'>
                A free-to-use, locally running, privacy-aware chatbot. <strong>No GPU required.</strong>
                </p>

            </div>

            <div className='w-full lg:w-1/2 lg:pl-24 mt-8 lg:mt-0'>
                <div>
                    <p>
                    <img
                        src={process.env.PUBLIC_URL + "/landing.gif"}
                        className='rounded-md h-full mx-auto lg:mx-none'
                    />
                    </p>
                    <p className='text-xs text-slate-400 mt-2 ml-12'>Real-time inference latency on an M1 Mac</p>
                </div>
            </div>
        </div>



        <div className='flex flex-col gap-4 mt-24 w-full items-center'>
            <h4 className='font-semibold text-zinc-500/50 text-lg'>Download Desktop Chat Client</h4>
            
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

        <div className='w-full items-center flex flex-col justify-center mb-24'>

            <Vertical/>
            <h2 className='text-4xl font-bold text-center mt-8'>
                    GPT4All's Capabilities
            </h2>
            <span className='text-lg text-slate-500 text-center mt-2 px-6 sm:px-0'>Explore what GPT4All can do. On your own hardware.</span>
        </div>

      </main>
      <div className='w-full px-8 md:px-36 mt-8 flex justify-center'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <CapabilityCard
                        header="Answer question about the world"
                        description="Ask GPT4All about anything."
                        gif={process.env.PUBLIC_URL+"/code_example.gif"}
                        still={process.env.PUBLIC_URL+"/code_still.png"}
                    />

                    <CapabilityCard
                        header="Personal writing assistant"
                        description="Write emails, documents, creative stories, poems, and plays."
                        gif={process.env.PUBLIC_URL+"/code_example.gif"}
                        still={process.env.PUBLIC_URL+"/code_still.png"}
                    />

                    <CapabilityCard
                        header="Understand documents"
                        description="Provide your own text documents and receive summaries and answers about their contents, fully locally."
                        gif={process.env.PUBLIC_URL+"/code_example.gif"}
                        still={process.env.PUBLIC_URL+"/code_still.png"}
                    />

                    <CapabilityCard
                        header="Write code"
                        description="GPT4All can assist you in writing code."
                        gif={process.env.PUBLIC_URL+"/code_example.gif"}
                        still={process.env.PUBLIC_URL+"/code_still.png"}
                    />
            </div>

        </div>
        <div className='w-full flex flex-col px-4 sm:px-8 md:px-36 mt-24'>
            <h2 className='text-4xl font-bold text-center'>
                    Installation Instructions
            </h2>
            <div className='w-full mt-8'>
                    <InstallInstructions/>
            </div>
        </div>
        
        <div className='hidden sm:block w-full flex flex-col justify-center gap-8 px-4 md:px-36 mt-14'>
            <h2 className='text-4xl font-bold text-center mb-4'>Performance Benchmarks</h2>
            <PerformanceTable/>
        </div>

        <div className='sm:hidden block w-full flex flex-col justify-center gap-8 px-4 md:px-36 mt-14'>
            <h2 className='text-4xl font-bold text-center'>Performance Benchmarks</h2>
            <PerformanceTableMobile/>
        </div>

        
        <div className='flex flex-col w-full text-center gap-4 sm:px-0 px-4'>
            <h2 className='text-4xl font-semibold mt-24'>
                GPT4All Ecosystem
            </h2>
            <span className='text-lg text-slate-500 text-center'>Explore the GPT4All open source ecosystem</span>

        </div>
        <div className={`w-full flex justify-center ${showMore ? "h-full": "max-h-[300px]"} mt-12`}>
            <div className='grid grid-cols-1 sm:grid-cols-3 px-4 sm:px-8 md:px-36 relative gap-4 mx-auto h-full overflow-hidden'>
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
                
                {/*<div className={`${showMore ? "hidden": ""} group z-10 absolute bottom-0 left-0 w-full h-24 items-end flex justify-center bg-gradient-to-t from-white`}>*/}
                {/*    <button onClick={() => setShowMore(true)} className='bg-transparent flex flex-col items-center'>*/}
                {/*        <span className='text-xs text-slate-600 group-hover:text-black'>Show more</span>*/}
                {/*        <ChevronDown className='w-6 h-6'/>*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
        </div>
        <div className='w-full px-4 sm:px-8 md:px-36 flex flex-col justify-center items-center mt-14 gap-8'>
            <h2 className='text-4xl font-bold text-center'>How GPT4All Works</h2>
            <p className='leading-normal w-full lg:w-2/3 mx-auto'>
                GTP4All is an ecosystem to train and deploy <b>powerful</b> and <b>customized</b> large language models that run <b>locally</b> on consumer grade CPUs.

            </p>
        </div>
        <div className='w-full px-4 sm:px-8 md:px-36 flex justify-center items-center mt-14'>
            <ModelsTable/>
        </div>
        <div className='h-48 mt-24 w-screen'></div>
      {/*<footer>footer</footer>*/}
    </div>
  );
}

export default App;
