import React from "react";
import { Button } from "./ui/button";
import {ReactComponent as WindowsLogo} from "../icons/windows.svg";
import {ReactComponent as OSXLogo} from "../icons/apple.svg";
import {ReactComponent as UbuntuLogo} from "../icons/ubuntu.svg";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown";

const DownloadBar = (
    {
        osName,
        linkMain,
        linkAlt,
    }
) => {
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="w-48 text-md font-semibold">
                    {
                        osName === "Windows" &&
                        <WindowsLogo
                            className="w-4 h-4 mr-1"
                        />
                    }
                    {
                        osName === "OSX" &&
                        <OSXLogo
                            className="w-4 h-4 mr-2"
                        />
                    }
                    {
                        osName === "Ubuntu" &&
                        <UbuntuLogo
                            className="w-4 h-4 mr-2"
                        />
                    }
                    {osName} Installer
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 border-none bg-[#0f172a]">
                    <DropdownMenuGroup>
                        <DropdownMenuItem onClickclassName="cursor-pointer my-1 hover:bg-slate-800">
                            <a href={linkMain} className="font-semibold text-white">{osName} Installer</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer my-1 hover:bg-slate-800">
                            <a href={linkAlt} className="font-semibold text-white">{osName} AVX Only</a>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};

export default DownloadBar;