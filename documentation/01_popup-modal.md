# `PopupModal` component
---

## โครงสร้าง component หลัก

```jsx
// PopupModal.jsx
function PopupModal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay ← ทำให้ bg คลิกไม่ได้ + กด backdrop ปิดได้ */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Panel ← ป้องกัน click ทะลุด้วย stopPropagation */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-[#fdf3f0] rounded-2xl w-full max-w-sm max-h-[85vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-5 pb-3">
            <h2 className="text-lg font-bold">{title}</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-700">✕</button>
          </div>

          <div className="px-5 pb-5">
            {children}  {/* ← ใส่ content อะไรก็ได้ */}
          </div>
        </div>
      </div>
    </>
  );
}
```

**วิธีใช้:**
```jsx
const [open, setOpen] = useState(false);

<button onClick={() => setOpen(true)}>Open</button>

<PopupModal isOpen={open} onClose={() => setOpen(false)} title="Wish list หนังสือที่อยากได้">
  {/* ใส่ content ของแต่ละ popup ตรงนี้ */}
</PopupModal>
```

**จุดสำคัญ:**
- `bg-black/50` + `z-40` → overlay ทำให้พื้นหลังดูมืดและคลิกไม่ได้
- `z-50` บน panel → ลอยอยู่เหนือ overlay เสมอ
- `stopPropagation()` → กันไม่ให้คลิก inside panel แล้ว modal ปิด
- `children` prop → เอาไปใช้ต่อได้หลาย popup โดยไม่ต้องเขียน wrapper ใหม่