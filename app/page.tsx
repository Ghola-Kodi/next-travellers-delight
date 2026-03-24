export default function Home() {
  return (
    <main suppressHydrationWarning>
      <div dangerouslySetInnerHTML={{ __html: `

<!-- ═══ MODAL ═══ -->
<div class="modal-overlay" id="modal">
  <div class="modal">
    <button class="modal-close" onclick="closeModal()">&#215;</button>
    <div class="modal-eyebrow">Secure your spot</div>
    <h3 id="modal-title">Book this Safari</h3>
    <div class="modal-pkg">
      <img id="modal-img" src="" alt="Package">
      <div class="modal-pkg-overlay">
        <div>
          <div class="modal-pkg-name" id="modal-name">Masai Mara Safari</div>
          <div class="modal-pkg-meta" id="modal-meta">3 Days · Wildlife · from $2,000/person</div>
        </div>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>First Name</label><input type="text" placeholder="Jane"></div>
      <div class="form-group"><label>Last Name</label><input type="text" placeholder="Doe"></div>
    </div>
    <div class="form-group"><label>Email Address</label><input type="email" placeholder="jane@example.com"></div>
    <div class="form-group"><label>Phone / WhatsApp</label><input type="tel" placeholder="+254 7XX XXX XXX"></div>
    <div class="form-row">
      <div class="form-group"><label>Travel Date</label><input type="date"></div>
      <div class="form-group"><label>Travellers</label>
        <select><option>1 person</option><option selected>2 people</option><option>3 people</option><option>4–6 people</option><option>7+ people</option></select>
      </div>
    </div>
    <div class="form-group"><label>Special Requests (optional)</label><textarea placeholder="Dietary needs, accessibility, honeymoon, anniversary…"></textarea></div>
    <div class="form-total">
      <div class="lbl">Estimated total (2 guests)</div>
      <div class="amt" id="modal-price">$4,000</div>
    </div>
    <button class="btn-book" id="confirm-btn" onclick="handleBooking()">Confirm Booking Request &rarr;</button>
    <p class="form-note">No payment now. Our team will contact you within 24 hours to confirm.</p>
  </div>
</div>

<!-- ═══ NAV ═══ -->
<nav>
  <a href="/" class="nav-logo">
    <div class="nav-logo-mark">🌍</div>
    <span>Travellers Delight</span>
  </a>
  <ul class="nav-links">
    <li><a href="#destinations">Destinations</a></li>
    <li><a href="#packages">Tours</a></li>
    <li><a href="#blog">Journal</a></li>
    <li><a href="#booking">Plan a Trip</a></li>
    <li><a href="#newsletter">Contact</a></li>
  </ul>
  <div class="nav-right">
    <a class="nav-tel" href="tel:+254721987131">+254 721 987 131</a>
    <a class="nav-btn" href="#booking">Get a Quote</a>
  </div>
</nav>

<!-- ═══ HERO ═══ -->
<section class="hero">
  <div class="hero-left">
    <div class="hero-badge"><span class="hero-badge-dot"></span>East Africa's Trusted Safari Planner</div>
    <h1>Where the wild<br>things call your <em>name</em></h1>
    <p class="hero-desc">Handcrafted safaris, coastal escapes, and international journeys — tailored for those who travel with intention.</p>
    <div class="hero-ctas">
      <a class="cta-primary" href="#packages">Browse Packages &rarr;</a>
      <a class="cta-secondary" href="#booking">Plan a custom trip</a>
    </div>
    <div class="hero-stats">
      <div><div class="stat-num">600+</div><div class="stat-lbl">Safaris arranged</div></div>
      <div><div class="stat-num">14</div><div class="stat-lbl">Destinations</div></div>
      <div><div class="stat-num">4.9 ★</div><div class="stat-lbl">Average rating</div></div>
    </div>
  </div>
  <div class="hero-right">
    <div class="hero-grid">
      <div class="hero-img">
        <img src="https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=1000&q=80&fit=crop" alt="Masai Mara wildebeest migration">
        <div class="img-cap">Masai Mara, Kenya</div>
      </div>
      <div class="hero-img-row">
        <div class="hero-img">
          <img src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=600&q=80&fit=crop" alt="Elephant at Amboseli">
          <div class="img-cap">Amboseli</div>
        </div>
        <div class="hero-img">
          <img src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80&fit=crop" alt="Maldives overwater bungalows">
          <div class="img-cap">Maldives</div>
        </div>
      </div>
    </div>
    <div class="hero-float">
      <div class="float-label">Next departure</div>
      <div class="float-val">Apr 5, 2026</div>
      <div class="float-sub"><span class="dot-live"></span>Masai Mara · 3 spots remaining</div>
    </div>
  </div>
</section>

<!-- ═══ SEARCH ═══ -->
<div class="search-wrap">
  <div class="search-box">
    <div class="sf"><div class="sf-label">Destination</div><div class="sf-val">Where would you like to go?</div></div>
    <div class="sf"><div class="sf-label">Tour Type</div><div class="sf-val">Wildlife · Beach · Adventure…</div></div>
    <div class="sf"><div class="sf-label">Travel Month</div><div class="sf-val">Any month</div></div>
    <div class="sf" style="border-right:none"><div class="sf-label">Guests</div><div class="sf-val">2 adults</div></div>
    <button class="search-go" onclick="window.location.href='https://travelersdelight.co.ke/tours-list/'">Search Tours</button>
  </div>
</div>

<!-- ═══ DESTINATIONS ═══ -->
<section class="sec" id="destinations">
  <div style="display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:2.5rem">
    <div><div class="eyebrow">Explore the map</div><h2>Handpicked <em>destinations</em></h2></div>
    <a href="https://travelersdelight.co.ke/tours-list/" class="link-subtle">View all &rarr;</a>
  </div>
  <div class="dest-grid">
    <div class="dest-card tall">
      <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80&fit=crop" alt="Masai Mara lions at sunrise">
      <div class="dest-grad"></div>
      <div class="dest-info"><div class="dest-tag">Most Booked</div><div class="dest-name">Masai Mara</div><div class="dest-pkgs">6 packages available</div></div>
    </div>
    <div class="dest-card">
      <img src="https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=600&q=80&fit=crop" alt="Mombasa beach coast Kenya">
      <div class="dest-grad"></div>
      <div class="dest-info"><div class="dest-tag">Beach</div><div class="dest-name">Mombasa</div><div class="dest-pkgs">4 packages</div></div>
    </div>
    <div class="dest-card">
      <img src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80&fit=crop" alt="Maldives turquoise water">
      <div class="dest-grad"></div>
      <div class="dest-info"><div class="dest-tag">International</div><div class="dest-name">Maldives</div><div class="dest-pkgs">1 package</div></div>
    </div>
    <div class="dest-card">
      <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80&fit=crop" alt="Dubai skyline at night">
      <div class="dest-grad"></div>
      <div class="dest-info"><div class="dest-tag">City</div><div class="dest-name">Dubai</div><div class="dest-pkgs">2 packages</div></div>
    </div>
    <div class="dest-card">
      <img src="https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=600&q=80&fit=crop" alt="Nairobi National Park giraffe">
      <div class="dest-grad"></div>
      <div class="dest-info"><div class="dest-tag">Day Trip</div><div class="dest-name">Nairobi</div><div class="dest-pkgs">3 packages</div></div>
    </div>
  </div>
</section>

<!-- ═══ PACKAGES ═══ -->
<section class="sec sec-alt" id="packages">
  <div class="pkg-hdr">
    <div><div class="eyebrow">Ready to depart</div><h2>Featured <em>packages</em></h2></div>
    <a href="https://travelersdelight.co.ke/tours-list/" class="link-subtle">View all tours &rarr;</a>
  </div>
  <div class="pkg-grid">
    <div class="pkg-card">
      <div class="pkg-thumb">
        <img src="https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=700&q=80&fit=crop" alt="Nairobi National Park safari">
      </div>
      <div class="pkg-body">
        <div class="pkg-pills"><span class="pill pill-g">1 Day</span><span class="pill pill-b">Wildlife</span></div>
        <div class="pkg-title">Nairobi National Park Safari</div>
        <div class="pkg-desc">Lions, rhinos, and giraffes against a city skyline backdrop. The world's only urban safari national park.</div>
        <div class="pkg-ft">
          <div class="pkg-price">$250 <small>/ person</small></div>
          <button class="btn-book-sm" onclick="openModal('Nairobi National Park Safari','1 Day · Wildlife · $250/person','$500 (2 guests)','https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=900&q=80&fit=crop')">Book now</button>
        </div>
      </div>
    </div>

    <div class="pkg-card hot">
      <div class="pkg-thumb">
        <img src="https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=700&q=80&fit=crop" alt="Masai Mara wildebeest migration">
        <div class="pkg-badge">Most Booked</div>
      </div>
      <div class="pkg-body">
        <div class="pkg-pills"><span class="pill pill-g">3 Days</span><span class="pill pill-b">Wildlife</span><span class="pill pill-o">Migration</span></div>
        <div class="pkg-title">Masai Mara Wildlife Safari</div>
        <div class="pkg-desc">Witness the Great Wildebeest Migration. Game drives at dawn, sundowners at dusk, tented camp nights under the stars.</div>
        <div class="pkg-ft">
          <div class="pkg-price">$2,000 <small>/ person</small></div>
          <button class="btn-book-sm" onclick="openModal('Masai Mara Wildlife Safari','3 Days · Wildlife · from $2,000/person','$4,000 (2 guests)','https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&q=80&fit=crop')">Book now</button>
        </div>
      </div>
    </div>

    <div class="pkg-card">
      <div class="pkg-thumb">
        <img src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=700&q=80&fit=crop" alt="Maldives overwater villa">
      </div>
      <div class="pkg-body">
        <div class="pkg-pills"><span class="pill pill-g">6 Days</span><span class="pill pill-b">Beach</span></div>
        <div class="pkg-title">Magical Maldives Escape</div>
        <div class="pkg-desc">Overwater bungalows, coral reefs, and golden sunsets over the Indian Ocean. A true bucket-list escape.</div>
        <div class="pkg-ft">
          <div class="pkg-price">POA <small>on enquiry</small></div>
          <button class="btn-book-sm" onclick="openModal('Magical Maldives Escape','6 Days · Beach · Price on application','Contact us for pricing','https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900&q=80&fit=crop')">Enquire</button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ BOOKING SECTION ═══ -->
<div class="booking-sec" id="booking">
  <div class="booking-visual">
    <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=900&q=80&fit=crop" alt="Luxury safari tent at dusk">
    <div class="booking-visual-overlay">
      <div class="booking-text">
        <h3>Every great journey<br>starts with a conversation</h3>
        <p>Tell us your dream destination, your dates, and your style — we'll craft the rest.</p>
        <div class="booking-guarantees">
          <div class="g-item">&#10003; No deposit to enquire</div>
          <div class="g-item">&#10003; Response within 24 hrs</div>
          <div class="g-item">&#10003; Fully customisable</div>
        </div>
      </div>
    </div>
  </div>
  <div class="booking-form-wrap">
    <div class="eyebrow">Plan your trip</div>
    <h2>Request a <em>custom quote</em></h2>
    <div class="bform-row">
      <div class="bform-group"><label>First Name</label><input type="text" placeholder="Jane"></div>
      <div class="bform-group"><label>Last Name</label><input type="text" placeholder="Doe"></div>
    </div>
    <div class="bform-group"><label>Email</label><input type="email" placeholder="jane@example.com"></div>
    <div class="bform-group"><label>Phone / WhatsApp</label><input type="tel" placeholder="+254 7XX XXX XXX"></div>
    <div class="bform-row">
      <div class="bform-group"><label>Destination</label>
        <select><option value="">Select destination</option><option>Masai Mara</option><option>Mombasa</option><option>Nairobi</option><option>Maldives</option><option>Dubai</option><option>Turkey</option><option>Multiple / Custom</option></select>
      </div>
      <div class="bform-group"><label>Preferred Month</label>
        <select><option value="">Any month</option><option>January</option><option>February</option><option>March</option><option>April</option><option>May</option><option>June</option><option>July</option><option>August</option><option>September</option><option>October</option><option>November</option><option>December</option></select>
      </div>
    </div>
    <div class="bform-row">
      <div class="bform-group"><label>Number of Guests</label>
        <select><option>1 person</option><option selected>2 people</option><option>3–4 people</option><option>5–8 people</option><option>9+ / Group</option></select>
      </div>
      <div class="bform-group"><label>Budget Range</label>
        <select><option>Under $500</option><option>$500 – $1,500</option><option>$1,500 – $3,000</option><option>$3,000+</option></select>
      </div>
    </div>
    <button class="btn-submit" onclick="handleEnquiry(this)">Send Enquiry &rarr;</button>
    <p class="form-privacy">&#128274; Your information is kept private and never shared.</p>
  </div>
</div>

<!-- ═══ WHY US ═══ -->
<section class="sec">
  <div style="margin-bottom:2.5rem"><div class="eyebrow">Why travellers choose us</div><h2>Travel with <em>confidence</em></h2></div>
  <div class="why-grid">
    <div class="why-item"><div class="why-icon">🏕️</div><div class="why-ttl">Unique Safaris</div><div class="why-txt">Access to Kenya's most remarkable wildlife reserves, guided by people who know every trail.</div></div>
    <div class="why-item"><div class="why-icon">💎</div><div class="why-ttl">Honest Value</div><div class="why-txt">No hidden fees. What you see is what you pay — and what you experience exceeds every expectation.</div></div>
    <div class="why-item"><div class="why-icon">🗺️</div><div class="why-ttl">Local Expertise</div><div class="why-txt">Born in Kenya, raised in the bush. Our guides speak the language of the land and its animals.</div></div>
    <div class="why-item"><div class="why-icon">⚡</div><div class="why-ttl">Fast Booking</div><div class="why-txt">Enquire today, confirmed tomorrow. We handle flights, transfers, visas, and accommodation.</div></div>
    <div class="why-item"><div class="why-icon">🛡️</div><div class="why-ttl">24/7 Support</div><div class="why-txt">Our team is always just a WhatsApp away — before, during, and after your journey.</div></div>
    <div class="why-item"><div class="why-icon">✨</div><div class="why-ttl">Bespoke Trips</div><div class="why-txt">Honeymoon, family reunion, corporate retreat — every itinerary is built around you.</div></div>
  </div>
</section>

<!-- ═══ TESTIMONIALS ═══ -->
<section class="sec sec-dusk">
  <div class="eyebrow">What our guests say</div>
  <h2>Stories from the <em>savanna</em></h2>
  <p class="sec-sub">Unedited words from travellers who trusted us with their adventures.</p>
  <div class="t-grid">
    <div class="t-card"><div class="t-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><div class="t-quote">"Fred and his colleague were fantastic — punctual, knowledgeable, and genuinely warm. The Nairobi National Park safari exceeded every expectation."</div><div class="t-author"><div class="t-av">PY</div><div><div class="t-name">Pani Y.</div><div class="t-role">TripAdvisor · Nairobi Safari</div></div></div></div>
    <div class="t-card"><div class="t-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><div class="t-quote">"Fantastic experience with an expert guide. We saw lions, giraffes, zebras, hippos — far more than we imagined possible in one day."</div><div class="t-author"><div class="t-av">AA</div><div><div class="t-name">Alessandro A.</div><div class="t-role">Engineer · Italy</div></div></div></div>
    <div class="t-card"><div class="t-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><div class="t-quote">"Last-minute Mara booking and they made it absolutely flawless. The tented camp, the game drives, the sunset — I'll be back every year."</div><div class="t-author"><div class="t-av">SM</div><div><div class="t-name">Sarah M.</div><div class="t-role">Corporate Client · Nairobi</div></div></div></div>
  </div>
</section>

<!-- ═══ BLOG ═══ -->
<section class="sec" id="blog">
  <div style="display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:0">
    <div><div class="eyebrow">From the field</div><h2>The Safari <em>Journal</em></h2></div>
    <a href="#" class="link-subtle">All stories &rarr;</a>
  </div>
  <div class="blog-grid">
    <a class="blog-card feat" href="#">
      <div class="blog-thumb">
        <img src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&q=80&fit=crop" alt="Elephants at sunset Amboseli">
      </div>
      <div class="blog-body">
        <div class="blog-cat">Safari Guide</div>
        <div class="blog-title">The Best Time to Visit the Masai Mara — A Month-by-Month Breakdown</div>
        <div class="blog-excerpt">From the January short rains to the July–October Great Migration peak, timing your Mara visit changes everything. We break it down so you never miss the magic.</div>
        <div class="blog-meta"><span>Fred K.</span><span class="bdot"></span><span>8 min read</span><span class="bdot"></span><span>March 2026</span></div>
      </div>
    </a>
    <a class="blog-card" href="#">
      <div class="blog-thumb">
        <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80&fit=crop" alt="Maldives crystal clear water">
      </div>
      <div class="blog-body">
        <div class="blog-cat">Travel Tips</div>
        <div class="blog-title">How to Experience the Maldives Without Breaking the Bank</div>
        <div class="blog-excerpt">Guesthouses, local islands, and savvy booking tricks that make paradise accessible to every budget.</div>
        <div class="blog-meta"><span>Aisha N.</span><span class="bdot"></span><span>5 min read</span></div>
      </div>
    </a>
    <a class="blog-card" href="#">
      <div class="blog-thumb">
        <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80&fit=crop" alt="Safari jeep on the savanna">
      </div>
      <div class="blog-body">
        <div class="blog-cat">Packing</div>
        <div class="blog-title">The Ultimate Kenya Safari Packing List (What We Actually Use)</div>
        <div class="blog-excerpt">Our guides share what to bring, what to leave behind, and the one item most first-timers forget.</div>
        <div class="blog-meta"><span>James O.</span><span class="bdot"></span><span>4 min read</span></div>
      </div>
    </a>
  </div>
</section>

<!-- ═══ NEWSLETTER ═══ -->
<section class="newsletter-sec" id="newsletter">
  <div class="nl-left">
    <div class="eyebrow">Stay in the loop</div>
    <h2>Safari <em>dispatches</em><br>to your inbox</h2>
    <p>Monthly travel inspiration, destination guides, early-bird deals, and insider tips from our guides — delivered quietly, never spammy.</p>
    <div class="nl-perks">
      <div class="nl-perk">Early access to new packages and seasonal offers</div>
      <div class="nl-perk">Monthly wildlife and destination guides</div>
      <div class="nl-perk">Behind-the-scenes stories from our guides</div>
      <div class="nl-perk">Unsubscribe any time — no hard feelings</div>
    </div>
  </div>
  <div class="nl-form">
    <h3>Join 2,400+ fellow adventurers</h3>
    <div class="nl-fields">
      <input class="nl-field" type="text" placeholder="First name">
      <input class="nl-field" type="text" placeholder="Last name">
      <input class="nl-field nl-field-full" type="email" placeholder="Email address">
    </div>
    <div class="nl-check">
      <input type="checkbox" id="nl-consent" checked>
      <label for="nl-consent">I'd like to receive the monthly Travellers Delight newsletter. I can unsubscribe at any time.</label>
    </div>
    <button class="btn-nl" onclick="handleNewsletter(this)">Subscribe to the Journal</button>
    <p class="nl-note">No spam, ever. Read by over 2,400 travellers across East Africa and beyond.</p>
  </div>
</section>

<!-- ═══ CTA STRIP ═══ -->
<section class="cta-strip">
  <h2>Ready for your next <em>great adventure?</em></h2>
  <div class="cta-strip-btns">
    <a class="btn-cta-a" href="#packages">Browse packages</a>
    <a class="btn-cta-b" href="tel:+254721987131">Call us now</a>
  </div>
</section>

<!-- ═══ FOOTER ═══ -->
<footer>
  <div class="footer-top">
    <div class="f-brand">
      <span class="f-brand-name">🌍 Travellers Delight</span>
      <p>Kenya's trusted safari and travel planner. From the Masai Mara to the Maldives, we craft journeys that stay with you long after you return.</p>
      <div class="f-contact">📍 Milestone Plaza, Nairobi, Kenya<br>✉️ sales@travelersdelight.co.ke<br>📞 +254 721 987 131</div>
    </div>
    <div class="f-col"><h4>Destinations</h4><ul>
      <li><a href="https://travelersdelight.co.ke/tour-destination/masai-mara/">Masai Mara</a></li>
      <li><a href="#">Mombasa</a></li><li><a href="#">Nairobi</a></li>
      <li><a href="https://travelersdelight.co.ke/tour-destination/maldives/">Maldives</a></li>
      <li><a href="#">Dubai</a></li><li><a href="#">Turkey</a></li>
    </ul></div>
    <div class="f-col"><h4>Tours</h4><ul>
      <li><a href="https://travelersdelight.co.ke/tour-type/wildlife/">Wildlife Safaris</a></li>
      <li><a href="https://travelersdelight.co.ke/tour-type/beaches/">Beach Holidays</a></li>
      <li><a href="#">Balloon Safaris</a></li>
      <li><a href="https://travelersdelight.co.ke/tour-type/tracking/">Trekking &amp; Adventure</a></li>
      <li><a href="#">Corporate Travel</a></li><li><a href="#">Honeymoon Packages</a></li>
    </ul></div>
    <div class="f-col"><h4>Company</h4><ul>
      <li><a href="#">About Us</a></li><li><a href="#">Safari Journal</a></li>
      <li><a href="#">Reviews</a></li><li><a href="#">Contact</a></li>
      <li><a href="#">Privacy Policy</a></li><li><a href="#">Terms of Service</a></li>
    </ul></div>
  </div>
  <div class="footer-bot">
    <p>&copy; 2026 Travellers Delight &middot; All rights reserved</p>
    <div class="pay-icons"><span class="pay-icon">Visa</span><span class="pay-icon">Mastercard</span><span class="pay-icon">M-Pesa</span><span class="pay-icon">PayPal</span></div>
    <div class="social-row"><a class="soc" href="#">f</a><a class="soc" href="#">in</a><a class="soc" href="#">ig</a><a class="soc" href="#">wa</a></div>
  </div>
</footer>


` }} />
    </main>
  );
}
