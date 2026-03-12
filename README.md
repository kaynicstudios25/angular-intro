# Angular Intro (Super Simple)

This is a tiny Angular starter app, built from the official Angular docs flow:
- https://angular.dev/overview

Think of Angular like a toy box:
- **Component** = one toy (a piece of UI)
- **Template** = what the toy looks like (HTML)
- **Data binding** = magic string connecting data and UI

## Run the app

1. Open terminal in this folder.
2. Run:

```bash
npm install
npm start
```

3. Open `http://localhost:4200`

## What this boilerplate teaches

- `{{ title }}` shows text from TypeScript into HTML.
- `[(ngModel)]="name"` keeps input and data in sync.
- `(click)="increaseCount()"` runs code when button is clicked.

## Important files

- `src/app/app.ts` → app logic
- `src/app/app.html` → app screen
- `src/app/app.css` → app styles

## Next tiny steps

- Change `title` in `src/app/app.ts`
- Change default `name`
- Add a second button that resets the counter
