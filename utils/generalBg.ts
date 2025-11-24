export function getSeason() {
    const now = new Date();
    const year = now.getFullYear();

    // Définition approximative des saisons (hémisphère nord)
    const springStart = new Date(year, 2, 20);   // 20 mars
    const summerStart = new Date(year, 5, 21);   // 21 juin
    const fallStart   = new Date(year, 8, 22);   // 22 septembre
    const winterStart = new Date(year, 10, 21);  // 21 décembre

    if (now >= springStart && now < summerStart) return "spring";
    if (now >= summerStart && now < fallStart)   return "summer";
    if (now >= fallStart   && now < winterStart) return "autumn";
    return "winter";
}