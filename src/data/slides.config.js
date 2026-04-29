export const slidesConfig = [

  // ── SLIDE 1: AWE ─────────────────────────────
  {
    id: "slide-1",
    type: "CinematicHeroSlide",
    title: "Opening",
    hook: "",
    headline: "Some places exist.\nThis one defines them.",
    subheadline: "200 million people chose to be here last year.\nThey didn't have to.",
    description: "A cinematic opening — before the numbers, feel the place",
    aiImage: "/images/grand_opening.png",
    bgImage: "https://image.pollinations.ai/prompt/Dubai%20Mall%20grand%20interior%20cinematic%20luxury%20golden%20marble%20vast%20atmosphere?width=1920&height=1080&nologo=true",
    cta: {
      label: "Begin the story",
      action: "next_slide"
    }
  },

  // ── SLIDE 2: SCALE ───────────────────────────
  {
    id: "slide-2",
    type: "CanvasStatsSlide",
    title: "The Scale",
    hook: "The numbers that make every other location irrelevant.",
    headline: "The commercial\ncenter of a global city.",
    body: "Brands that operate here don't just access a mall. They access a region. 3.4 billion people live within four hours of this address. None of them have a closer destination of this calibre.",
    description: "The commercial scale that changes every calculation",
    aiImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    bgImage: "https://image.pollinations.ai/prompt/Dubai%20aerial%20city%20night%20lights%20cinematic%20dark%20luxury?width=1920&height=1080&nologo=true",
    stats: [
      { label: "annual visitors", value: 200, prefix: "", suffix: "M+" },
      { label: "retail brands", value: 1300, prefix: "", suffix: "+" },
      { label: "sq ft leasable", value: 5.9, prefix: "", suffix: "M" },
      { label: "people within 4hr flight", value: 3.4, prefix: "", suffix: "B" }
    ],
    cta: {
      label: "See where you fit",
      action: "next_slide"
    }
  },

  // ── SLIDE 3: TERRITORY ───────────────────────
  {
    id: "slide-3",
    type: "InteractiveRetailSlide",
    title: "Your Territory",
    hook: "Every tier of retail. One address.",
    headline: "Find your place\nin the world's\nmost visited mall.",
    description: "Choose your zone — luxury, corridor, or activation",
    aiImage: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=800&q=80",
    bgImage: "https://image.pollinations.ai/prompt/luxury%20retail%20fashion%20mall%20interior%20dark%20gold%20cinematic?width=1920&height=1080&nologo=true",
    zones: [
      {
        id: "fashion",
        title: "Fashion Avenue",
        subtitle: "Where every luxury brand on earth chooses to be seen.",
        stats: [
          { value: "250+", label: "luxury flagships" },
          { value: "#1", label: "dwell time" },
          { value: "VIP", label: "concierge access" },
          { value: "4.5M", label: "zone footfall" }
        ],
        points: [
          "Multi-story bespoke facades for flagship stores",
          "Highest conversion rate in the entire property",
          "Adjacent access to The Address luxury hotel guests",
          "The address every luxury brand benchmarks against"
        ],
        cta: {
          label: "Explore Fashion",
          action: "goto_slide:3"
        }
      },
      {
        id: "dining",
        title: "Dining Destination",
        subtitle: "Culinary experiences that extend every visit.",
        stats: [
          { value: "200+", label: "dining outlets" },
          { value: "22M", label: "F&B visits/year" },
          { value: "3", label: "food halls" },
          { value: "5+", label: "waterfront views" }
        ],
        points: [
          "World-class fine dining overlooking the Burj Khalifa fountain",
          "Diverse gourmet food halls capturing all demographics",
          "Strategic placement driving maximum post-retail dwell time",
          "Exclusive restaurant environments"
        ],
        cta: {
          label: "Explore Dining spaces",
          action: "goto_slide:4"
        }
      },
      {
        id: "adventures",
        title: "Adventures & Attractions",
        subtitle: "A theme park inside a mall. Reality is optional.",
        stats: [
          { value: "12M+", label: "attraction visits" },
          { value: "World's", label: "largest indoor aquarium" },
          { value: "100%", label: "turnkey available" },
          { value: "365d", label: "year-round operation" }
        ],
        points: [
          "Unmatched entertainment anchoring the entire destination",
          "Drive massive family footfall consistently every weekend",
          "Partnership opportunities for global entertainment IPs",
          "The ultimate differentiator"
        ],
        cta: {
          label: "Discover Attractions",
          action: "goto_slide:5"
        }
      }
    ],
    cta: {
      label: "Start a leasing conversation",
      action: "login"
    }
  },

  // ── SLIDE 4: LUXURY ──────────────────────────
  {
    id: "slide-4",
    type: "EditorialLuxurySlide",
    title: "Luxury",
    hook: "The highest conversion rates in the global portfolio.",
    headline: "Fashion Avenue.\nThe address that\ndefines them all.",
    body: "Louis Vuitton. Chanel. Hermès. Rolex. Gucci. They didn't come here because it was convenient. They came because this is where their customers come to be seen — and to spend.",
    description: "The prestige tier — Fashion Avenue and its luxury flagships",
    aiImage: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80",
    bgImage: "https://image.pollinations.ai/prompt/luxury%20fashion%20boutique%20interior%20editorial%20dark%20marble%20gold%20atmospheric?width=1920&height=1080&nologo=true",
    brands: ["Louis Vuitton", "Chanel", "Hermès", "Rolex", "Gucci"],
    quote: {
      text: "Our Fashion Avenue flagship consistently outperforms every other location in our global portfolio. The quality of visitor — and their intent to purchase — is unmatched anywhere we operate.",
      author: "Global Retail Director",
      company: "Leading European Luxury House"
    },
    cta: {
      label: "Inquire about Fashion Avenue",
      action: "login"
    }
  },

  // ── SLIDE 5: DESIRE ──────────────────────────
  {
    id: "slide-5",
    type: "GridGallerySlide",
    title: "Dining",
    hook: "They come for the mall. They stay for this.",
    headline: "Dining that turns\na visit into a day.",
    body: "200+ outlets. Three dedicated food halls. A waterfront terrace with views of the Burj Khalifa fountain. Dining here isn't an afterthought — it's a destination in itself that extends every visit and multiplies every spend.",
    description: "200+ outlets, 3 food halls, 22M F&B visits per year",
    aiImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
    bgImage: "https://image.pollinations.ai/prompt/luxury%20fine%20dining%20restaurant%20Dubai%20interior%20warm%20amber%20upscale%20dark?width=1920&height=1080&nologo=true",
    stats: [
      { label: "dining outlets", value: 200, prefix: "", suffix: "+" },
      { label: "dedicated food halls", value: 3, prefix: "", suffix: "" },
      { label: "F&B visits per year", value: 22, prefix: "", suffix: "M" }
    ],
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80"
    ],
    cta: {
      label: "Discuss F&B leasing",
      action: "login"
    }
  },

  // ── SLIDE 6: WONDER ──────────────────────────
  {
    id: "slide-6",
    type: "CinematicHeroSlide",
    title: "Attractions",
    hook: "The reason they come back every single time.",
    headline: "A theme park\ninside a mall.",
    subheadline: "Dubai Aquarium. VR Park. KidZania. Olympic Ice Rink.\nThese aren't amenities. They are the destination.",
    description: "World-class attractions that drive 12M+ additional visits",
    aiImage: "/images/theme_park_bg.png",
    images: [
      "/images/theme_park_bg.png",
      "/images/flight_simulator.png"
    ],
    cards: [
      {
        title: "Dubai Aquarium",
        description: "10 million litre tank. 33,000 aquatic animals. The largest in the world.",
        visitorCount: "1.5M+ annual visitors"
      },
      {
        title: "Play DXB",
        description: "The world's largest indoor VR and AR attraction. Reality is optional here.",
        visitorCount: "High-dwell experience"
      },
      {
        title: "KidZania",
        description: "Award-winning edutainment for 700,000 families who return every year.",
        visitorCount: "700K+ families annually"
      },
      {
        title: "Dubai Ice Rink",
        description: "Olympic-size. Competition-grade. Open 365 days a year.",
        visitorCount: "Year-round attraction"
      }
    ],
    cta: {
      label: "Partner with our platform",
      action: "login"
    }
  },

  // ── SLIDE 7: ELECTRICITY ─────────────────────
  {
    id: "slide-7",
    type: "GridGallerySlide",
    title: "Events",
    hook: "One night here reaches more people than a month anywhere else.",
    headline: "The stage the\nworld watches.",
    body: "500 events a year. Artists, brands, and governments choose this stage because the reach is unmatched. When something happens at The Dubai Mall, it doesn't stay in Dubai.",
    description: "500+ events/year, 1B+ social impressions, 25+ celebrities",
    aiImage: "/images/events_concert.png",
    bgImage: "https://image.pollinations.ai/prompt/live%20concert%20event%20indoor%20arena%20crowd%20energy%20dramatic%20lighting%20dark?width=1920&height=1080&nologo=true",
    stats: [
      { label: "events per year", value: 500, prefix: "", suffix: "+" },
      { label: "social media impressions", value: 1, prefix: "", suffix: "B+" },
      { label: "celebrity appearances", value: 25, prefix: "", suffix: "+" }
    ],
    tiles: [
      { label: "Concerts & Live Performances", action: "open_subdeck", subDeckId: "concerts_subdeck" },
      { label: "Brand Activations & Launches", action: "open_subdeck", subDeckId: "launches_subdeck" },
      { label: "Corporate & Government Events", action: "open_subdeck", subDeckId: "galas_subdeck" }
    ],
    cta: {
      label: "Book a venue consultation",
      action: "login",
      primary: true
    },
    subDeckCta: {
      label: "See the full events deck",
      action: "open_subdeck",
      subDeckId: "gallery_subdeck"
    }
  },

  // ── SLIDE 8: POSSIBILITY ─────────────────────
  {
    id: "slide-8",
    type: "SpecsCardSlide",
    title: "Venues",
    hook: "Spaces that have hosted world firsts. Ready for yours.",
    headline: "Your event.\nAt our scale.",
    body: "Three venues. Three scales. All of them extraordinary. Whether you need 2,000 or 10,000, an indoor stage or an open-air terrace with the Burj Khalifa as your backdrop — we have the space.",
    description: "Grand Atrium, Fashion Catwalk, Fountain Terrace — specs",
    aiImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    bgImage: "https://image.pollinations.ai/prompt/grand%20atrium%20event%20space%20architecture%20dramatic%20lighting%20luxury%20dark?width=1920&height=1080&nologo=true",
    venues: [
      {
        name: "Grand Atrium",
        specs: "45,000 sq ft  ·  10,000 capacity",
        tagline: "The largest indoor event space in the region.",
        features: [
          "Full AV integration and broadcast capability",
          "Heavy rigging points for large-scale productions",
          "360-degree audience visibility"
        ]
      },
      {
        name: "Fashion Catwalk",
        specs: "Linear runway format  ·  2,000 capacity",
        tagline: "The runway where the world's biggest shows happen.",
        features: [
          "Dedicated backstage and green room facilities",
          "Premium programmable lighting rig",
          "VIP front-row seating configuration"
        ]
      },
      {
        name: "Fountain Terrace",
        specs: "30,000 sq ft  ·  Open air",
        tagline: "The Burj Khalifa is your backdrop. The fountain is your show.",
        features: [
          "Direct views of the Dubai Fountain",
          "Burj Khalifa synchronised lighting available",
          "Open-air staging for 5,000+"
        ]
      }
    ],
    cta: {
      label: "Request a venue pack",
      action: "login"
    }
  },

  // ── SLIDE 9: DECISION ────────────────────────
  {
    id: "slide-9",
    type: "ActionClosingSlide",
    title: "Your Move",
    hook: "The decision that changes your brand's trajectory.",
    headline: "One conversation\nchanges everything.",
    body: "The brands, sponsors, and partners who are here didn't wait. They moved. The only question is which door you walk through first.",
    description: "Start a leasing, sponsorship, or events conversation",
    aiImage: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80",
    bgImage: "https://image.pollinations.ai/prompt/Dubai%20city%20skyline%20night%20dark%20cinematic%20dramatic%20silhouette%20luxury?width=1920&height=1080&nologo=true",
    actionBlocks: [
      {
        title: "Retail Leasing",
        eyebrow: "For brands & retailers",
        description: "Find the right space for your brand in the world's most visited mall.",
        label: "Talk to our leasing team",
        action: "login"
      },
      {
        title: "Sponsorships",
        eyebrow: "For brands & media buyers",
        description: "200M annual visitors. 1B+ social impressions. The reach is real.",
        label: "Explore brand partnerships",
        action: "login"
      },
      {
        title: "Events",
        eyebrow: "For event organisers",
        description: "Three iconic venues. One team. Zero friction from concept to curtain.",
        label: "Book a venue consultation",
        action: "login"
      }
    ]
  }
];

