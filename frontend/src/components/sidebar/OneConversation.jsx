import React from "react";

const OneConversation = () => {
  return (
    <>
      <div className="flex items-center gap-2 hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
            <div className="w-12 rounded-full">
                <img src="https://images.unsplash.com/photo-1657642119697-6a70dc74c03d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGN1dGUlMjByb2JvdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>

        </div>
        <div className="flex flex-col flex-1">
            <div className="flex gap-2 justify-between">
                <p className="font-bold text-gray-600">Bonky Bonk</p>
                <span className="text-xl">🐷</span>
            </div>
        </div>
      </div>
        <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default OneConversation;
