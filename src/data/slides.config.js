export const slidesConfig = [
  {
    id: "slide-1",
    type: "CinematicHeroSlide",
    title: "Opening",
    headline: "The World's Most Visited Destination",
    subheadline: "200M+ visitors. 1,300 brands. One address.",
    videoSrc: "/images/hero_video.mp4",
    cta: {
      label: "Explore the Opportunity →",
      action: "next_slide"
    }
  },
  {
    id: "slide-2",
    type: "SplitStatsSlide",
    title: "Why The Dubai Mall",
    headline: "The commercial center of a global city.",
    body: "Located in the heart of Downtown Dubai, The Dubai Mall is more than a shopping destination—it is the nexus of global commerce. With unrivaled access and a massive regional catchment, it connects brands to the world's most affluent demographics.",
    backgroundImage: "/images/dubai_mall_aerial_1777059623288.png",
    stats: [
      { label: "annual visitors", value: 200, prefix: "", suffix: "M+" },
      { label: "retail brands", value: 1300, prefix: "", suffix: "+" },
      { label: "sq ft gross leasable area", value: 5.9, prefix: "", suffix: "M" },
      { label: "people within 4hr flight radius", value: 3.4, prefix: "", suffix: "B" }
    ],
    cta: {
      label: "Start a leasing conversation →",
      action: "mailto:leasing@emaar.ae?subject=Inquiry%20regarding%20Dubai%20Mall"
    }
  },
  {
    id: "slide-3",
    type: "MultiColumnSlide",
    title: "Retail",
    headline: "1,300 brands. Every tier. Every format.",
    backgroundImage: "/images/luxury_retail_interior_1777059636886.png",
    columns: [
      {
        title: "Luxury Flagships",
        icon: "gem",
        points: ["Multi-story bespoke facades", "VIP personal shopping suites", "Prime positioning on Fashion Avenue"]
      },
      {
        title: "Mid-Market",
        icon: "shopping-bag",
        points: ["High-footfall transit corridors", "Flexible unit footprints", "Proximity to major anchor stores"]
      },
      {
        title: "Pop-Up & Emerging",
        icon: "sparkles",
        points: ["Short-term activation spaces", "High-visibility kiosk formats", "Turnkey retail solutions"]
      }
    ],
    cta: {
      label: "Explore available retail spaces →",
      action: "mailto:leasing@emaar.ae?subject=Retail%20Space%20Availability"
    }
  },
  {
    id: "slide-4",
    type: "EditorialLuxurySlide",
    title: "Luxury",
    headline: "Where luxury comes to be seen.",
    backgroundImage: "/images/high_fashion_boutique_1777059669711.png",
    brands: [
      { name: "Louis Vuitton", url: "https://me.louisvuitton.com" },
      { name: "Gucci", url: "https://www.gucci.com" },
      { name: "Hermès", url: "https://www.hermes.com" },
      { name: "Chanel", url: "https://www.chanel.com" },
      { name: "Rolex", url: "https://www.rolex.com" }
    ],
    quote: {
      text: "Our flagship at The Dubai Mall consistently outpaces our global portfolio in footfall and conversion. It is the absolute pinnacle of luxury retail visibility.",
      author: "Global Head of Retail",
      company: "Leading European Fashion House"
    },
    cta: {
      label: "Inquire about luxury leasing →",
      action: "mailto:luxury@emaar.ae?subject=Fashion%20Avenue%20Inquiry"
    }
  },
  {
    id: "slide-5",
    type: "GridGallerySlide",
    title: "Dining & Lifestyle",
    headline: "Dining as a destination, not an afterthought.",
    backgroundImage: "/images/upscale_restaurant_1777059709275.png",
    images: [
      "/images/experience_dining_1776937516465.png",
      "/images/experience_entertainment_1776937591627.png",
      "/images/experience_shopping_1776937496372.png",
      "/images/events_bg_1776937772217.png",
      "/images/exclusive_boutique_1777023218292.png",
      "/images/intro_bg_1776937466612.png"
    ],
    stats: [
      { label: "dining outlets", value: 200, prefix: "", suffix: "+" },
      { label: "dedicated food halls", value: 3, prefix: "", suffix: "" },
      { label: "F&B visits/year", value: 22, prefix: "", suffix: "M" }
    ],
    cta: {
      label: "Discuss F&B leasing →",
      action: "mailto:fb_leasing@emaar.ae?subject=F%26B%20Leasing%20Inquiry"
    }
  },
  {
    id: "slide-6",
    type: "CinematicHeroSlide",
    title: "Attractions",
    headline: "A theme park inside a mall.",
    backgroundImage: "/images/experience_entertainment_1776937591627.png",
    cards: [
      { title: "Dubai Aquarium", description: "10-million liter tank with 33,000 aquatic animals.", visitorCount: "1.5M+ annual visitors" },
      { title: "Play DXB", description: "The world's largest indoor VR and AR attraction.", visitorCount: "High-dwell time venue" },
      { title: "KidZania", description: "Award-winning interactive children's edutainment.", visitorCount: "700K+ families annually" },
      { title: "Dubai Ice Rink", description: "Olympic-size rink hosting global competitions.", visitorCount: "Year-round attractions" }
    ],
    cta: {
      label: "Partner with our entertainment platform →",
      action: "mailto:entertainment@emaar.ae?subject=Entertainment%20Partnership"
    }
  },
  {
    id: "slide-7",
    type: "GridGallerySlide",
    title: "Events & Live Platform",
    headline: "The world's most watched stage.",
    backgroundImage: "/images/concert_stage_1777059869401.png",
    stats: [
      { label: "events/year", value: 500, prefix: "", suffix: "+" },
      { label: "social media impressions", value: 1, prefix: "", suffix: "B+" },
      { label: "celebrity appearances annually", value: 25, prefix: "", suffix: "+" }
    ],
    tiles: [
      "Concerts & Live Shows",
      "Brand Activations",
      "Corporate & Product Launches"
    ],
    cta: {
      label: "Book a venue consultation →",
      action: "mailto:events@emaar.ae?subject=Venue%20Consultation",
      primary: true
    },
    subDeckCta: {
      label: "See full events deck →",
      action: "open_subdeck",
      subDeckId: "events_subdeck"
    }
  },
  {
    id: "slide-8",
    type: "SpecsCardSlide",
    title: "Venue Capabilities",
    headline: "Spaces that scale with your ambition.",
    backgroundImage: "/images/cta_bg_1776937816666.png",
    venues: [
      {
        name: "Grand Atrium",
        specs: "45,000 sq ft • 10,000 capacity",
        features: ["Full AV integration", "Heavy rigging points", "360-degree visibility"]
      },
      {
        name: "Fashion Catwalk",
        specs: "Linear runway format • 2,000 capacity",
        features: ["Dedicated backstage", "Premium lighting", "VIP seating areas"]
      },
      {
        name: "Outdoor Fountain Terrace",
        specs: "30,000 sq ft • Landmark backdrop",
        features: ["Burj Khalifa views", "Fountain synchronization", "Open-air staging"]
      }
    ],
    cta: {
      label: "Request a venue pack →",
      action: "mailto:events@emaar.ae?subject=Request%20Venue%20Pack"
    }
  },
  {
    id: "slide-9",
    type: "ActionClosingSlide",
    title: "Take Action",
    headline: "Your next move starts here.",
    backgroundImage: "/images/dubai_skyline_dark_1777059889408.png",
    actionBlocks: [
      {
        title: "Retail Leasing",
        label: "Talk to our leasing team",
        action: "mailto:leasing@emaar.ae?subject=Retail%20Leasing%20Inquiry"
      },
      {
        title: "Sponsorships",
        label: "Explore brand partnerships",
        action: "mailto:sponsorships@emaar.ae?subject=Brand%20Partnership"
      },
      {
        title: "Events",
        label: "Book a venue",
        action: "mailto:events@emaar.ae?subject=Venue%20Booking"
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
        headline: "Where the world showed up.",
        body: "From global music artists to royal brand launches — The Dubai Mall has hosted it all. 500+ events annually, 1B+ impressions, and an audience that keeps coming back.",
        backgroundImage: "/images/concert_stage_1777059869401.png",
        highlights: [
          "Post Malone, BTS, and Ed Sheeran activations",
          "Luxury brand global launch events",
          "Record-breaking NYE countdown — 2M viewers live"
        ]
      },
      {
        id: "sub-2",
        headline: "We handle everything.",
        body: "Our in-house production team covers end-to-end event delivery so your team focuses on the experience, not the logistics.",
        backgroundImage: "/images/events_bg_1776937772217.png",
        services: [
          { name: "AV & Production", detail: "Full HD LED walls, line array audio, broadcast-ready" },
          { name: "Logistics & Permits", detail: "Single point of contact for all regulatory approvals" },
          { name: "Staffing", detail: "500+ trained event staff on call" },
          { name: "Brand Integration", detail: "Signage, digital screens, social amplification" }
        ]
      },
      {
        id: "sub-3",
        headline: "From inquiry to curtain call.",
        body: "Three steps. One team. Zero friction.",
        backgroundImage: "/images/luxury_retail_interior_1777059636886.png",
        steps: [
          { number: "01", title: "Brief Us", detail: "Share your event concept, dates, and audience size" },
          { number: "02", title: "Site Walk", detail: "Tour the venue with our events director within 48hrs" },
          { number: "03", title: "Go Live", detail: "We handle production, permits, and on-site delivery" }
        ]
      },
      {
        id: "sub-4",
        headline: "Let's make it happen.",
        body: "Our events team responds within 24 hours. Tell us your vision.",
        backgroundImage: "/images/dubai_skyline_dark_1777059889408.png",
        cta: {
          label: "Book a venue consultation",
          action: "mailto:events@emaar.ae?subject=Event%20Booking%20Inquiry"
        },
        contact: {
          email: "events@emaar.ae",
          phone: "+971 4 362 7500"
        }
      }
    ]
  }
};
