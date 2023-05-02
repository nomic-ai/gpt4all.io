import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";


const InstallInstructions = () => {

  const hide = useState(true);
  return (
    <Tabs
    defaultValue="windows" className="w-full"
    >
      <TabsList className="grid grid-cols-3 w-full sm:w-[400px] mx-auto mb-8">
        <TabsTrigger value="windows">Windows</TabsTrigger>
        <TabsTrigger value="macos">MacOS</TabsTrigger>
        <TabsTrigger value="ubuntu">Ubuntu</TabsTrigger>
      </TabsList>

      <TabsContent value="windows">
        <div className="mx-auto w-full lg:w-[900px] rounded-md bg-slate-50/50 p-6 flex flex-col">
          <h2 className="text-xl font-semibold">
            Windows Installer
          </h2>
          <p>
            After download and installation you should be able to find the application in the directory you specified in the installer.
            You will find a desktop icon for GPT4All after installation.
          </p>
          <p>NOTE: On Windows, the installer might show a security complaint. This is being addressed as we're actively setting up cert sign for Windows.</p>
        </div>
      </TabsContent>
      <TabsContent value="macos">
        <div className="mx-auto w-[900px] rounded-md bg-slate-50/50 p-6 flex flex-col">
          <h2 className="text-xl font-semibold">
            MacOS Installer
          </h2>
          <p>
            After download and installation you should be able to find the application in the directory you specified in the installer.
            On macOS if you chose the default install location you'll find the application in the shared /Applications folder.
          </p>
          <p>
            NOTE: You will be need to be on the latest version of OSX.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="ubuntu">
        <div className="mx-auto w-[900px] rounded-md bg-slate-50/50 p-6 flex flex-col">
          <h2 className="text-xl font-semibold">
            Ubuntu Installer
          </h2>
          <p>
            After download and installation you should be able to find the application in the directory you specified in the installer.

          </p>
          <p>
            NOTE: You may need to build from source if you are not working off of the latest version of Ubuntu.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default InstallInstructions;