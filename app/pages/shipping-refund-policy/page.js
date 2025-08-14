// app/policies/shipping-returns/page.js

export const metadata = {
  title: 'Shipping, Cancellations, Returns & Refunds — Hill Groove Coffee',
  description: 'Our policies for delivery timelines, order cancellations, returns and refunds at Hill Groove Coffee (Groove Coffee Roasters LLP).'
}

export default function ShippingReturnsPage(){
  return (
    <main>
      <section className="section container m-auto my-10 px-4">
        <h1 className="text-3xl font-semibold tracking-wide">Shipping, Cancellations, Returns & Refunds</h1>
        <p className="note mt-1">Last updated: <span className="font-semibold text-text">August 14, 2025</span></p>

        {/* SHIPPING */}
        <h2 className="h2 mt-10">Shipping</h2>
        <div className="space-y-4 text-[15px] leading-7">
          <p>
            All orders are delivered within <span className="font-semibold">3–5 working days</span> from dispatch, depending on the delivery pin code. Delivery timelines may be longer for remote locations or during peak periods and public holidays.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Delivery is <span className="font-semibold">free on orders ₹400 and above</span>. For orders below ₹400, a standard shipping fee may apply and will be shown at checkout.</li>
            <li>Orders are fulfilled by our in‑house riders or trusted courier partners.</li>
            <li>Once your order ships, we will email you from <span className="font-semibold">Hill Groove Coffee</span> with tracking details.</li>
            <li>We may split an order into multiple shipments to get items to you faster. You will receive tracking for each shipment.</li>
          </ul>
        </div>

        {/* CANCELLATIONS */}
        <h2 className="h2 mt-10">Cancellation Policy</h2>
        <div className="space-y-4 text-[15px] leading-7">
          <p>
            Cancellations for coffee orders are accepted <span className="font-semibold">within 24 hours of placing the order</span> or <span className="font-semibold">before the order is roasted</span>, whichever occurs first.
          </p>
          <p>
            To request a cancellation, email <a className="underline" href="mailto:hillgroovecoffee@gmail.com">hillgroovecoffee@gmail.com</a> with your order number (or call <a className="underline" href="tel:+917455054459">+91‑7455054459</a>). If your order has already been roasted or shipped, it cannot be cancelled.
          </p>
        </div>

        {/* RETURNS & REFUNDS */}
        <h2 className="h2 mt-10">Returns & Refunds</h2>
        <div className="space-y-4 text-[15px] leading-7">
          <p>
            We’re proud of the coffee we roast and hope you love it. If you’re not satisfied with a coffee purchase from our website, contact us within <span className="font-semibold">7 days of the delivery date</span> at <a className="underline" href="mailto:hillgroovecoffee@gmail.com">hillgroovecoffee@gmail.com</a> for a replacement or a <span className="font-semibold">100% refund of the purchase price</span> to your account.
          </p>
          <p className="font-semibold">When contacting us, please include:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your name and date of purchase</li>
            <li>The items you would like a refund or replacement for</li>
            <li>The reason for the return</li>
          </ul>

          <p className="font-semibold mt-6">Please note:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Brewing equipment can be refunded only if returned in <span className="font-semibold">new and unused</span> condition with original packaging and all accessories.</li>
            <li>Refunds for coffee subscription purchases are issued on a <span className="font-semibold">pro‑rated</span> basis depending on the number of shipments remaining.</li>
            <li>Refunds are <span className="font-semibold">initiated within 7 days</span> of us approving the request. The time it takes to reflect in your account depends on your bank’s clearing cycle, typically <span className="font-semibold">8–9 working days</span>.</li>
            <li>Refunds are processed to the <span className="font-semibold">same payment method</span> used for the original transaction.</li>
            <li>We may request photos or additional information to help us investigate quality concerns and improve our roasts.</li>
          </ul>
        </div>

        {/* CONTACT */}
        <h2 className="h2 mt-10">Questions?</h2>
        <p className="text-[15px] leading-7">
          Reach us at <a className="underline" href="mailto:hillgroovecoffee@gmail.com">hillgroovecoffee@gmail.com</a> or <a className="underline" href="tel:+917455054459">+91‑7455054459</a>. We’re happy to help.
        </p>
      </section>
    </main>
  )
}
