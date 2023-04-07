/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig
module.exports = {
  nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "deadline.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.reuters.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s.yimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.cnn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blog.tipranks.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "a1.espncdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.foxnews.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "stsci-opo.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "image.cnbcfm.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "nypost.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.vox-cdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.instyle.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
