function importAll(r) {
  return r.keys().map(r);
}

export const pfSet5 = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));