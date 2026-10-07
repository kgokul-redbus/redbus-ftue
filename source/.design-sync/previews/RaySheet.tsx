import { IonsRoot, RaySheet, BusTuple } from 'india-bus-ds';

const intro =
  "Good Evening Traveler! 👋 I'm your new travel chat assistant, here to help you find routes, compare options, and make your journeys smoother. You're one of the first to chat with me — I'm still in beta and learning along the way, so if I take a wrong turn, your feedback will help me get better!";

const context = (
  <>Helping you choose a bus from Delhi to Ganganagar (Sri Ganganagar) on 9 Jul</>
);

export const Welcome = () => (
  <IonsRoot device style={{ height: 800 }}>
    <RaySheet
      open
      intro={intro}
      context={context}
      prompts={['Explore Comfortable Travel Options', 'Find Early Booking Discount Buses', 'Show AC Seater Buses']}
    />
  </IonsRoot>
);

export const Answered = () => (
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
);

export const Loading = () => (
  <IonsRoot device style={{ height: 800 }}>
    <RaySheet open context={context} placeholder="Please wait..." exchanges={[{ question: 'Explore Comfortable Travel Options' }]} />
  </IonsRoot>
);
