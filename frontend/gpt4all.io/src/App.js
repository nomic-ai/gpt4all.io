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
        description: "Train your own GPT4All models.",
    },
    {
        icon: "/github-mark.svg",
        url: "https://github.com/nomic-ai/gpt4all",
        title: "GPT4All Chat",
        description: "A multi-platform chat interface for running local LLMs"
    },
    {
        icon: "/github-mark.svg",
        url: "https://docs.gpt4all.io",
        title: "Python Bindings",
        description: "Integrate a locally running LLM in any Python environment."
    }
    
   
]

// Update installers here
const installers = [
    {
        osName: "Windows",
        linkMain: "https://gpt4all.io/installers/gpt4all-installer-win64.exe",
        linkAlt: 'https://gpt4all.io/installers/gpt4all-installer-win64-avx-only.exe'
    },
    {
        osName: "OSX",
        linkMain: "https://gpt4all.io/installers/gpt4all-installer-darwin.dmg",
        linkAlt: 'https://gpt4all.io/installers/gpt4all-installer-darwin-avx-only.dmg'
    },
    {
        osName: "Ubuntu",
        linkMain: "https://gpt4all.io/installers/gpt4all-installer-linux.run",
        linkAlt: 'https://gpt4all.io/installers/gpt4all-installer-linux-avx-only.run'
    }
];


