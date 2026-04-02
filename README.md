# @openmrs/esm-patient-growth-chart

## Description

The Growth Chart is designed for the OpenMRS 3.x Patient Chart. Its primary purpose is to allow clinicians to visualize pediatric growth trends (Weight-for-Age, Height-for-Age) against standardized normative curves (WHO & CDC) to identify malnutrition or growth abnormalities early.

## Scope

**Phase 1**

- **Project Initialization**: Scaffolding the app and registering it within the O3 shell.
- **Data Integration**: Fetching Patient Demographics (DOB) and Clinical Observations (Weight, Height).
- **Logic Layer**: Integrating official WHO datasets and implementing Z-score calculation logic.
- **Visualization**: Developing both a Longitudinal Table View and an Interactive Graph View.
- **Quality Assurance**: Implementing E2E testing for the core flows.

- **WHO Dataset**
  1.Integrated the data set for girls and boys of weight to age who standards. (Birth-5 years).
  2.Converted original WHO .xlsx data to JSON format.
  3.JSON includes L, M, S parameters for Z-score calculation and P-values for graphing.
  4.Link to the WHO data - https://www.who.int/tools/child-growth-standards/standards/weight-for-age

- **Weight for Age Chart**
  1.Weight for Age chart is displayed for patients under 5 years of age.
  2.If the patient is older than 5 years it will shows and empty state.

- **E2E Testing**
  1.Tested the "Growth Chart Unavailable" view for patients older than 5 years.
  2.Tested the "Growth Chart Visibility" dashboard for patients younger than 5 years using a dynamic birthdate payload.
  3.Tests are deterministic and do not depend on fixed dates.

- **Unit Testing**
  1.Testing utility functions (`growth-chart.utils.ts`) that process and format patient weights.

## Quick start

\`\`\`bash
yarn install
yarn start
\`\`\`

Once started, your module will be available at:
**http://localhost:8080/openmrs/spa/**

## What's included

- ✅ OpenMRS 3.0 microfrontend setup
- ✅ Carbon Design System integration
- ✅ Internationalization (i18n) ready
- ✅ TypeScript configuration
- ✅ Jest testing setup
- ✅ ESLint + Prettier

## Learn more

### OpenMRS O3 resources

- [Getting Started](https://o3-docs.openmrs.org/docs/getting-started) - Start here for O3 development
- [Creating a Frontend Module](https://o3-docs.openmrs.org/docs/frontend-modules/creating-a-frontend-module) - Step-by-step guide
- [Framework Concepts](https://o3-docs.openmrs.org/docs/framework-concepts) - Core O3 patterns

### Development guide

- [Extension System](https://o3-docs.openmrs.org/docs/extension-system) - Adding widgets and extensions
- [State Management](https://o3-docs.openmrs.org/docs/state-management) - Managing app state
- [Carbon and Styling](https://o3-docs.openmrs.org/docs/carbon-and-styling) - UI components and styling
- [Testing](https://o3-docs.openmrs.org/docs/testing) - Testing your module

### Community

- [OpenMRS Talk](https://talk.openmrs.org/) - Community forum for questions
- [OpenMRS Wiki](https://wiki.openmrs.org/display/RES/OpenMRS+3.x+Dev+Forum) - Join the developer community

## Common tasks

### Adding new routes

See the [Routing Guide](https://o3-docs.openmrs.org/docs/frontend-modules/routing) for details.

### Development commands

\`\`\`bash

# Start development server

yarn start

# Build for production

yarn build

# Run tests

yarn test

# Watch tests

yarn test:watch

# Extract translations

yarn extract-translations

# Type checking

yarn typescript

# Linting

yarn lint

# Format code

yarn prettier
\`\`\`

## Installation

\`\`\`bash
yarn add @openmrs/esm-patient-growth-chart
\`\`\`

## Usage

[Add usage instructions here]

## Building

\`\`\`bash
yarn build
\`\`\`

## Testing

\`\`\`bash
yarn test
\`\`\`

## Troubleshooting

### `openmrs develop` crashes with `Cannot read properties of undefined (reading 'devServer')`

Ensure your build config exports the default OpenMRS config:

For rspack (default):
\`\`\`js
const config = require('@openmrs/rspack-config');

module.exports = config.default ?? config;
\`\`\`

For webpack:
\`\`\`js
const config = require('@openmrs/webpack-config');

module.exports = config.default ?? config;
\`\`\`

### Yarn peer dependency warnings (dayjs, i18next, single-spa, swr, react-is, sass)

If you see missing peer dependency warnings, add the missing deps and align `react-i18next` to `11.x` in your `package.json`, then re-run `yarn install`.
