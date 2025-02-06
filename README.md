<h1>Utopia Utils</h1>
<small><strong>by Moritz</strong></small>
<p>Just a little scss helper for dynamic sizes and spacings.</p>
<p>Built on the beautiful plugin <a href="https://github.com/trys/utopia-core-scss.git" target="_blank">utopia-core-scss</a> wich is the Calculation behind <a href="https://utopia.fyi" target="_blank">Utopia.fyi</a></p>
<p>Ships just little specifications to give each clamp in a map a name.</p>

<h3>You can install dependencies via</h3>
`npm install`

<h3>and get yourself a css output via</h3>
`npm run build`

<h2>This helper ships two methods you can use to get some cool dynamic clamps in css variables.</h2>
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

  // generateClamps does nearly the same
  // These Clamps are accessible via css variable in the :root of the project.
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

