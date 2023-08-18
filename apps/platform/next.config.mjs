/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-check



/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
// eslint-disable-next-line turbo/no-undeclared-env-vars
// !process.env.SKIP_ENV_VALIDATION && (await import('./src/env/server.mjs'))

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  transpilePackages: [
    '@hubx/cms',
  ],


  images: {
    domains: [
      'cdn.sanity.io',
    ],
  },

  
}

export default config