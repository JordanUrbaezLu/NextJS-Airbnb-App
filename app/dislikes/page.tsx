import Container from "../../components/Container";
import Heading from "../../components/Heading";

import { getCurrentUser, getDislikeListings } from "../../utils";

import EmptyState from "../../components/EmptyState";
import ListingCard from "../../components/listings/ListingCard";

const DislikesPage = async () => {
  const listings = await getDislikeListings();
  const currentUser = await getCurrentUser();

  return (
    <Container>
      {listings.length !== 0 ? (
        <>
          <Heading title="Dislikes" subtitle="List of places you disliked!" />
          <div
            className="
                  mt-10
                  grid 
                  grid-cols-1 
                  gap-8 
                  sm:grid-cols-2 
                  md:grid-cols-3
                  lg:grid-cols-4
                  xl:grid-cols-5
                  2xl:grid-cols-6
                "
          >
            {listings.map((listing: any) => (
              <ListingCard
                currentUser={currentUser}
                key={listing.id}
                data={listing}
              />
            ))}
          </div>
        </>
      ) : (
        <EmptyState
          title="No dislikes found"
          subtitle="Looks like you have no dislike listings."
        />
      )}
    </Container>
  );
};

export default DislikesPage;
