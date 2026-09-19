# ASA Fashion Collection BD — Firebase Integration

This package adds Firebase Authentication + Cloud Firestore integration.

## Enabled
- Email/password customer sign-up and login
- Google sign-in
- Customer profile saved in `customers/{uid}`
- Last-login/provider tracking
- Password reset email
- Signed-in checkout orders saved to `orders/{orderId}` (local order + WhatsApp still works)
- Admin page has a Firebase customer refresh button

## Firebase setup
1. Firebase Authentication: enable Email/Password and Google.
2. Firestore Database: create the database.
3. Use secure Firestore Rules. Do not leave Test mode open.
4. The admin customer list requires an admin authorization rule. Do not make `customers` readable by everyone.

The Firebase web config is already included in `firebase-config.js`. Web API keys are not secrets; never put Firebase Admin SDK/service-account credentials in this website.

## Important
The existing admin password screen is only a UI gate. Real authorization must be enforced by Firebase Security Rules / server-side admin claims. A client-side password alone is not a secure admin authorization mechanism.
