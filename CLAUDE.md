# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Angular 20 dashboard application using standalone components (no NgModules), zoneless change detection, and Tailwind CSS v4 for styling.

## Key Technologies

- **Angular 20.3**: Modern Angular with standalone components
- **Zoneless Change Detection**: Uses `provideZonelessChangeDetection()` instead of Zone.js
- **Signals**: Primary reactive primitive for reactive state management
- **Tailwind CSS v4**: Configured via PostCSS with `@tailwindcss/postcss` plugin
- **TypeScript 5.9**: Strict mode enabled with comprehensive compiler checks
- **Karma + Jasmine**: Unit testing framework

## Development Commands

```bash
# Start development server (runs on http://localhost:4200)
ng serve
# or
npm start

# Build for production
ng build

# Build and watch for changes (development mode)
ng build --watch --configuration development
# or
npm run watch

# Run unit tests
ng test
# or
npm test

# Run single test file
ng test --include='**/path/to/file.spec.ts'

# Generate new component
ng generate component component-name

# See all available generators
ng generate --help
```

## Code Architecture

### Application Bootstrap

- Entry point: `src/main.ts` - bootstraps the standalone `App` component
- App configuration: `src/app/app.config.ts` - provides router, zoneless change detection, and global error listeners
- Root component: `src/app/app.ts` - uses `App` class name (not `AppComponent`)

### Component Structure

- **Location**: Components are organized in `src/app/components/` directory by feature
- **Standalone components only**: All components use `imports` array instead of NgModules
- **Naming convention**: Component classes use simple names without "Component" suffix (e.g., `App`, `Sidebar`, `Header` instead of `AppComponent`, `SidebarComponent`)
- **Template/style separation**: Components use separate `.html` and `.css` files (e.g., `app.html`, `app.css`)
- **Signal-based state**: Prefer signals over traditional observables for reactive state
- **Component references**: Use `viewChild.required()` for type-safe component queries (see `App` component's sidebar reference)
- **Type definitions**: Define interfaces for component data structures locally within component files (e.g., `MenuItem` in `sidebar.ts`, `Task` in `task-item.ts`)

### Routing

- Routes defined in `src/app/app.routes.ts`
- Currently empty routes array - ready for lazy-loaded feature modules

### Styling

- Global styles in `src/styles.css` with Tailwind import
- PostCSS configured in `.postcssrc.json` with Tailwind CSS v4 plugin
- Component styles use standard CSS with Tailwind utilities available

## TypeScript Configuration

The project uses strict TypeScript settings:
- `strict: true`
- `noImplicitOverride: true`
- `noPropertyAccessFromIndexSignature: true`
- `noImplicitReturns: true`
- `noFallthroughCasesInSwitch: true`

Angular-specific strict settings:
- `strictInjectionParameters: true`
- `strictInputAccessModifiers: true`
- `strictTemplates: true`

## Code Formatting

Prettier is configured in `package.json`:
- Print width: 100 characters
- Single quotes preferred
- Angular parser for HTML files

## Important Patterns

### Creating Components

Components should follow this pattern:
```typescript
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example',
  imports: [CommonModule], // Add standalone component/directive/pipe imports here
  templateUrl: './example.html',
  styleUrl: './example.css'
})
export class Example {
  // Use signals for reactive state
  protected readonly exampleState = signal('initial value');
}
```

**Key conventions:**
- Class names without "Component" suffix (e.g., `Example` not `ExampleComponent`)
- Use `protected readonly` for signals that should be accessible in templates but not modified from outside
- Import `CommonModule` when using common directives like `*ngIf`, `*ngFor`
- Component folder structure: `components/example/example.ts`, `components/example/example.html`, `components/example/example.css`

### Zoneless Change Detection

Since this app uses zoneless change detection:
- Avoid relying on automatic change detection from async operations
- Use signals, `AsyncPipe`, or manual `ChangeDetectorRef.markForCheck()` to trigger updates
- Prefer signals over manual change detection where possible

## Build Output

- Production builds: `dist/` directory
- Bundle size limits (production):
  - Initial bundle: 500kB warning, 1MB error
  - Component styles: 4kB warning, 8kB error
