import React, { useState } from 'react';

interface getMoreProps {
  text: string;
  request: () => Promise<void>;
  style?: Partial<{}>;
}

const GetMore = ({ text, request, style }: getMoreProps) => {
  const [isSubmitting, setSubmitting] = useState(false);
  return (
    <>
      <div className="w-100 d-flex justify-content-center">
        <button
          style={style}
          className="btn btn-secondary w-50 active shadow-none"
          onClick={() => {
            //the purpose of this line is to prevent the user from clicking the button when we waiting for another request
            setSubmitting(true);
            request().then(() => {
              setSubmitting(false);
            });
          }}
          disabled={isSubmitting}
        >
          {text}
        </button>
      </div>
    </>
  );
};

export default GetMore;
