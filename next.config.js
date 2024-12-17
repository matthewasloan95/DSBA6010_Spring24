/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/DSBA6010_Spring24',  // Add this line
    images: {
      unoptimized: true,
    },
}
  
module.exports = nextConfig