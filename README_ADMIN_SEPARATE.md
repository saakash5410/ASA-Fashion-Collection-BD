# ASA Fashion Collection BD — Separate Admin Panel

This package contains a standalone Admin Panel for the ASA Fashion Collection BD store.

## Admin URL after Firebase Hosting

`https://asa-fashion-collection-bd.web.app/admin.html`

## Included
- Firebase Email/Password login
- Google login option
- Admin UID gate: `7cR26ROOQ5NfberGRom3cHWM3Z73`
- Products
- Categories
- Orders
- Customers
- Messages
- Coupons
- Website settings
- Pages/content
- Manual JSON backups

## Deploy with Firebase CLI

1. Install Firebase CLI.
2. Run `firebase login`
3. Open this folder in Terminal/Command Prompt.
4. Run `firebase deploy --only hosting`

The Firebase project is already set to `asa-fashion-collection-bd` in `.firebaserc`.

## Important
The customer website and this admin panel use the same Firebase project. Firestore Rules should keep write access restricted to the Admin UID.
