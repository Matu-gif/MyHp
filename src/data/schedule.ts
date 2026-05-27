export const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'] as const;
export const SLOTS = ['MORN', 'MID', 'AFT', 'EVE', 'NIGHT'] as const;

// 0 = off, 1 = core (solid blue), 2 = focus (soft blue), 3 = flex (yellow stripe)
export const GRID: number[][] = [
  //MON TUE WED THU FRI SAT SUN
  [  0,   0,   0,   0,   0,   3,   3], // MORN
  [  1,   1,   1,   1,   1,   2,   3], // MID
  [  1,   1,   1,   1,   1,   2,   2], // AFT
  [  2,   2,   2,   2,   2,   1,   2], // EVE
  [  1,   1,   1,   1,   1,   2,   0], // NIGHT
];
