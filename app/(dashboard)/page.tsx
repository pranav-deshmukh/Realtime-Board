"use client"

import { useOrganization } from "@clerk/nextjs";
import { Emptyorg } from "./_components/empty-org";
import { BoardList } from "./board-list";

interface DashboardPageProps{
  searchParams:{
    seardh?:string,
    favorites?:string,
  }
}

const DashboardPage = ({
searchParams
}:DashboardPageProps)=>{
  const {organization} = useOrganization()


  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization?(
        <Emptyorg/>
        ):(
          <BoardList
          orgId={organization.id}
          query={searchParams}
          />
      )}
    </div>
  )
}
export default DashboardPage;