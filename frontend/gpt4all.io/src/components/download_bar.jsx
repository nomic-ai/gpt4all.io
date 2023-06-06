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
    }
) => {
    
    return (
        <a href={linkMain} className="font-semibold text-white">
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
        </a>
    )
};

export default DownloadBar;