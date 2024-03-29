// export const youtube =
//   /^((https|http)\:\/\/)*(www\.)*(youtube\.com|youtu\.be)\/(watch\?v=)*(.+)$/;
// export const youtubeNonHttps = /^((www\.)*(youtube\.com|youtu\.be)(\/.*)*)$/;
export const youtube =
  /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=))([\w\-]{10,12})\b/;
export const telephone = /^((?:0|\+84)\d{9})$/;
export const telephoneNoPlus = /^((84)\d{9})$/;
export const email = /^(([a-z0-9-_\.]{3,})@([a-z-_0-9\.]+\.[a-z]{2,}))$/;
export const linkWebHttps =
  /^(((http|https):\/\/)+[a-zA-Z0-9-_\.]+\.[a-z]{2,}[a-zA-Z0-9-_\.\/\?\=&]*)$/;
export const linkWebNonHttps =
  /^([a-zA-Z0-9-_\.]+\.[a-z]{2,}[a-zA-Z0-9-_\.\/\?\=&]*)$/;
