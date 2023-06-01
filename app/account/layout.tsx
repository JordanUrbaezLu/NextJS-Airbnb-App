import { getCurrentUser } from "../../utils";
import Heading from "../../components/Heading";
import Container from "../../components/Container";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <Container>
      {currentUser ? (
        <Heading
          title={`Hello ${currentUser?.name}`}
          subtitle={`You are a ${
            currentUser?.membership ? currentUser.membership : "Regular"
          } Member`}
        />
      ) : null}
      <div className="mt-2">{children}</div>
    </Container>
  );
}
