"use client";

import { useRouter } from "next/navigation";

import AirButton from "../libs/air-design/src/components/AirButton/AirButton";
import Heading from "./Heading";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters.",
  showReset,
}) => {
  const router = useRouter();

  return (
    <div
      className="
        flex
        h-[60vh] 
        flex-col 
        items-center 
        justify-center 
        gap-2 
      "
    >
      <Heading center title={title} subtitle={subtitle} />
      <div className="mt-4 w-48">
        {showReset && (
          <AirButton outline onClick={() => router.push("/")}>
            Remove all filters
          </AirButton>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
