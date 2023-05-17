import EmptyState from "../../app/components/EmptyState";
import ClientOnly from "../../app/components/ClientOnly";

import getCurrentUser from "../../app/actions/getCurrentUser";
import getDislikedListings from "../../app/actions/getDislikeListings";

import DislikedClient from "./DislikesClient";

const ListingPage = async () => {
  const listings = await getDislikedListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No dislikes found"
          subtitle="Looks like you have no dislike listings."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <DislikedClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default ListingPage;
