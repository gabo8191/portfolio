/**
 * Utility functions for handling public asset paths
 * This ensures paths work correctly in both development and GitHub Pages deployment
 */

/**
 * Get the correct path for a public asset
 * @param path - The path relative to the public directory (e.g., '/images/profile/avatar.jpg')
 * @returns The correct path for the current environment
 */
export const getPublicAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Use BASE_URL from Vite config for correct paths in both dev and production
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${cleanPath}`;
};

/**
 * Get the correct path for a CV file
 * @param filename - The CV filename (e.g., 'Gabriel_Castillo_CV_EN.pdf')
 * @returns The correct path for the CV file
 */
export const getCVPath = (filename: string): string => {
  return getPublicAssetPath(`cv/${filename}`);
};

/**
 * Get the correct path for an image
 * @param imagePath - The image path relative to images folder (e.g., 'profile/avatar.jpg')
 * @returns The correct path for the image
 */
export const getImagePath = (imagePath: string): string => {
  return getPublicAssetPath(`images/${imagePath}`);
};
