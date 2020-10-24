import React from 'react';

const GetMore = ({ text, click }: { text: string; click: any }) => {
  return (
    <>
      <div className="w-100 d-flex justify-content-center">
        <button
          className="btn btn-secondary w-50 active shadow-none"
          onClick={click}
        >
          {text}
        </button>
      </div>
    </>
  );
};

export default GetMore;
