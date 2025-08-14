// app/terms/page.js

export const metadata = {
  title: 'Terms & Conditions — Hill Groove Coffee',
  description: 'Terms of use for Hill Groove Coffee (Groove Coffee Roasters LLP).'
}

export default function TermsPage(){
  return (
    <main>
      <section className="section container m-auto my-10 px-4">
        <h1 className="text-3xl font-semibold tracking-wide">Terms & Conditions</h1>
        <p className="note mt-1">Last updated: <span className="font-semibold text-text">August 14, 2025</span></p>

        <div className="mt-8 space-y-6 text-[15px] leading-7">
          <p>
            This website, <span className="font-semibold">Hill Groove Coffee</span>, is operated and managed by <span className="font-semibold">Groove Coffee Roasters LLP</span> ("we", "us"). By accessing or using this website and related services (the "Services"), you agree to be bound by these Terms & Conditions (the "Terms"). If you do not agree, please do not use the Services. We may update these Terms at any time; continued use constitutes acceptance of the updated Terms.
          </p>

          <h2 className="h2 mt-10" id="accounts">1) Accounts & Registration</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You may need an account to place orders. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.</li>
            <li>Provide current, accurate, and complete information. We may verify information provided and may refuse, suspend, or terminate accounts at our discretion.</li>
          </ul>

          <h2 className="h2 mt-10" id="pricing">2) Pricing</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Products are sold at the price shown at checkout on the date of purchase. Prices may change from time to time due to market conditions.</li>
            <li>In case of price changes between order and delivery due to clear errors or system issues, we may contact you to confirm the order at the correct price or cancel and refund you.</li>
          </ul>

          <h2 className="h2 mt-10" id="products">3) Products & Availability</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We strive to display product images and colours accurately; however, display settings may affect how colours appear. Packaging may differ from images.</li>
            <li>We may limit sales by person, household, region, or order and may discontinue products at any time.</li>
            <li>Descriptions and prices are subject to change without notice.</li>
          </ul>

          <h2 className="h2 mt-10" id="representations">4) Representations & Warranties</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You confirm you have the legal capacity to use the Services and enter into binding obligations.</li>
            <li>You are responsible for all use under your account, whether authorized by you or not.</li>
            <li>You will provide a correct delivery address and review product details before placing an order.</li>
            <li>You will use the Services only for lawful purposes and in compliance with applicable laws.</li>
          </ul>

          <h2 className="h2 mt-10" id="prohibited">5) Prohibited Uses</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Posting or transmitting unlawful, harassing, defamatory, obscene, or otherwise objectionable material.</li>
            <li>Interfering with others’ use of the Services, introducing malware, attempting to gain unauthorized access, or impairing the operation of the Services.</li>
            <li>Infringing intellectual property rights or violating any law.</li>
            <li>Using bots/scrapers to access the Services without permission.</li>
          </ul>

          <h2 className="h2 mt-10" id="modifications">6) Changes to the Services & Terms</h2>
          <p>We may modify or discontinue any part of the Services and may update these Terms at any time. The latest version will be posted on this page. If you do not agree with the changes, you should stop using the Services.</p>

          <h2 className="h2 mt-10" id="reliance">7) Reliance on Information</h2>
          <p>Information on the Services is provided for general information only and may include opinions or errors. Your reliance on such information is at your own risk. We do not guarantee the accuracy, completeness, or usefulness of the content.</p>

          <h2 className="h2 mt-10" id="privacy">8) Privacy</h2>
          <p>Your use of the Services is also governed by our <a href="/privacy" className="underline">Privacy Policy</a>. By using the Services, you consent to our processing of information as described therein.</p>

          <h2 className="h2 mt-10" id="ip">9) Intellectual Property</h2>
          <p>
            All content on the Services—including text, graphics, logos, icons, images, audio, video, software, and the arrangement thereof—is owned by or licensed to Groove Coffee Roasters LLP and is protected by Indian and international intellectual property laws. No license is granted except as necessary to use the Services for personal, non‑commercial purposes. You may not copy, modify, distribute, create derivative works, or exploit the content without prior written permission.
          </p>

          <h2 className="h2 mt-10" id="links">10) Third‑Party Links</h2>
          <p>Links to third‑party sites are provided for convenience only and do not constitute endorsement. We are not responsible for the content, policies, or practices of third‑party sites.</p>

          <h2 className="h2 mt-10" id="reviews">11) Reviews, Feedback & Submissions</h2>
          <p>
            If you submit reviews, comments, ideas, or other materials (collectively, “Comments”), you grant us a worldwide, perpetual, irrevocable, royalty‑free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such Comments in any media. You represent that you own or control all rights in and to the Comments and that they do not violate applicable law or any third‑party rights.
          </p>

          <h2 className="h2 mt-10" id="objectionable">12) Objectionable Material</h2>
          <p>You understand that you may encounter content that some may find offensive or objectionable. You use the Services at your sole risk and, to the fullest extent permitted by law, we have no liability for such content.</p>

          <h2 className="h2 mt-10" id="disclaimer">13) Disclaimer</h2>
          <p>
            The Services and all information, content, materials, and products are provided on an “as is” and “as available” basis without warranties of any kind, express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non‑infringement, to the maximum extent permitted by law.
          </p>

          <h2 className="h2 mt-10" id="liability">14) Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we and our officers, directors, employees, agents, licensors, and partners shall not be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages, or any loss of profits, revenues, data, goodwill, or other intangible losses, arising from or related to your use of the Services.
          </p>

          <h2 className="h2 mt-10" id="indemnity">15) Indemnity</h2>
          <p>You agree to defend, indemnify, and hold harmless Groove Coffee Roasters LLP and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including legal fees) arising out of or relating to your use of the Services or violation of these Terms.</p>

          <h2 className="h2 mt-10" id="acknowledgment">16) Acknowledgment</h2>
          <p>The disclaimers and limitations of liability in these Terms are essential elements of the bargain between you and us.</p>

          <h2 className="h2 mt-10" id="termination">17) Termination</h2>
          <p>We may suspend or terminate your access to the Services at any time, with or without notice, for any reason. Upon termination, your right to use the Services will immediately cease. Certain provisions by their nature shall survive termination (e.g., intellectual property, disclaimers, limitations of liability, and indemnity).</p>

          <h2 className="h2 mt-10" id="force-majeure">18) Force Majeure</h2>
          <p>We are not liable for any delays or failures in performance resulting from acts beyond our reasonable control, including natural disasters, acts of government, war, terrorism, labor conditions, internet interruptions, or power failures.</p>

          <h2 className="h2 mt-10" id="grievance">19) Grievance Redressal</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Phone: <a href="tel:+917455054459" className="underline">+91‑7455054459</a></li>
            <li>Email: <a href="mailto:hillgroovecoffee@gmail.com" className="underline">hillgroovecoffee@gmail.com</a></li>
            <li>We aim to acknowledge grievances within 48 hours and resolve them within one month.</li>
          </ul>

          <h2 className="h2 mt-10" id="law">20) Governing Law, Jurisdiction & Arbitration</h2>
          <p>
            These Terms are governed by the laws of India. The courts at <span className="font-semibold">New Delhi</span> shall have exclusive jurisdiction. Any disputes shall be referred to a sole arbitrator appointed by Groove Coffee Roasters LLP, and the arbitration shall be conducted in New Delhi in accordance with the Arbitration and Conciliation Act, 1996 (as amended). The award shall be final and binding on the parties.
          </p>

          <h2 className="h2 mt-10" id="severability">21) Severability</h2>
          <p>If any provision of these Terms is held invalid or unenforceable, the remaining provisions will remain in full force and effect. The parties will replace any invalid or unenforceable provision with a valid provision that most closely reflects the original intent.</p>

          <h2 className="h2 mt-10" id="relationship">22) Relationship</h2>
          <p>Nothing in these Terms creates a partnership, joint venture, employment, or agency relationship between you and us.</p>

          <h2 className="h2 mt-10" id="entire">23) Entire Agreement</h2>
          <p>These Terms constitute the entire agreement between you and us regarding the use of the Services and supersede all prior agreements on this subject.</p>
        </div>
      </section>
    </main>
  )
}
