import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FooterProps{
    title:string,
    authorLabel:string,
    createdAtLabel:string,
    isFavorite:boolean,
    onClick:()=>void,
    disabled:boolean,
};

export const Footer=({
    title,
    authorLabel,
    createdAtLabel,
    isFavorite,
    onClick,
    disabled
}:FooterProps)=>{
    return(
        <div className="relative bg-white p-3">
            <p className="text-[13px] truncate max-w-[calc(100%-20px)]">
                {title}
            </p>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px">
                {authorLabel}, {createdAtLabel}
            </p>
            <Button disabled={disabled} onClick={onClick}
            className={cn(
                "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground"
            )}
            >
                <Star/>
            </Button>
        </div>
    )
}