import React from "react";

const Tail = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 bg-slate-400 mt-4 mb-4">
        <div className="bg-red-500 text-center">01</div>
        <div className="bg-indigo-700 text-center">02</div>
        <div className="bg-orange-900 text-right">03</div>

        {/* Row with flex items */}
        <div className="flex w-full col-span-3 gap-4">
          <div className="basis-1/4 bg-rose-800 text-center">01</div>
          <div className="basis-1/4 bg-red-400 text-center">02</div>
          <div className="basis-3/4 bg-red-800 text-center">03</div>
        </div>
      </div>
    </div>
  );
};

export default Tail;