function App() {

    const [showMore, setShowMore] = useState(false);

    return (
    <div className='App font-sans w-screen h-screen flex flex-col overflow-x-hidden relative'>
      <header className='z-20 fixed w-full h-14 p-6 flex flex-row gap-8 items-center bg-slate-50/50'>
        <img
            alt="gpt4all logo"
            src={process.env.PUBLIC_URL + "/gpt4all-128.png"}
            className='w-8 h-8'
        />
        <a href='https://github.com/nomic-ai/gpt4all'>
           <img
           alt="github logo"
            src={process.env.PUBLIC_URL + "/github-mark.svg"}
            className='w-8 h-8'
           />
        </a>
        <a href='https://discord.gg/mGZE39AS3e'>
           <img
           alt="Discord link"
            src={process.env.PUBLIC_URL + "/discord-mark-black.svg"}
            className='w-8 h-8'
           />
        </a>
        <title>GPT4All</title>
      </header>
      <main className='flex flex-col justify-center h-full items-center px-8 md:px-36 mt-[8rem] xl:mt-24'>
        <div className='2md:mt-0 flex flex-col lg:flex-row justify-center lg:justify-between w-full'>
            <div className='flex flex-col w-full lg:w-1/2 gap-4 text-center md:text-start'>
                <h2 className='text-xl md:text-3xl font-bold text-center 2md:text-start'>
                    GPT4All
                </h2>
                <p className='text-3xl xl:text-5xl leading-normal lg:pr-12 text-center 2md:text-start'>
                A free-to-use, locally running, privacy-aware chatbot. <strong>No GPU or internet required.</strong>
                </p>

            </div>

            <div className='w-full lg:w-1/2 xl:pl-24 mt-8 lg:mt-0'>
                <div>
                    <p>
                    <img
                        src={process.env.PUBLIC_URL + "/landing.gif"}
                        className='rounded-md w-full mx-auto lg:mx-none'
                    />
                    </p>
                    <p className='text-xs text-slate-400 mt-2'>Real-time inference latency on an M1 Mac</p>
                </div>
            </div>
        </div>



        <div className='flex flex-col gap-4 mt-24 w-full items-center'>
            <h4 className='font-semibold text-zinc-500/50 text-lg'>Download Desktop Chat Client</h4>
            
            <div className='hidden md:flex flex-row justify-center gap-8 lg:gap-24 mt-4'>
                {installers.map((obj, idx) =>
                    <DownloadBar
                        key={idx}
                        osName={obj.osName}
                        linkMain={obj.linkMain}
                        linkAlt={obj.linkAlt}
                    />
                )}
            </div>
            <div className='flex md:hidden justify-center items-center'>
                    <h2 className='text-xl text-center'>Please view on Desktop to download</h2>
            </div>
        </div>

        {/* <div className='w-full items-center flex flex-col justify-center mb-24'>

            <Vertical/>
            <h2 className='text-4xl font-bold text-center mt-8'>
                    GPT4All's Capabilities
            </h2>
            <span className='text-lg text-slate-500 text-center mt-2 px-6 sm:px-0'>Explore what GPT4All can do. On your own hardware.</span>
        </div> */}

      </main>
      <div className='w-full items-center flex flex-col justify-center my-14'>

            <Vertical/>
            <h2 className='text-4xl font-bold text-center mt-8'>
                    GPT4All's Capabilities
            </h2>
            <span className='text-lg text-slate-500 text-center mt-2 px-6 sm:px-0'>Explore what GPT4All can do. On your own hardware.</span>
        </div>
      <div className='w-full px-8 md:px-36 mt-8 flex justify-center'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <CapabilityCard
                        header="Answer questions about the world"
                        description="Ask GPT4All about anything."
                        gif={process.env.PUBLIC_URL+"/roman_gpt4all.gif"}
                        still={process.env.PUBLIC_URL+"/roman_gpt4all_still.png"}
                        alt="GPT4all describing the collapse of the Roman Empire"
                    />

                    <CapabilityCard
                        header="Personal writing assistant"
                        description="Write emails, documents, creative stories, poems, songs and plays."
                        gif={process.env.PUBLIC_URL+"/robot_poem_gpt4all.gif"}
                        still={process.env.PUBLIC_URL+"/robot_poem_gpt4all_still.png"}
                        alt="GPT4all writing a poem."
                    />

                    <CapabilityCard
                        header="Understand documents"
                        description="Provide your own text documents and receive summaries and answers about their contents."
                        gif={process.env.PUBLIC_URL+"/baroque_gpt4all.gif"}
                        still={process.env.PUBLIC_URL+"/baroque_gpt4all_still.png"}
                        alt="GIF of GPT4all summarizing a paragraph from Wikipedia."
                    />

                    <CapabilityCard
                        header="Write code"
                        description="Get guidance on easy coding tasks. Code capabilities are under improvement."
                        gif={process.env.PUBLIC_URL+"/web_request_gpt4all.gif"}
                        still={process.env.PUBLIC_URL+"/web_request_gpt4all_still.png"}
                        alt="GPT4all writing Python code."
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
        
        <div className='hidden lg:block w-full flex flex-col justify-center gap-8 px-4 md:px-36 mt-14'>
            <h2 className='text-4xl font-bold text-center mb-4'>Performance Benchmarks</h2>
            <PerformanceTable/>
        </div>

        {/*<div className='sm:hidden block w-full flex flex-col justify-center gap-8 px-4 md:px-36 mt-14'>*/}
        {/*    <h2 className='text-4xl font-bold text-center'>Performance Benchmarks</h2>*/}
        {/*    <PerformanceTableMobile/>*/}
        {/*</div>*/}

        
        <div className='flex flex-col w-full text-center gap-4 sm:px-0 px-4'>
            <h2 className='text-4xl font-semibold mt-24'>
                GPT4All Ecosystem
            </h2>
            <span className='text-lg text-slate-500 text-center'>Explore the GPT4All open source ecosystem</span>

        </div>
        <div className={`w-full flex justify-center ${showMore ? "h-full": "max-h-[300px]"} mt-12`}>
            <div className='grid grid-cols-1 lg:grid-cols-3 px-4 sm:px-8 md:px-36 relative gap-4 mx-auto h-full overflow-hidden'>
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
            <p className='leading-normal w-full lg:w-2/3 mx-auto'>
                The goal is simple - be the best instruction tuned assistant-style language model that any person or enterprise can freely use, distribute and build on.
            </p>

            <p className='leading-normal w-full lg:w-2/3 mx-auto'>
                A GPT4All model is a 3GB - 8GB file that you can download and plug into the GPT4All open-source ecosystem software. <b>Nomic AI</b> supports and maintains
                this software ecosystem to enforce quality and security alongside spearheading the effort to allow any person or enterprise to easily train and deploy
                their own on-edge large language models.
            </p>


        </div>
        <div className='w-full px-4 sm:px-8 md:px-36 flex justify-center items-center mt-14'>
            <ModelsTable/>
        </div>


        <div className='w-full px-4 sm:px-8 md:px-36 flex flex-col justify-center items-center mt-14 gap-8'>
            <h2 className='text-4xl font-bold text-center'>GPT4All Datasets</h2>
            <p className='leading-normal w-full lg:w-2/3 mx-auto'>
                To train a powerful instruction-tuned assistant on your own data, you need to curate high-quality training and instruction-tuning datasets. Nomic AI has built
                a platform called <b><a href="https://atlas.nomic.ai/">Atlas</a></b> to make manipulating and curating LLM training data easy.
            </p>
            <p className='leading-normal w-full lg:w-2/3 mx-auto'>
                You can find the latest open-source, Atlas-curated GPT4All dataset on <b><a href="https://huggingface.co/datasets/nomic-ai/gpt4all-j-prompt-generations">Huggingface</a></b>.
                Make sure to use the latest data version.
            </p>

        </div>

        <div className='w-full px-4 sm:px-8 md:px-36 flex flex-col justify-center items-center mt-14 gap-8'>
            <h2 className='text-4xl font-bold text-center'>GPT4All Open Source Datalake</h2>
            <p className='leading-normal w-full lg:w-2/3 mx-auto'>
                Data is one the most important ingredients to successfully building a powerful, general purpose large language model. The GPT4All community has built the GPT4All Open Source datalake
                as a staging ground for contributing instruction and assistant tuning data for future GPT4All model trains. It allows anyone to contribute to the democratic process of training
                a large language model.
            </p>
            <p className='leading-normal w-full lg:w-2/3 mx-auto'>
                All data contributions to the GPT4All Datalake will be open-sourced in their raw and Atlas-curated form. You can learn more details about the datalake on <b><a href="https://github.com/nomic-ai/gpt4all-datalake">Github</a></b>. You can contribute by using the GPT4All Chat client and 'opting-in' to
                share your data on start-up. By default, the chat client will not let any conversation history leave your computer.
            </p>

            <p>
                Explore a recent snapshot of the GPT4All Datalake in Atlas below.
            </p>
            <iframe className='hidden lg:block' src="https://atlas.nomic.ai/map/gpt4all-datalake" width="100%" height="1000px">
            </iframe>
            <span className='text-lg text-slate-400 block lg:hidden'>Atlas Map must be viewed on a larger display</span>

        </div>
        <div className='h-48 mt-24 w-screen'></div>
      {/*<footer>footer</footer>*/}
    </div>
  );
}

export default App;
