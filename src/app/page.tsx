"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import AboutFeature from '@/components/sections/about/AboutFeature';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Star, Hotel, Sparkles, Flower2, UtensilsCrossed, Dumbbell, Waves, Crown, Users, MapPin, Award, MessageSquare, Building2, Phone, Instagram, Facebook, Twitter } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="small"
      background="grid"
      cardStyle="glass-flat"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Grand Luxe Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Redefined"
          description="Welcome to Grand Luxe Hotel, where exceptional service meets elegant accommodations. Discover the perfect blend of comfort, sophistication, and world-class amenities in the heart of the city."
          tag="Premium Hospitality"
          tagIcon={Star}
          buttons={[
            {
              text: "Book Your Stay",
              href: "https://booking.com"
            },
            {
              text: "View Rooms",
              href: "rooms"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325666043-k4j2qbnt.jpg"
          imageAlt="Grand Luxe Hotel exterior with elegant architecture"
          imagePosition="right"
          fixedMediaHeight={true}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Exquisite Accommodations"
          description="Choose from our carefully curated selection of rooms and suites, each designed to provide the ultimate comfort and luxury experience."
          tag="Our Rooms"
          tagIcon={Hotel}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "deluxe-room",
              name: "Deluxe Room",
              price: "$299/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325666611-kl3sqyw1.jpg",
              imageAlt: "Elegant deluxe room with modern amenities"
            },
            {
              id: "executive-suite",
              name: "Executive Suite",
              price: "$499/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325667314-u9rrxvib.jpg",
              imageAlt: "Spacious executive suite with luxury furnishings"
            },
            {
              id: "presidential-suite",
              name: "Presidential Suite",
              price: "$899/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325667835-9en388rz.jpg",
              imageAlt: "Premium presidential suite with panoramic views"
            }
          ]}
          buttons={[
            {
              text: "View All Rooms",
              href: "https://booking.com"
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Indulge in our comprehensive range of premium facilities and services designed to enhance your stay and create unforgettable memories."
          tag="Amenities"
          tagIcon={Sparkles}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="blur-reveal"
          features={[
            {
              title: "Spa & Wellness Center",
              description: "Rejuvenate your mind and body at our award-winning spa featuring therapeutic treatments and relaxation facilities.",
              icon: Flower2
            },
            {
              title: "Fine Dining Restaurant",
              description: "Experience culinary excellence at our signature restaurant with internationally acclaimed chefs and sommelier-selected wines.",
              icon: UtensilsCrossed
            },
            {
              title: "Fitness Center",
              description: "Stay active in our state-of-the-art fitness facility equipped with premium equipment and personal training services.",
              icon: Dumbbell
            },
            {
              title: "Infinity Pool",
              description: "Unwind at our rooftop infinity pool offering breathtaking city views and poolside service throughout the day.",
              icon: Waves
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="At Grand Luxe Hotel, we believe that every guest deserves an extraordinary experience. Our commitment to excellence, attention to detail, and personalized service creates memories that last a lifetime."
          features={[
            {
              icon: Crown,
              title: "Luxury Redefined",
              description: "Experience unparalleled luxury with our meticulously designed spaces, premium amenities, and world-class service that exceeds every expectation."
            },
            {
              icon: Users,
              title: "Personalized Service",
              description: "Our dedicated staff provides personalized attention to ensure your every need is anticipated and fulfilled with genuine care and professionalism."
            },
            {
              icon: MapPin,
              title: "Prime Location",
              description: "Located in the heart of the city, we offer convenient access to major attractions, business districts, and cultural landmarks."
            },
            {
              icon: Award,
              title: "Award-Winning Excellence",
              description: "Recognized globally for our outstanding hospitality, service quality, and commitment to creating exceptional guest experiences."
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Discover why travelers from around the world choose Grand Luxe Hotel for their most memorable stays."
          tag="Guest Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Business Executive",
              testimonial: "The attention to detail and exceptional service at Grand Luxe Hotel made my business trip truly memorable. The staff went above and beyond to ensure my comfort.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325671682-38lgjla7.jpg",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael & Emma Chen",
              role: "Celebrating Anniversary",
              testimonial: "Our anniversary stay was absolutely perfect. From the elegant suite to the romantic dinner, every moment was crafted with care and luxury.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325672389-7q7wdibo.jpg",
              imageAlt: "Portrait of Michael and Emma Chen"
            },
            {
              id: "3",
              name: "David Rodriguez",
              role: "Frequent Traveler",
              testimonial: "Having stayed at hotels worldwide, Grand Luxe Hotel stands out for its impeccable service, luxurious amenities, and genuine hospitality.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325672876-vlcikcbr.jpg",
              imageAlt: "Portrait of David Rodriguez"
            },
            {
              id: "4",
              name: "Lisa Thompson",
              role: "Leisure Traveler",
              testimonial: "The spa treatments were divine, the pool area was stunning, and the concierge helped plan the perfect city tour. Truly a five-star experience.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325678785-h7digpwf.jpg",
              imageAlt: "Portrait of Lisa Thompson"
            },
            {
              id: "5",
              name: "The Martinez Family",
              role: "Family Vacation",
              testimonial: "Grand Luxe Hotel exceeded our expectations for our family vacation. The kids loved the pool, and we appreciated the family-friendly amenities and services.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325679607-bq92dma0.jpg",
              imageAlt: "Portrait of the Martinez family"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Global Leaders"
          description="Leading companies and discerning travelers worldwide choose Grand Luxe Hotel for their accommodation needs."
          tag="Corporate Partners"
          tagIcon={Building2}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325680360-gl5hx5fb.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325681078-4a1duc11.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325681812-zzlp5s4h.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325682927-28g8ok2e.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325683476-ucya93ie.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325684189-lt6zyehh.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325685028-uozso9mo.jpg"
          ]
          speed={35}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Ready to Experience Luxury?"
          description="Contact our reservations team to book your stay or learn more about our exclusive packages and special offers. We're here to make your visit extraordinary."
          tagIcon={Phone}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325685586-w1eq4w5g.jpg"
          imageAlt="Professional hotel concierge ready to assist guests"
          mediaPosition="right"
          inputPlaceholder="Your email address"
          buttonText="Contact Us"
          termsText="By submitting your information, you agree to receive exclusive offers and updates from Grand Luxe Hotel."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Grand Luxe Hotel"
          copyrightText="© 2024 Grand Luxe Hotel. All rights reserved."
          columns={[
            {
              title: "Hotel",
              items: [
                {
                  label: "Rooms & Suites",
                  href: "rooms"
                },
                {
                  label: "Amenities",
                  href: "amenities"
                },
                {
                  label: "Dining",
                  href: "dining"
                },
                {
                  label: "Spa & Wellness",
                  href: "spa"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Concierge",
                  href: "concierge"
                },
                {
                  label: "Business Center",
                  href: "business"
                },
                {
                  label: "Event Spaces",
                  href: "events"
                },
                {
                  label: "Transportation",
                  href: "transport"
                }
              ]
            },
            {
              title: "Experience",
              items: [
                {
                  label: "Local Attractions",
                  href: "attractions"
                },
                {
                  label: "City Guide",
                  href: "guide"
                },
                {
                  label: "Special Offers",
                  href: "offers"
                },
                {
                  label: "Loyalty Program",
                  href: "loyalty"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "Reservations",
                  href: "https://booking.com"
                },
                {
                  label: "Guest Services",
                  href: "services"
                },
                {
                  label: "Accessibility",
                  href: "accessibility"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/grandluxehotel",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/grandluxehotel",
              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/grandluxehotel",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}