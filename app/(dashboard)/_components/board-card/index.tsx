"use client";
import Image from "next/image";
import Link from "next/link";
import { Overlay } from "./overlay";
import {formatDistanceToNow} from "date-fns"
import { useAuth } from "@clerk/nextjs";
import { Footer } from "./footer";

interface BoardCardProps {
  id: string;
  title: string;
  authorName: string;
  authorId: number;
  createdAt: number;
  imageUrl: string;
  orgId: string;
  isFavorite: boolean;
}

export const BoardCard = ({
  id,
  title,
  authorName,
  authorId,
  createdAt,
  imageUrl,
  orgId,
  isFavorite,
}: BoardCardProps) => {
    const {userId} = useAuth()
    const authorLabel = Number(userId) === authorId?"You":authorName;

    const createdAtLabel = formatDistanceToNow(createdAt, {
        addSuffix:true,
    })

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
            <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-fill"
            />
            <Overlay/>
        </div>
        {/* <Footer
            title={title}
            authorLabel={authorLabel}
            createdAtLabel={createdAtLabel}
            disabled
            isFavorite
            
        /> */}
      </div>
    </Link>
  );
};
