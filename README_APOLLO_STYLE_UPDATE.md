# ASA Fashion Collection BD — Apollo-inspired Premium Update

This version keeps ASA branding and adds a similar modern ecommerce experience without copying Apollo's branding/assets.

## Added / improved
- Sticky responsive header + search + Track Order + Login/Account + Wishlist + Cart
- Category navigation and Shop All page
- Flash Sale / Hot Deal countdown
- New Arrivals and category-based product sections
- Advanced Shop filters: search, category, collection, min/max price, sale-only, sorting
- Pagination
- Wishlist
- Product Compare (up to 4 items)
- Quick product actions and Add to Cart
- Premium product detail page with size/color/quantity, Buy Now, Call, WhatsApp, Share
- Related Products + Recently Viewed
- Order tracking page using local browser order history
- FAQ / Help Center / Contact pages
- Newsletter UI
- PWA manifest + install prompt
- Mobile bottom navigation
- SEO/meta description + Open Graph basics
- Existing Firebase customer login/account/order/admin files are preserved

## Important
- Product image fields in `products.json` can be filled with your own product images.
- GitHub Pages is static; localStorage-based wishlist/cart/compare/order tracking is browser-specific.
- Firebase rules should match the app's `customers/{uid}` and `orders/{orderId}` structure and should keep admin authorization server-enforced.
