export const getRealPathname = () => {
  const pathname = window.location.pathname;
  const realPathname = pathname.includes("portfolio") ? pathname.replace("/portfolio/", "") : pathname.replace(/\//g, "");
  return realPathname;
}

export const getRealRoute = () => {
  return window.location.pathname.replace(/\//g, "");
}