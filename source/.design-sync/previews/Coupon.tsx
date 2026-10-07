import { Coupon, Button } from 'india-bus-ds';

export const Default = () => (
  <div style={{ width: 328 }}>
    <Coupon
      code="FIRST200"
      description="Save ₹200 on your first booking. Minimum fare ₹700."
      action={<Button variant="tertiary">Copy</Button>}
    />
  </div>
);

export const MonsoonOffer = () => (
  <div style={{ width: 328 }}>
    <Coupon
      code="MONSOON15"
      description="15% off up to ₹250 on Chandigarh — Delhi services booked before 30 Sep."
      action={<Button variant="tertiary">Copy</Button>}
    />
  </div>
);

export const CodeOnly = () => (
  <div style={{ width: 328 }}>
    <Coupon code="ZINGBUS100" action={<Button variant="tertiary">Copy</Button>} />
  </div>
);

export const CouponList = () => (
  <div style={{ width: 328, display: 'grid', gap: 12 }}>
    <Coupon
      code="FIRST200"
      description="Flat ₹200 off for first-time riders on redBus."
      action={<Button variant="tertiary">Copy</Button>}
    />
    <Coupon
      code="NIGHTRIDE50"
      description="₹50 off on overnight sleepers departing Delhi ISBT Kashmere Gate after 21:00."
      action={<Button variant="tertiary">Copy</Button>}
    />
  </div>
);