export const subDecksConfig = {
  events_subdeck: {
    title: "Events at The Dubai Mall",
    slides: [
      {
        id: "sub-1",
        headline: "The world showed up.\nEvery year.",
        body: "Post Malone. BTS. Ed Sheeran. Royal brand launches. Record-breaking NYE countdowns watched by 2 million people live. This stage has a history — and it's still being written.",
        backgroundImage: "https://image.pollinations.ai/prompt/live%20concert%20crowd%20energy%20stage%20lighting%20spectacular%20Dubai%20dark?width=1920&height=1080&nologo=true",
        highlights: [
          "Post Malone, BTS, and Ed Sheeran global activations",
          "Luxury brand global launch events",
          "Record NYE countdown — 2M live viewers"
        ]
      },
      {
        id: "sub-2",
        headline: "We handle everything.\nYou focus on the moment.",
        body: "Full HD LED walls. Line array audio. 500+ trained event staff. Single point of contact for every regulatory approval. End-to-end production by people who have done it 500 times.",
        backgroundImage: "https://image.pollinations.ai/prompt/event%20production%20backstage%20professional%20lighting%20staging%20Dubai?width=1920&height=1080&nologo=true",
        services: [
          { name: "AV & Production", detail: "Broadcast-ready HD LED walls, line array audio" },
          { name: "Logistics & Permits", detail: "One contact, all approvals handled" },
          { name: "Staffing", detail: "500+ trained event staff on call" },
          { name: "Brand Integration", detail: "Signage, screens, social amplification" }
        ]
      },
      {
        id: "sub-3",
        headline: "From brief\nto curtain call.",
        body: "Three steps. One team. Zero friction.",
        backgroundImage: "https://image.pollinations.ai/prompt/luxury%20planning%20meeting%20professional%20elegant%20Dubai%20interior?width=1920&height=1080&nologo=true",
        steps: [
          { number: "01", title: "Brief Us", detail: "Share your event concept, dates, and audience size" },
          { number: "02", title: "Site Walk", detail: "Tour the venue with our events director within 48 hours" },
          { number: "03", title: "Go Live", detail: "We handle production, permits, and full on-site delivery" }
        ]
      },
      {
        id: "sub-4",
        headline: "Let's make\nit happen.",
        body: "Our events team responds within 24 hours. Tell us what you're building and we'll tell you how we can make it bigger.",
        backgroundImage: "https://image.pollinations.ai/prompt/Dubai%20night%20luxury%20atmospheric%20dark%20cinematic%20dramatic?width=1920&height=1080&nologo=true",
        cta: {
          label: "Book a venue consultation",
          action: "login"
        },
        contact: {
          email: "events@emaar.ae",
          phone: "+971 4 362 7500"
        }
      }
    ]
  },
  concerts_subdeck: {
    title: "Concerts & Live Performances",
    slides: [
      {
        id: "con-1",
        headline: "The Grandest Stage",
        body: "World-class acoustics, massive capacity, and a stage that amplifies every performance to a global audience.",
        backgroundImage: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1920&q=80",
        images: [
          "/images/concert_img_1.png",
          "/images/concert_img_2.png",
          "/images/concert_img_1.png",
          "/images/concert_img_2.png"
        ],
        cta: {
          label: "Book Concert Venue",
          action: "login"
        }
      }
    ]
  },
  launches_subdeck: {
    title: "Brand Activations & Launches",
    slides: [
      {
        id: "laun-1",
        headline: "Where the World Watches",
        body: "Launch your next product on the Fashion Catwalk. Unmatched footfall guarantees your activation becomes the most talked-about event in the region.",
        backgroundImage: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1920&q=80",
        images: [
          "/images/brand_launch_img.png",
          "/images/brand_launch_2.png",
          "/images/brand_launch_img.png",
          "/images/brand_launch_2.png"
        ],
        cta: {
          label: "Plan your Activation",
          action: "login"
        }
      }
    ]
  },
  galas_subdeck: {
    title: "Corporate & Government Galas",
    slides: [
      {
        id: "galas-1",
        headline: "Absolute Prestige",
        body: "Host VIP delegates in the most exclusive environments. Flawless production, unparalleled catering, and absolute security.",
        backgroundImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80",
        images: [
          "/images/corporate_gala_img.png",
          "/images/grand_opening.png",
          "/images/corporate_gala_img.png",
          "/images/events_concert.png"
        ],
        cta: {
          label: "Inquire about Galas",
          action: "login"
        }
      }
    ]
  },
  gallery_subdeck: {
    title: "Events Gallery",
    slides: [
      {
        id: "full-1",
        headline: "Live Concerts",
        body: "Unforgettable moments on the grandest stage. Hosting world-class musicians requires an environment capable of matching their scale. Our venues feature state-of-the-art acoustic setups, massive capacity, and seamless crowd control management.",
        highlights: [
          "State-of-the-art acoustics and rigging points",
          "Seamless crowd management for 10,000+ attendees",
          "Premium VIP enclosures and backstage facilities",
          "Global broadcasting integration ready"
        ],
        images: [
          "/images/concert_img_1.png",
          "/images/concert_img_2.png"
        ]
      },
      {
        id: "full-2",
        headline: "Brand Activations",
        body: "Where global brands make their statement. Whether you're launching a highly-anticipated luxury collection or an immersive tech product, our catwalks and atriums provide unmatched visibility to over 200 million annual shoppers.",
        highlights: [
          "Maximum footfall visibility across key intersections",
          "Custom staging and architecture allowed",
          "Unparalleled luxury fashion context",
          "Surround digital OOH advertising options"
        ],
        images: [
          "/images/brand_launch_img.png",
          "/images/brand_launch_2.png"
        ]
      },
      {
        id: "full-3",
        headline: "Corporate Galas",
        body: "Redefining professional gatherings. From high-stakes diplomatic summits to exclusive VIP dinners, our venues provide absolute security, breathtaking backdrops like the Burj Khalifa, and flawless hospitality execution.",
        highlights: [
          "Bespoke catering by world-class chefs",
          "Absolute privacy and VIP security routing",
          "Elegant staging and crystal lighting",
          "Seamless valet and arrival experiences"
        ],
        images: [
          "/images/corporate_gala_img.png",
          "/images/grand_opening.png"
        ]
      }
    ]
  }
};
