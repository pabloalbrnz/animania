function capitalize(str: string): string {
  if (str.length === 0) {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function capitalizeAll(str: string): string {
  if (str.length === 0) {
    return str;
  }

  const words = str.split(" ");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return capitalizedWords.join(" ");
}

function ellipsis(str: string, length: number): string {
  if (str.length <= length) {
    return str;
  } else {
    return str.slice(0, length - 3) + "...";
  }
}

export const StringFunctions = {
  capitalize,
  capitalizeAll,
  ellipsis,
};
