class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  static sanitize(string) {
    return string.split(' ').map(word => word.replace(/[^A-Za-z0-9-']+/g, '')).join(' ')
  }

  static titleize(string) {
    const protectedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    string = Formatter.capitalize(string)
    return string.split(' ').map(word => {
      if (protectedWords.includes(word)) {
        return word
      } else {
        return Formatter.capitalize(word)
      }
    }).join(' ')
  }
}