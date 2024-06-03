const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "prod-files-secure.s3.us-west-2.amazonaws.com",
      "res.cloudinary.com",
    ],
  },
  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: "node_modules/leaflet/dist/images",
            to: path.resolve(__dirname, "public", "leaflet", "images"),
          },
        ],
      })
    );
    return config;
  },
};
