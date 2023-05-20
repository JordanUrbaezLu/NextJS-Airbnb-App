import EmptyState from "../../components/EmptyState";

import getCurrentUser from "../../utils/getCurrentUser";
import getFavoriteListings from "../../utils/getFavoriteListings";

import Container from "../../components/Container";
import Heading from "../../components/Heading";
import ListingCard from "../../components/listings/ListingCard";

const FavoritesPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  return (
    <Container>
      {listings.length !== 0 ? (
        <>
          <Heading title="Favorites" subtitle="List of places you favorited!" />
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
          title="No favorites found"
          subtitle="Looks like you have no favorite listings."
        />
      )}
    </Container>
  );
};

export default FavoritesPage;
