# Error Handling & User Experience

This portfolio provides graceful error handling to ensure users always have a good experience, even when something goes wrong.

## Components

### 1. **ErrorDisplay Component** (`components/ui/error-display.tsx`)

A reusable component that provides consistent error messaging with optional auto-redirect functionality.

**Features:**

- Consistent styling matching the design system
- Optional auto-redirect with countdown timer
- Customizable action buttons
- Accessible focus management
- Theme-aware styling

**Props:**

```typescript
interface ErrorDisplayProps {
  title: string; // Error title
  message: string; // Error description
  actionText?: string; // Button text (default: "Go Home")
  onAction?: () => void; // Custom action handler
  autoRedirect?: boolean; // Enable auto-redirect (default: false)
  redirectDelay?: number; // Redirect delay in seconds (default: 5)
  redirectPath?: string; // Redirect destination (default: "/")
}
```

### 2. **404 Not Found Page** (`app/not-found.tsx`)

Custom 404 page that automatically redirects users back to the homepage while providing helpful navigation options.

**Features:**

- Auto-redirect to homepage after 5 seconds
- Countdown timer showing remaining time
- Quick navigation links to main sections
- Consistent portfolio styling and theming
- Smooth animations

### 3. **Global Error Handler** (`app/global-error.tsx`)

Catches critical application errors and provides recovery options.

**Features:**

- Handles global application errors
- Provides reset functionality
- Maintains application shell and theming

### 4. **Error Boundary** (`components/error-boundary.tsx`)

React error boundary for catching component-level errors.

**Features:**

- Catches JavaScript errors in component tree
- Provides "Try again" functionality
- Uses consistent ErrorDisplay component

## Usage Examples

### Basic Error Display

```tsx
<ErrorDisplay
  title="Something went wrong"
  message="Please try again later."
  actionText="Retry"
  onAction={() => window.location.reload()}
/>
```

### Auto-redirecting Error

```tsx
<ErrorDisplay
  title="404 - Page Not Found"
  message="Redirecting you back to the homepage..."
  autoRedirect={true}
  redirectDelay={3}
  redirectPath="/"
/>
```

### Error Boundary Usage

```tsx
<ErrorBoundary fallback={<CustomErrorComponent />}>
  <MyComponent />
</ErrorBoundary>
```

## Error Scenarios Covered

1. **404 Errors**: Custom not-found page with auto-redirect
2. **Component Errors**: Error boundaries catch React component failures
3. **Global Errors**: Critical application errors are handled gracefully
4. **Data Loading Errors**: Each section has individual error boundaries

## Styling Consistency

All error components use:

- **Colors**: Red for error states (`text-red-600`)
- **Layout**: Centered content with proper spacing
- **Typography**: Consistent font weights and sizes
- **Buttons**: Primary button styling with hover states
- **Theming**: Full dark/light mode support
- **Animations**: Smooth transitions and fade-ins

## Testing Error States

### Test 404 Page

Navigate to any non-existent route (e.g., `/non-existent-page`)

### Test Error Boundary

Temporarily add an error in a component:

```tsx
// In any component, add this to trigger an error
if (Math.random() > 0.5) {
  throw new Error('Test error');
}
```

### Test Auto-redirect

The 404 page will automatically redirect after 5 seconds, with a visible countdown.

## Customization

### Change Redirect Timing

Modify the `redirectDelay` prop in `not-found.tsx`:

```tsx
<ErrorDisplay
  redirectDelay={10} // 10 seconds instead of 5
  // ... other props
/>
```

### Add Custom Error Pages

Create additional error pages by adding more files to the `app` directory:

- `app/error.tsx` - For generic errors
- `app/loading.tsx` - For loading states
- `app/global-error.tsx` - For global errors (already included)

### Custom Error Messages

All error messages can be customized through the component props without changing the underlying styling or behavior.

## Accessibility Features

- **Focus Management**: Buttons receive proper focus
- **Screen Readers**: Semantic HTML and ARIA labels
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Color Contrast**: Error colors meet WCAG guidelines
- **Reduced Motion**: Respects user motion preferences

## Future Enhancements

- **Error Reporting**: Add error logging service integration
- **Retry Logic**: Implement exponential backoff for failed requests
- **Offline Support**: Handle network connectivity issues
- **Analytics**: Track error occurrences for monitoring
