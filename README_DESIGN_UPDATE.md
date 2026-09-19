# ASA Fashion Collection BD — Premium redesign

এই version-এ আগের Firebase + Firestore functionality রেখে homepage ও product-details page নতুন করে premium mobile-first e-commerce style-এ সাজানো হয়েছে।

### UI improvements
- Sticky professional header + search
- Category navigation
- Hero section with CTA
- Cash on Delivery / Nationwide Delivery cards
- Service/feature bar
- Shop by Category icons
- Flash Sale / Hot Deal section
- Women / Men / Kids / Accessories collections
- Discount badge, old price, sale price
- Wishlist-style heart button (local UI)
- Product details page with size chips, Buy Now, Add to Cart, Call, WhatsApp, Messenger
- Recommendations and Reviews area
- Mobile bottom navigation
- PWA manifest

### Firebase
- Existing Firebase Authentication / Firestore files are preserved.
- `firestore.rules.template` includes the supplied admin UID.
- Do not make Firestore public with `allow read, write: if true`.

### GitHub Pages
ZIP upload করার বদলে ZIP extract করে সব website files repository-এর root-এ upload করুন। `index.html` root/publishing source-এ থাকতে হবে।
