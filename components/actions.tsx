"use client"

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu"
import { Link2 } from "lucide-react"

import{
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"

interface ActionsProps{
    children:React.ReactNode,
    side?:DropdownMenuContentProps["side"],
    sideOffest?:DropdownMenuContentProps["sideOffset"],
    id:string,
    title:string,
}

export const Actions=({
    children,
    side,
    sideOffest,
    id,
    title,
}:ActionsProps)=>{
    const onCopyLink=()=>{
        navigator.clipboard.writeText(
            `${window.location.origin}/board/${id}`
        ).then(()=>toast.success("Link copied"))
        .catch(()=>toast.error("Failed to copy link"))
    }

    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent
                onClick={(e)=>e.stopPropagation()}
                side={side}
                sideOffset={sideOffest}
                className="w-60"
            >
                <DropdownMenuItem className="p-3 cursor-pointer" onClick={onCopyLink}>
                    <Link2 className="w-4 h-4 mr-2 "/>
                    Copy board link
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}