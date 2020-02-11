export const getRealPathname = () => {
  const pathname = window.location.hash;
  const realPathname = pathname.includes("portfolio") ? pathname.replace("/portfolio/", "") : pathname.replace("#/", "");
  return realPathname;
}

export const getRealRoute = () => {
  return window.location.pathname.replace(/\//g, "");
}

export const getImagePath = () => {
  const pathname = window.location.pathname.replace(/\//g, "");;
  const imagesPath = pathname === "portfolio" ? '/portfolio/images' : '/images';
  return imagesPath;
}
