import React from "react";

const Quote = () => {
  return (
    <div className="h-screen bg-slate-200 flex flex-col justify-center gap-y-4">
      <div className="flex justify-center">
        <div className="max-w-md">
          <div className="text-3xl font-bold">
            "The customer service i recieved was exceptional. The support team
            went above and beyond to address my concerns"
          </div>
          <div className="max-w-lg  font-semibold text-xl">
            Vaibhav Tanwar
          </div>
          <div className="max-w-lg  text-slate-900 font-light text-lg">
            CEO | Lestic
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
