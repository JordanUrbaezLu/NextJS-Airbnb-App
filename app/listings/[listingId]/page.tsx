import Container from "../../../components/Container";
import EmptyState from "../../../components/EmptyState";
import getCurrentUser from "../../../utils/getCurrentUser";
import getListingById from "../../../utils/getListingById";
import getReservations from "../../../utils/getReservations";

import ListingClient from "./ListingClient";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  return (
    <Container>
      {!!listing ? (
        <ListingClient
          listing={listing}
          reservations={reservations}
          currentUser={currentUser}
        />
      ) : (
        <EmptyState />
      )}
    </Container>
  );
};

export default ListingPage;
