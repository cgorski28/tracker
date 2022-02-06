# tracker

React Native application to track and store a collection of user's locations as a continuous route.

To run:
- Start Expo app on iOS or Android
- Start track-server express API on port 3000 (link to repo here)
- Tunnel traffic to port 3000 using ngrok
- Update base URL in trackerApi.js file using ngrok generated URL

Ideas for improvement:
- Improve styling
  * Padding on map
  * Button selectors for routes
  * Any sort of color scheme
- Add additional user info on Account screen
  * User image
  * Display more user info
- Delete old routes
- Upgrade to v6 React Native navigation
