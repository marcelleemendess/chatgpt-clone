"use client"

import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";

function SideBar() {
  const { data: session} = useSession(); //hook to access the user session data from NextAuth. The session data is destructured from the hook response and assigned to the session variable

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
            <NewChat/>
            <div>{/* ModelSelection */}</div>

            {/* Map through the ChatRows */}
        </div>
      </div>
      {session && (
              <img
                onClick={()=> signOut()} 
                src={session.user?.image!}  
                alt="Profile Picture"
                className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
              />
            )}
    </div>
  )
}

export default SideBar
