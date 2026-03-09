# PC Parts Shop - HTML/CSS/JavaScript Version

A fully functional e-commerce website for PC parts built with vanilla HTML, CSS, and JavaScript.

## Files Included

- **index.html** - Home page with hero section, categories, and featured products
- **products.html** - Products listing page with filters and sorting
- **product-detail.html** - Individual product detail page
- **cart.html** - Shopping cart with quantity management
- **checkout.html** - Checkout flow with shipping and payment forms
- **styles.css** - Complete CSS styling
- **products-data.js** - Product catalog data
- **cart.js** - Shopping cart functionality
- **script.js** - General JavaScript functions

## Features

✅ Responsive design (mobile, tablet, desktop)
✅ Product browsing with categories
✅ Product filtering and sorting
✅ Shopping cart with localStorage persistence
✅ Real-time cart counter
✅ Multi-step checkout process
✅ Product image galleries
✅ Order confirmation page
✅ Full product specifications

## How to Use

### Option 1: Direct Browser Opening
1. Download all the files to a folder
2. Open `index.html` in your web browser
3. Start shopping!

### Option 2: Local Web Server (Recommended)
If you have Python installed:

```bash
# Python 3
python -m http.server 8000
```

Then open: http://localhost:8000

Or with Node.js:
```bash
npx http-server
```

### Option 3: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Page Navigation

- **Home** (`index.html`) - Landing page
- **All Products** (`products.html`) - Browse all products
- **Category Pages** (`products.html?category=gpu`) - Filter by category
- **Product Details** (`product-detail.html?id=gpu-1`) - View product details
- **Shopping Cart** (`cart.html`) - Review cart items
- **Checkout** (`checkout.html`) - Complete purchase

## Shopping Cart Features

- Add/remove products
- Update quantities
- Persistent storage (uses localStorage)
- Real-time total calculation
- Free shipping on orders over $50
- Automatic tax calculation (8%)

## Categories

- 🎮 Graphics Cards
- ⚡ Processors
- 🔲 Motherboards
- 💾 Memory (RAM)
- 💿 Storage
- 🔌 Power Supplies
- 📦 Cases
- ❄️ Cooling

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Customization

### To Add New Products
Edit `products-data.js` and add items to the `products` array:

```javascript
{
  id: 'product-id',
  name: 'Product Name',
  category: 'category-id',
  price: 299.99,
  description: 'Product description',
  image: 'https://your-image-url.jpg',
  specs: {
    'Spec 1': 'Value 1',
    'Spec 2': 'Value 2'
  },
  inStock: true,
  rating: 4.5
}
```

### To Change Colors/Styling
Edit `styles.css` and modify the color values:
- Primary Blue: `#2563eb`
- Secondary Gray: `#6b7280`
- Background: `#f9fafb`

### To Modify Categories
Edit the `categories` array in `products-data.js`

## Notes

- This is a demo/prototype - payment processing is simulated
- Cart data is stored in browser localStorage
- Images are from Unsplash
- No backend/database required

## File Structure

```
/
├── index.html              # Home page
├── products.html           # Products listing
├── product-detail.html     # Product details
├── cart.html              # Shopping cart
├── checkout.html          # Checkout page
├── styles.css             # All CSS styles
├── products-data.js       # Product catalog
├── cart.js                # Cart functions
├── script.js              # General JS
└── README.md              # This file
```

## License

Free to use for learning and personal projects.

---

**Built with ❤️ using HTML, CSS, and JavaScript**
