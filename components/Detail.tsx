"use client";

interface DetailProps {
  detail: string | null;
  prefix: string;
}

const Detail: React.FC<DetailProps> = ({ detail, prefix }) => {
  return (
    <div className="p-1">
      <div className="text-rose-500">
        <b className="text-black">{prefix}</b>
        {`  ${detail}`}
      </div>
    </div>
  );
};

export default Detail;
