import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
  }
}