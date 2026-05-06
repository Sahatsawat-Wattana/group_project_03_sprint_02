# Readly — React Component Breakdown (Best Practice)

## หลักการแบ่ง Component

### 1. Single Responsibility Principle
> Component หนึ่งตัว = หน้าที่เดียว  
> ถ้า component ทำมากกว่าหนึ่งอย่าง → แยกออก

### 2. กฎ 3 ขั้นตอน
1. **วาด UI** → ล้อมกรอบส่วนที่ซ้ำกัน / ส่วนที่มีหน้าที่ชัดเจน
2. **ตั้งชื่อ** → ใช้ noun (สิ่งของ/หน้าที่) เช่น `BookCard`, `CartItem`
3. **จัดลำดับชั้น** → parent ส่ง props ลง child, child emit events ขึ้น parent

---

## Component Tree ของ Readly

```
App
├── Layout
│   ├── Navbar
│   │   ├── Logo
│   │   ├── SearchBar
│   │   ├── CategoryDropdown
│   │   └── NavActions (WishlistIcon, CartIcon, UserIcon)
│   ├── [Page Content]   ← router outlet
│   └── Footer
│       ├── FooterBrand
│       ├── FooterLinkGroup  (Follow us / Getting started / About)
│       └── FooterCopyright
│
├── Pages
│   ├── HomePage
│   ├── AllBooksPage
│   ├── BookDetailPage
│   ├── CheckoutPage
│   ├── ProfilePage
│   ├── LoginPage
│   └── RegisterPage
│
└── Shared Popups / Modals
    ├── CartPopup
    └── WishlistPopup
```

---

## Shared (Reusable) Components

ใช้ซ้ำได้ทุกหน้า — ไม่รู้จักข้อมูล business จริง รับทุกอย่างผ่าน props

| Component | Props หลัก | หน้าที่ |
|---|---|---|
| `BookCard` | `image, title, rating, price` | การ์ดหนังสือ 1 เล่ม |
| `StarRating` | `value, max` | แสดงดาว (อ่านอย่างเดียว) |
| `CategoryBadge` | `label, active, onClick` | ป้ายหมวดหมู่คลิกได้ |
| `Button` | `variant, size, onClick, children` | ปุ่ม (primary / outline) |
| `Modal` | `isOpen, onClose, children` | กรอบ popup พื้นฐาน |
| `Pagination` | `currentPage, totalPages, onPageChange` | ปุ่มเปลี่ยนหน้า |
| `SearchBar` | `value, onChange, placeholder` | ช่องค้นหา |

```
src/
└── components/
    ├── BookCard/
    │   ├── BookCard.jsx
    │   └── BookCard.module.css
    ├── StarRating/
    ├── CategoryBadge/
    ├── Button/
    ├── Modal/
    ├── Pagination/
    └── SearchBar/
```

---

## Page Components

### HomePage

```
HomePage
├── HeroSection               ← "Trending Books" + carousel
│   ├── HeroText
│   └── BookCarousel
│       └── BookCard[]
├── BannerSection             ← Banner 1, Banner 2 (slider)
│   └── BannerSlide[]
└── PopularCategorySection
    ├── SectionHeader         ← title + "See more" link
    ├── CategoryBadge[]       ← filter tabs
    └── BookCarousel
        └── BookCard[]
```

**ข้อสังเกต:** `BookCarousel` ใช้ซ้ำได้ทั้ง Hero และ Popular Category → ทำเป็น shared component รับ `books[]` เป็น prop

---

### AllBooksPage

```
AllBooksPage
├── PageHeader                ← "All Book" + CategoryBadge[]
├── BookGrid
│   └── BookCard[]
└── Pagination
```

---

### BookDetailPage

```
BookDetailPage
├── Breadcrumb
├── BookDetailHero
│   ├── BookCoverImage
│   └── BookInfo
│       ├── CategoryBadge[]
│       ├── BookTitle
│       ├── StarRating + RatingCount
│       ├── PriceDisplay      ← ราคา + ส่วนลด
│       └── ActionButtons     ← Like, Add to Cart, Buy Now
├── BookSpecs                 ← Pages / Language / Publisher / Format
└── CustomerReviews
    ├── SectionHeader + WriteReviewButton
    ├── ReviewCard[]
    │   ├── ReviewerAvatar
    │   ├── ReviewerInfo
    │   ├── StarRating
    │   └── ReviewText
    └── SeeAllReviewsLink
```

---

### CartPopup & WishlistPopup

