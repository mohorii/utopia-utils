# Utopia Utils

by Moritz
Just a little scss helper for dynamic sizes and spacings.
Built on the beautiful plugin [utopia-core-scss](https://github.com/trys/utopia-core-scss.git) wich is the Calculation behind [Utopia.fyi](https://utopia.fyi)

Ships just little specifications to give each clamp in a map a name.

### You can install dependencies via
`npm install`

### and get yourself a css output via
`npm run build`

### This helper ships two methods you can use to get some cool dynamic clamps in css variables.
```scss
@import 'styles/utopia-utils';

:root {
  // generateClamps just does what it says.
  // These Clamps are accessible via css variable in the :root of the project.

  @include generateClamps((
    "minWidth": 390,
    "maxWidth": 1920,
    "pairs": (
        (44, 104, 'display-1'), //var(--fluid-display-1)
        (42, 88, 'display-2'), //var(--fluid-display-2)
        (40, 80, 'display-3'), //var(--fluid-display-3)
        (38, 72, 'display-4'), //var(--fluid-display-4)
        (36, 64, 'display-5'), //var(--fluid-display-5)
        (34, 56, 'display-6'), //var(--fluid-display-6)
    ),
    "prefix": "fluid-",
  ));

  // generateClamp creates one single clamp-variable
  // Outputs var(--space-taxi) variable in :root of the project.

  @include generateClamp((
    "minWidth": 320,
    "maxWidth": 1240,
    "minSize": 16,
    "maxSize": 20,
    "name": "space-taxi",
  ));
}
```

