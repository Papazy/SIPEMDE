type RowObj = {
  name: string;
  tech: string[];
  date: string;
  title: string,
  progress: string;
};

const tableDataComplex: RowObj[] = [
  {
    name: 'Andi Zamhuri',
    tech: ['apple', 'android', 'windows'],
    date: '21:51 WIB, 12 Jan 2023',
    title: 'Jalanan berlubang',
    progress: "Jalanan berlubang, banyak pengendara yang jatuh ke kubangan, lokasi di tanjung selamat",
  },
  {
    name: 'Al Chuzari',
    tech: ['apple'],
    date: '21:40 WIB, 12 Jan 2023',
    title: 'Sampah',
    progress: "Sampah betumpuk disekitar tanjung selamat, baunya menyebar ke segala arah :(",
  },
  {
    name: 'Ismunandar',
    tech: ['apple', 'windows'],
    date: '19:30 WIB, 12 Jan 2023',
    title: 'Jalanan Macet',
    progress: "Selalu macet di simpang tanjung selamat, harusnya ada polisi yang jagain"
  },

];
export default tableDataComplex;
