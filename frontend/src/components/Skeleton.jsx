import React from "react";

const Skeleton = () => {
  return (
    <>
    <div className="flex flex-col gap-4 w-40">
  <div className="flex gap-4 items-center">
    <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
    <div className="flex flex-col gap-4">
      <div className="skeleton h-4 w-20"></div>
      <div className="skeleton h-4 w-28"></div>
    </div>
  </div>
  <div className="skeleton h-6 w-80 mt-6 mb-8"></div>
</div>
    <div className="flex flex-col gap-4 w-40">
  <div className="flex gap-4 items-center">
    <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
    <div className="flex flex-col gap-4">
      <div className="skeleton h-4 w-20"></div>
      <div className="skeleton h-4 w-28"></div>
    </div>
  </div>
  <div className="skeleton h-6 w-80 mb-8"></div>
</div>
    <div className="flex flex-col gap-4 w-40">
  <div className="flex gap-4 items-center">
    <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
    <div className="flex flex-col gap-4">
      <div className="skeleton h-4 w-20"></div>
      <div className="skeleton h-4 w-28"></div>
    </div>
  </div>
  <div className="skeleton h-6 w-80 mb-8 "></div>
</div>

</>
  );
};

export default Skeleton;
