# ASA Fashion Collection BD — V3

This release upgrades the existing Apollo-style Firebase/PWA storefront.

## Included
- Professional checkout with division-based delivery (Dhaka 100 / outside 250)
- COD, bKash and Nagad selection fields (manual verification; no payment gateway)
- Coupon support: WELCOME10, SAVE100, FREESHIP
- Order ID generation and WhatsApp handoff
- Order lifecycle: Pending → Confirmed → Processing → Shipped → Out for Delivery → Delivered / Cancelled
- Existing cart, wishlist, compare, track order, customer account and Firebase integration retained
- Existing Firebase config and Firestore rules template retained

## Important
The bKash/Nagad fields are not a live payment gateway. For live online payments, a merchant payment gateway/API must be integrated separately.
Admin authentication should ultimately be enforced with Firebase Auth/custom claims + Firestore rules; a frontend-only password is not sufficient security.
