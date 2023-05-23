"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div
      aria-level={1}
      className={center ? "text-center" : "text-start"}
      role="heading"
    >
      <div className="text-2xl font-bold text-black dark:text-white">
        {title}
      </div>
      <div className="mt-2 font-light text-neutral-500 dark:text-neutral-100">
        {subtitle}
      </div>
    </div>
  );
};

export default Heading;
