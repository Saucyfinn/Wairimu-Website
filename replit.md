# Overview

This is a forest property investment website for Wairimu Station in Kaikoura, New Zealand. The application showcases a premium forest property investment opportunity with a focus on ETS (Emissions Trading Scheme) income potential. It features a modern, visually appealing landing page with property details, location information, investment calculators, and an inquiry form for potential investors.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Modern React application using functional components and hooks
- **ShadCN UI Components**: Comprehensive UI component library built on Radix UI primitives for consistent design
- **Tailwind CSS**: Utility-first CSS framework with custom color scheme optimized for real estate/investment theme
- **Wouter**: Lightweight client-side routing solution
- **TanStack Query**: Data fetching and state management for API calls with caching and error handling

## Backend Architecture
- **Express.js**: RESTful API server with middleware for logging, JSON parsing, and error handling
- **TypeScript**: Full type safety across the entire backend
- **Memory Storage**: Simple in-memory data storage for inquiries and users (easily replaceable with database)
- **Modular Route System**: Clean separation of routes and business logic

## Build System
- **Vite**: Modern build tool for fast development and optimized production builds
- **ESBuild**: Fast bundling for the server-side code
- **Development Mode**: Hot module replacement with Vite dev server integration

## Data Management
- **Drizzle ORM**: Type-safe database toolkit configured for PostgreSQL
- **Zod Validation**: Runtime type validation for API requests and responses
- **Shared Schema**: Common type definitions between frontend and backend

## Authentication & Forms
- **React Hook Form**: Form state management with validation
- **Hookform Resolvers**: Integration with Zod for form validation
- **Contact Form**: Inquiry submission system with email capture and consent tracking

## Styling System
- **CSS Custom Properties**: Theme system with light/dark mode support
- **Google Fonts**: Professional typography with Inter and Crimson Pro fonts
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Glass Effects**: Modern UI effects for navigation and overlays

# External Dependencies

## Database
- **Neon Database**: Serverless PostgreSQL database with connection pooling
- **Database URL**: Environment-based configuration for database connections
- **Migration System**: Drizzle Kit for database schema management

## UI Framework
- **Radix UI**: Comprehensive set of low-level UI primitives for accessibility
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for managing component variants
- **Embla Carousel**: Carousel/slider functionality for image galleries

## Development Tools
- **Replit Integration**: Development environment plugins for runtime error handling and debugging
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **TypeScript**: Static type checking across the entire codebase

## Third-party Services
- **Google Fonts API**: Web font delivery
- **Unsplash**: Stock photography for property and location imagery
- **Date-fns**: Date manipulation and formatting utilities

The application is designed as a single-page application optimized for showcasing property investment opportunities with interactive calculators, inquiry forms, and rich media content.