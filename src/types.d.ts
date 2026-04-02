/// <reference types="fhir" />
/// <reference types="webpack-env" />

declare namespace fhir {
  // Add any specific extensions if needed, but the reference above should cover it if it works
}

interface Require {
  context: (
    directory: string,
    useSubdirectories?: boolean,
    regExp?: RegExp,
    mode?: 'sync' | 'eager' | 'weak' | 'lazy' | 'lazy-once',
  ) => any;
}
