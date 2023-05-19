export { default } from "next-auth/middleware";

// This file protects certain routes.
// If a user is not logged in and tries to access these routes,
// they will be sent to home page ("/")
// All routes should be added in the "matchers"

export const config = {
  matcher: ["/trips", "/reservations", "/properties", "/favorites", "/account"],
};
