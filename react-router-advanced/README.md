# Testing
- Visit / → Home page.
- Navigate to /about → About page.
- Navigate to /profile → should redirect to / if not authenticated.
- Set isAuthenticated = true → Profile page opens.
- Test nested routes:
- /profile/details → Profile details.
- /profile/settings → Profile settings.
- Test dynamic route:
- /blog/42 → shows Blog Post ID: 42.

# Set up routing
This setup demonstrates:
- Basic routing
- Nested routes with Outlet
- Dynamic routes using useParams
- Protected routes using <Navigate>