```
CartPopup  (Modal)
├── CartHeader                ← "Your Cart" + item count badge + close
├── CartItemList
│   └── CartItem[]
│       ├── BookCoverImage
│       ├── ItemInfo          ← title, price
│       ├── QuantityControl   ← − count + 
│       └── DeleteButton
├── CartTotal
└── CheckoutButton

WishlistPopup  (Modal)
├── WishlistSection           ← "Wish list"
│   └── WishlistItem[]
│       ├── BookCard (compact)
│       └── DeleteButton
├── PurchasedHistorySection   ← "Purchased history"
│   └── BookCard[] (compact)
└── ViewAllWishListButton
```

**ข้อสังเกต:** `QuantityControl` (− n +) เป็น shared component ใช้ได้ในทุก cart context

---

### CheckoutPage

```
CheckoutPage
├── CheckoutStepper           ← Cart → Payment → Complete
├── CheckoutContent
│   ├── OrderSummary
│   │   ├── PriceSummary      ← subtotal, discount, total
│   │   ├── OrderDetailsToggle → OrderDetailsPopup
│   │   │   └── CartItem[] (read-only)
│   │   └── CouponInput
│   └── PaymentMethodSection
│       ├── PaymentTabSelector ← QR / PromptPay | Credit/Debit Card
│       ├── QRPaymentView      ← QR code + how-to steps
│       └── CardPaymentView
│           ├── CardPreview    ← visual card mockup
│           └── CardDetailsForm
└── NavigationButtons         ← Back / Proceed to Pay
```

---

### ProfilePage

```
ProfilePage
├── AccountInfoSection
│   ├── PersonalInfoForm      ← First/Last name, Username, DOB, Email, Phone
│   ├── ShippingAddressDisplay + EditButton → EditShippingModal
│   └── PaymentMethodDisplay + EditButton  → EditPaymentModal
├── CustomerServiceSection
│   ├── SendFeedbackCard      → FeedbackModal
│   └── LiveChatCard
└── LogoutButton

// Modals
EditShippingModal    (Modal)
EditPaymentModal     (Modal)
FeedbackModal        (Modal)
```

---

### LoginPage & RegisterPage

```
LoginPage
├── BrandPanel                ← logo + quote (desktop only)
└── LoginForm
    ├── EmailInput
    ├── PasswordInput + ForgotPasswordLink
    ├── SignInButton
    ├── SocialLogin           ← Google, Apple
    └── CreateAccountLink

RegisterPage
├── QuotePanel                ← literary quote (desktop only)
└── RegisterForm
    ├── FullNameInput
    ├── EmailInput
    ├── PasswordInput + ConfirmPasswordInput
    ├── CreateAccountButton
    ├── SocialLogin
    └── SignInLink
```

**ข้อสังเกต:** `SocialLogin` (Google + Apple buttons) ใช้ซ้ำใน Login และ Register → แยกเป็น shared component

---

## File Structure แนะนำ

```
src/
├── components/               ← shared, reusable
│   ├── BookCard/
│   ├── StarRating/
│   ├── CategoryBadge/
│   ├── Button/
│   ├── Modal/
│   ├── Pagination/
│   ├── SearchBar/
│   ├── QuantityControl/
│   ├── SocialLogin/
│   └── BookCarousel/
│
├── pages/                    ← page-level, ใช้ route
│   ├── Home/
│   │   ├── Home.jsx
│   │   ├── HeroSection.jsx
│   │   ├── BannerSection.jsx
│   │   └── PopularCategorySection.jsx
│   ├── AllBooks/
│   ├── BookDetail/
│   ├── Checkout/
│   ├── Profile/
│   ├── Login/
│   └── Register/
│
├── layout/
│   ├── Navbar/
│   ├── Footer/
│   └── Layout.jsx
│
├── popups/                   ← global overlay UI
│   ├── CartPopup/
│   └── WishlistPopup/
│
├── mock-data/
│   ├── bookData.js
│   └── reviewData.js
│
└── App.jsx
```

---

## สรุป checklist ก่อน code

- [ ] Component นี้ถูกใช้มากกว่า 1 ที่ไหม? → ใส่ใน `components/`
- [ ] Component นี้รู้จัก business data โดยตรงไหม? → ถ้าใช่ อาจเป็น page-level
- [ ] Props มีมากกว่า 5 ตัวไหม? → พิจารณาแยกย่อยอีกชั้น
- [ ] Component นี้ทำ fetch data เองด้วยไหม? → ถ้าใช่ ต้องแยก logic ออกเป็น custom hook
- [ ] ชื่อ component บอกหน้าที่ชัดเจนโดยไม่ต้องอ่าน code ไหม?
