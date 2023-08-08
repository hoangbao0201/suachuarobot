// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: [
//       "res.cloudinary.com"
//     ]
//   }
// }

// module.exports = nextConfig

const removeImports = require("next-remove-imports");

module.exports = removeImports()({
    // ✅  options...
    webpack: function (config) {
        config.module.rules.push({
            test: /\.md$/,
            use: "raw-loader",
        });
        return config;
    },
    images: {
      domains: [
        "res.cloudinary.com"
      ]
    }
});
