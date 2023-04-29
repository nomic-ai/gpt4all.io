import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";


const InstallInstructions = () => {

  const hide = useState(true);
  return (
    <Tabs
    defaultValue="windows" className="w-full"
    >
      <TabsList className="grid grid-cols-3 w-[400px] mx-auto mb-8">
        <TabsTrigger value="windows">Windows</TabsTrigger>
        <TabsTrigger value="macos">MacOS</TabsTrigger>
        <TabsTrigger value="ubuntu">Ubuntu</TabsTrigger>
      </TabsList>

      <TabsContent value="windows">
        <div className="mx-auto w-[900px] rounded-md bg-slate-50/50 p-6 flex flex-col">
          <h2 className="text-xl font-semibold">
            Windows Installer
          </h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </div>
      </TabsContent>
      <TabsContent value="macos">
        <div className="mx-auto w-[900px] rounded-md bg-slate-50/50 p-6 flex flex-col">
          <h2 className="text-xl font-semibold">
            MacOS Installer
          </h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </div>
      </TabsContent>
      <TabsContent value="ubuntu">
        <div className="mx-auto w-[900px] rounded-md bg-slate-50/50 p-6 flex flex-col">
          <h2 className="text-xl font-semibold">
            Ubuntu Installer
          </h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default InstallInstructions;