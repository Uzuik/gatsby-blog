import type { GatsbyConfig } from "gatsby";
import path from 'path';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: path.resolve('blog'),
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp"
  ],
}

export default config
