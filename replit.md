# ARPIECA - Islamic Heritage & Community Development Platform

## Overview

ARPIECA (Association pour la Renaissance du Patrimoine Islamique et de l'Expansion de la Culture Arabe) is a full-stack web application for a humanitarian NGO operating in Senegal. The platform serves as a digital presence for showcasing the organization's work in preserving Islamic heritage while supporting comprehensive community development in education, healthcare, water accessibility, and religious services. The application features a modern, responsive design with donation capabilities, project showcases, and contact management functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using **React 18** with **TypeScript** and follows a component-based architecture pattern. The application uses **Wouter** for lightweight client-side routing and **TanStack Query** for server state management. The UI is built with **shadcn/ui** components (Radix UI primitives) styled with **Tailwind CSS**, providing a consistent design system with accessibility built-in.

Key architectural decisions:
- **Single Page Application (SPA)**: Chosen for smooth user experience and modern web standards
- **Component composition**: Leveraging Radix UI primitives for accessibility and Tailwind for utility-first styling
- **State management**: TanStack Query handles server state, eliminating need for complex client state management
- **Type safety**: Full TypeScript implementation ensures compile-time error catching

### Backend Architecture
The backend uses **Express.js** with **TypeScript** in a RESTful API pattern. The server is designed to handle contact form submissions and donation processing endpoints. The architecture follows separation of concerns with distinct routing, storage, and server setup modules.

Key architectural decisions:
- **Express.js server**: Lightweight and flexible for handling API routes and serving static assets
- **Middleware-based approach**: Request logging, JSON parsing, and error handling through Express middleware
- **Development/Production optimization**: Vite integration for development with static file serving for production

### Data Storage Solutions
The application implements a **dual storage strategy**:
- **PostgreSQL with Drizzle ORM**: Configured for production database operations with type-safe schema definitions
- **In-memory storage**: MemStorage class provides development/testing storage without database dependencies
- **Neon Database integration**: Serverless PostgreSQL solution for cloud deployment

Key architectural decisions:
- **Drizzle ORM**: Chosen for type safety and SQL-like query building
- **Storage abstraction**: Interface-based design allows easy switching between storage implementations
- **Schema-first approach**: Database schema defined in TypeScript with Zod validation

### Authentication and Authorization
Currently implements a **basic user management system** with username/password authentication. The schema supports user creation and retrieval operations, laying groundwork for future authentication features.

### External Dependencies

**Database & ORM:**
- PostgreSQL (Neon Database for serverless deployment)
- Drizzle ORM for type-safe database operations
- Drizzle Kit for database migrations and schema management

**Frontend Libraries:**
- React 18 with TypeScript for component development
- Wouter for lightweight routing
- TanStack Query for server state management
- Radix UI for accessible component primitives
- Tailwind CSS for utility-first styling
- Lucide React for consistent iconography

**Development Tools:**
- Vite for fast development builds and HMR
- ESBuild for production bundling
- PostCSS with Tailwind for CSS processing
- TSX for TypeScript execution in development

**Backend Dependencies:**
- Express.js for web server framework
- Connect-pg-simple for PostgreSQL session store
- CORS handling and security middleware

**UI Component System:**
- shadcn/ui component library built on Radix UI
- Class Variance Authority for component variant management
- Embla Carousel for image/content carousels
- React Hook Form with Zod resolvers for form validation

The application is designed for deployment on Replit with development-specific tooling including runtime error overlays and hot module replacement for optimal developer experience.