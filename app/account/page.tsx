import Link from "next/link";
import EmptyState from "../../components/EmptyState";
import { getCurrentUser } from "../../utils";
import UpdateImageForm from "./UpdateImageForm";

const AccountPage = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div>
      {currentUser ? (
        <>
          <div className="flex flex-col dark:text-white">
            <div className="w-fit p-4 text-2xl">Account</div>
            <Link className="w-fit pb-2 underline" href="/account/details">
              My Details
            </Link>
            <Link className="w-fit pb-2 underline" href="/account/dislikes">
              My Dislikes
            </Link>
            <Link className="w-fit pb-2 underline" href="/account/favorites">
              My Favorites
            </Link>
            <Link className="w-fit pb-2 underline" href="/account/properties">
              My Properties
            </Link>
            <Link className="w-fit pb-2 underline" href="/account/reservations">
              My Reservations
            </Link>
            <Link className="w-fit pb-2 underline" href="/account/trips">
              My Trips
            </Link>
          </div>
          <UpdateImageForm />
        </>
      ) : (
        <EmptyState title="Unauthorized" subtitle="Please login" />
      )}
    </div>
  );
};

export default AccountPage;
