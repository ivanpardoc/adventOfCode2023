const input = [
  "..............#..........................#.....................#.....#...................#..................................#...............",
  ".............................#.........................................................................................#..........#.........",
  "#......................#.................................................#.....................#...........#................................",
  "......#..............................#........................................#.............................................................",
  "................................#...........#.........#.............................................................#.....#..........#......",
  "..................#...................................................#...................#.................................................",
  "............................#...............................................................................................................",
  "........#.....#...............................................................................#...............#.............................",
  "#...................................#.....#.........................................#.....................................................#.",
  "..........................................................................#........................#..............#........#........#.......",
  ".....#.....#.............#.......................#..........................................................................................",
  "..............................#.............................#....................#......#...................................................",
  "............................................................................................................................................",
  ".......................................#....................................#........................................#......................",
  ".......#................................................#..............#............................#.......................................",
  "................#.................................................#.........................................#...............................",
  ".....................#.........................#.....................................#......................................................",
  "...............................................................................................#..................................#.........",
  ".#......................................................................................................................#...................",
  "........#...................................................................................................................................",
  "...............................#...........#.............#...............................#...........#...................................#..",
  ".............#.....#.............................................#.....#......................................#.............................",
  "............................................................................................................................................",
  ".......................#...........#.................#..............................#....................................#..................",
  "...............................................................................#.....................................................#......",
  "..#......#.............................#............................#..................................#........................#...........",
  ".............................#..........................#......#...........#................................................................",
  "....................#.........................#..................................................#..........................................",
  "......#............................................................................................................#........................",
  "...........................................................................................................#................#...............",
  "#..............#...................#.............................................#........................................................#.",
  ".........................................#.........................................................#........................................",
  ".....................#............................................#.....................#...................................................",
  ".................................................#......#...................................................................................",
  ".........................................................................................................#..............#.......#...........",
  "...............................#..................................................................................#...................#.....",
  "..........................#.........................#...........#..............#..........#..................#..............................",
  "..........................................#.............................#...................................................................",
  "............#......#................................................................................#.......................................",
  "................................................................................................................#.....#....................#",
  "...#.........................#................#...............................................................................#.............",
  "......................#..................................#.............................#...................#................................",
  ".......................................................................#.....#.................#............................................",
  ".......#..................#.........................#....................................................................................#..",
  "..........................................................................................#....................#............................",
  "........................................#........................#.....................................................#....................",
  "...................#.....................................................#.......#.............................................#............",
  "..............................#.................#...........................................................................................",
  "..#..................................................#......#................#.............................................#.........#.....#",
  "...........#..................................................................................#.....................#.......................",
  ".....................................................................................................#...........................#..........",
  "................#......................#........................................................................#...........................",
  "............................................................................................................................................",
  ".......#..............#............#............................#......#................#.....................................#.............",
  "............................................#........#.........................................#............................................",
  "..............................#..............................................................................#.......................#......",
  "............................................................................................................................................",
  "....................#............................................................#..............................................#...........",
  "......................................#..............................................................#...................................#..",
  "..........#.....................#.......................................#..............#....................................................",
  "............................................................................................................................................",
  "....#.....................#..................#......#.......#.................#...........................................#.................",
  "....................................#.........................................................#....................#.............#..........",
  "....................................................................................................#.......................................",
  ".................................................................#........................................#.................................",
  "..................#...................................................................................................#.....................",
  ".........................................................................#......................#...........................................",
  "#......................................................#...........................#............................#.........#.................",
  "...........................#............#..........................................................................................#........",
  "..................................................................#......................#..................................................",
  "................#................................#...........................#..............................................................",
  "........#.....................................................................................................................#.............",
  "...................................#........................................................................................................",
  ".......................#.....#................................................................................#.............................",
  ".#...........#...........................................#.................#....................#...........................................",
  "..........................................................................................#............#................#...................",
  "..........................#..........#......................................................................................................",
  ".....#...............................................................................#.....................#.....................#..........",
  "............................................................................................................................................",
  "..........#............#................................#.....................#..................................#..........................",
  "...............#...................#.........................#....................................#..................................#......",
  "............................................................................................................................................",
  "...........................................................................................................................................#",
  "...#.....................................................................................................#..................................",
  "......................#.............................#..........................#..............................#.............................",
  "..........................................#...................#..........#..........................#...............#.......................",
  "..............................#.....................................................................................................#.......",
  ".........................................................#................................#.................................................",
  "...............................................#............................................................................................",
  "..........#...........................#..............#..........................#.........................#...................#.............",
  "#.....................................................................................#.....................................................",
  ".....#............................................................#..........................#.................#............................",
  "...........................#.......#..............#.................................................................#.......................",
  ".......................................................................................................#....................................",
  "........#..........#.....................#..................#......................#......................................#...............#.",
  ".............#.........................................................#....................................................................",
  "................................................................#...........................................................................",
  ".....#.................#.................................................................#......................#.....#..........#..........",
  "................................#......#.............#.........................................#.....#......................................",
  "...........................................................................#.........................................................#......",
  "..........#................#................................................................................................................",
  ".................................................#..............................#..........................................#................",
  ".....................................................................................#.................#.........#..........................",
  ".......................................................................#....................................#............................#..",
  "...............#......#....................................#................................................................................",
  ".........#...............................#..........#..........................................................................#............",
  "...............................................................#.................#.........#.....#......................#...................",
  "............................#.....#.........................................................................................................",
  "......#..........................................#.......#...........................................................................#......",
  "..............#...................................................#........................................#......#.........................",
  ".............................................................................#..............................................................",
  ".....................................#................................#................................................#....................",
  "..........#..................#..............................#.............................#.................................................",
  "....#.....................................................................#......#............................................#.............",
  "......................#.................................#..............................................#....................................",
  ".............#..............................................................................................................................",
  "..........................................#......#...............................................#..........#...............................",
  ".........................#......#.......................................................#...............................................#...",
  "...........................................................#.................................#...................#..........................",
  "...#...............#..................#..............#....................#...........................................#.....................",
  ".....................................................................#...........#..........................................#......#........",
  "..............................#...............#.................................................#......#....................................",
  "........#.....#.............................................................................................................................",
  "#........................................................#.............................#.......................................#.......#....",
  "....................#..................................................#....................................................................",
  "..........................................#......................#..........................................................................",
  ".........................#...........................#.............................................#............#.........#.................",
  ".....................................................................................................................#..............#.......",
  "..........#...................................#............................................................#..................#.............",
  ".....#..........#...................#........................................#..............................................................",
  ".....................................................................#.........................#.......#....................................",
  "......................#......#..............................................................................................................",
  ".#......#...................................................................................................................................",
  ".................................#....................................................#...........#......................#...............#..",
  ".................#..................................#.........#.........#...........................................................#.......",
  "..............................................#..................................#..........................................................",
  "...........................#..........................................................................#.........#...........................",
  "..........................................#.................................................................................................",
  ".....................................#...........#..................#.........................................................#.............",
  "..................#....................................#.............................#...........#........#.............#...................",
];
const example = [
  "...#......",
  ".......#..",
  "#.........",
  "..........",
  "......#...",
  ".#........",
  ".........#",
  "..........",
  ".......#..",
  "#...#.....",
];

export { example, input }