import { useEffect, useState, useRef, useCallback, useReducer } from "react";
import { 
  Building, 
  Leaf, 
  Mountain, 
  Star, 
  Users, 
  Wifi, 
  Car, 
  TreePine, 
  Sunset, 
  Camera, 
  MapPin, 
  Phone, 
  Mail, 
  FileText 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import conceptImage1 from "@assets/w1_1758155810309.jpg";
import conceptImage2 from "@assets/w2_1758155810310.jpg";
import conceptImage3 from "@assets/w3_1758152454450.jpg";
import architecturalConceptsGrid from "@assets/architectural_concepts_grid.png";
import conceptPdf from "@assets/Concept Design Kaikoura_1758166391369.pdf";

// Slideshow images for the eco-lodge development
const slideshowImages = [
  "/slide-1.jpg",
  "/slide-2.jpg",
  "/slide-3.jpg",
  "/slide-4.jpg",
  "/slide-5.jpg",
  "/slide-6.jpg",
  "/slide-7.jpg",
  "/slide-8.jpg",
  "/slide-9.jpg"
];

// Slideshow state and reducer for atomic updates
interface SlideshowState {
  currentSlide: number;
  isPlaying: boolean;
}

type SlideshowAction = 
  | { type: 'SET_SLIDE'; slide: number }
  | { type: 'NEXT_SLIDE' }
  | { type: 'PLAY' }
  | { type: 'PAUSE' };

function slideshowReducer(state: SlideshowState, action: SlideshowAction): SlideshowState {
  switch (action.type) {
    case 'SET_SLIDE':
      return { ...state, currentSlide: action.slide, isPlaying: true };
    case 'NEXT_SLIDE':
      return { ...state, currentSlide: (state.currentSlide + 1) % slideshowImages.length };
    case 'PLAY':
      return { ...state, isPlaying: true };
    case 'PAUSE':
      return { ...state, isPlaying: false };
    default:
      return state;
  }
}

// Slideshow Component
function EcoLodgeSlideshow() {
  const [state, dispatch] = useReducer(slideshowReducer, { currentSlide: 0, isPlaying: true });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  
  // Start/restart auto-advance timer
  const startTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      dispatch({ type: 'NEXT_SLIDE' });
    }, 4000);
  }, []);
  
  // Initialize and manage timer
  useEffect(() => {
    if (state.isPlaying) {
      startTimer();
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [state.isPlaying, startTimer]); // Removed state.currentSlide to prevent multiple timers
  
  // Manual navigation handler - prevents race conditions
  const handleSlideClick = useCallback((index: number) => {
    // Immediately clear timer to prevent race conditions
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Update slide state
    dispatch({ type: 'SET_SLIDE', slide: index });
    
    // Restart timer after state update
    startTimer();
  }, [startTimer]);
  
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
          Development Showcase
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore the eco-lodge development through this visual presentation showcasing the design concepts and natural integration.
        </p>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Slideshow Container */}
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-card">
          {/* Only render the current slide - eliminates multiple visible images */}
          <img 
            key={state.currentSlide} // Force re-render for smooth transitions
            src={slideshowImages[state.currentSlide]}
            alt={`Eco-lodge development showcase - slide ${state.currentSlide + 1}`}
            className="w-full h-full object-cover animate-fadeIn"
            data-testid={`slideshow-image-${state.currentSlide + 1}`}
          />
          
          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slideshowImages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideClick(index)}
                aria-pressed={index === state.currentSlide}
                aria-label={`Go to slide ${index + 1} of ${slideshowImages.length}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === state.currentSlide 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                data-testid={`slideshow-indicator-${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Slide Counter */}
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            {state.currentSlide + 1} of {slideshowImages.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function EcoLodge() {
  useEffect(() => {
    // Set unique page title and meta description for SEO
    document.title = "Eco Lodge Development Concept - Wairimu Station | Kaikoura Tourism Investment";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore the eco lodge development opportunity at Wairimu Station. Sustainable tourism accommodation concept in pristine Kaikoura environment with strong investment potential.');
    } else {
      const newMetaElement = document.createElement('meta') as HTMLMetaElement;
      newMetaElement.name = 'description';
      newMetaElement.content = 'Explore the eco lodge development opportunity at Wairimu Station. Sustainable tourism accommodation concept in pristine Kaikoura environment with strong investment potential.';
      document.head.appendChild(newMetaElement);
    }
    
    // Cleanup on unmount
    return () => {
      document.title = "Wairimu Station - Premium Forest Property Investment | Kaikoura, New Zealand";
    };
  }, []);

  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const conceptFeatures = [
    {
      icon: Building,
      title: "Boutique Accommodation",
      description: "8-12 luxury eco-cabins with panoramic views of mountains and coastline",
      capacity: "24-36 guests maximum"
    },
    {
      icon: Leaf,
      title: "Sustainable Design",
      description: "Solar power, rainwater harvesting, and locally sourced materials",
      capacity: "Net-zero carbon footprint"
    },
    {
      icon: Mountain,
      title: "Natural Integration",
      description: "Minimal impact design blending with existing landscape and forest",
      capacity: "95% native vegetation retained"
    },
    {
      icon: Star,
      title: "Premium Experience",
      description: "High-end amenities targeting luxury eco-tourism market",
      capacity: "$400-800/night potential"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: `url(${conceptImage1})`
          }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6" data-testid="eco-lodge-hero-title">
            Eco Lodge Development Opportunity
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed" data-testid="eco-lodge-hero-description">
            Premium eco-tourism accommodation concept combining luxury hospitality with environmental stewardship in Kaikoura's pristine landscape
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => navigateToSection("concept-overview")}
              size="lg"
              className="floating-green-btn"
              data-testid="hero-concept-button"
            >
              <Building className="mr-2 h-5 w-5" />
              View Concept
            </Button>
          </div>
        </div>
      </section>

      {/* Concept Overview */}
      <section id="concept-overview" className="py-20 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Luxury Eco-Lodge Concept
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A boutique eco-lodge offering guests an immersive nature experience while generating sustainable revenue for Wairimu Station
            </p>
            
          </div>

          {/* Architectural Concepts Grid */}
          <div className="mb-16">
            <figure className="rounded-xl overflow-hidden shadow-lg bg-card dark:bg-card">
              <img 
                src={architecturalConceptsGrid}
                alt="Architectural concepts grid showing multiple design variations for the eco-lodge development at Wairimu Station" 
                className="w-full h-auto object-contain aspect-video"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
                data-testid="architectural-concepts-grid"
              />
              <figcaption className="sr-only">
                Professional architectural concept design demonstrating possible design approach and site integration
              </figcaption>
            </figure>
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Professional architectural concept design demonstrating possible design approach and site integration
              </p>
            </div>
          </div>

          {/* Development Slideshow */}
          <EcoLodgeSlideshow />

        </div>
      </section>

    </div>
  );
}