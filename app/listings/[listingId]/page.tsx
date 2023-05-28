import Container from "../../../components/Container";
import EmptyState from "../../../components/EmptyState";
import {
  getCurrentUser,
  getListingById,
  getReservations,
} from "../../../utils";

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
