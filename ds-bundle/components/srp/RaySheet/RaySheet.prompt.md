RaySheet from india-bus-ds. Use via `window.IndiaBusDS.RaySheet` (bundle loaded from the root `_ds_bundle.js`).

P21 Ask Ray conversation sheet — screenshot-led, no GEMS component. Bottom
sheet with the Ray header, greeting, trip context, suggested prompts,
question/answer exchanges and a voice-capable composer. Absolutely positioned
over the phone viewport: render it inside `IonsRoot device`.

## Props

```ts
interface RaySheetProps {
  /** Drives the overlay's `data-open` state. */
  open?: boolean;
  /** Greeting paragraph at the top of the conversation. */
  intro?: React.ReactNode;
  /** Trip context divider, e.g. "Helping you choose a bus from Delhi to Jaipur on 9 Jul". */
  context?: React.ReactNode;
  /** Suggested prompt chips shown before the first exchange. */
  prompts?: string[];
  /** Conversation so far. An exchange without `answer` renders "Loading...". */
  exchanges?: RayExchange[];
  /** Composer placeholder. */
  placeholder?: string;
  onPrompt?: (prompt: string) => void;
  onClose?: () => void;
}
```

## Examples

### Welcome

```jsx
() => (
  <IonsRoot device style={{ height: 800 }}>
    <RaySheet
      open
      intro={intro}
      context={context}
      prompts={['Explore Comfortable Travel Options', 'Find Early Booking Discount Buses', 'Show AC Seater Buses']}
    />
  </IonsRoot>
)
```

### Answered

```jsx
() => (
  <IonsRoot device style={{ height: 800 }}>
    <RaySheet
      open
      context={context}
      exchanges={[
        {
          question: 'Explore Comfortable Travel Options',
          answer: (
            <>
              <p>Since you prefer a comfortable journey, I’ve found some great AC seater options for your trip today. These are perfect for relaxing while you travel; tap an option below to choose your seats before they fill up!</p>
              <BusTuple
                embedded
                departure="23:25"
                arrival="07:55"
                duration="8h 30m"
                seats={22}
                singleSeats={2}
                fare="₹800"
                operator="Gajraj bus service"
                busType="Bharat Benz A/C Seater / Sleeper"
                tags={['New Bus', 'Toilet']}
              />
              <BusTuple
                embedded
                departure="23:10"
                arrival="07:00"
                duration="7h 50m"
                seats={36}
                singleSeats={12}
                previousFare="₹1,700"
                fare="₹1,530"
                operator="Lal Baba Travels"
                busType="AshokLeyland Stile A/C"
                offerStrip="Min. 12.5% off on 3 or more seats"
              />
            </>
          ),
        },
      ]}
    />
  </IonsRoot>
)
```

### Loading

```jsx
() => (
  <IonsRoot device style={{ height: 800 }}>
    <RaySheet open context={context} placeholder="Please wait..." exchanges={[{ question: 'Explore Comfortable Travel Options' }]} />
  </IonsRoot>
)
```
