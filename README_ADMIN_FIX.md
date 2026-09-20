# ASA Fashion Collection BD — Admin Panel Fix

Fixed the Admin CMS login/runtime issue.

## What was fixed
- Removed the invalid non-module Firebase config script from the page header.
- Removed the duplicate V6 Firebase auth gate that depended on `window.firebaseConfig`.
- Moved coupon functions into the Firebase module scope so Firestore functions work.
- Kept the Admin UID gate: `7cR26ROOQ5NfberGRom3cHWM3Z73`.

## Admin login
Use the Firebase Email/Password account whose UID is the Admin UID above. No password is included in this package.

## Important
The site must be opened through GitHub Pages (HTTPS), not `file://`, for Firebase authentication and Firestore to work correctly.
