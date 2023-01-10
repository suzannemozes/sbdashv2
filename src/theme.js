//Andy Beashear primary: #064F90; dark-blue header: #033148; light-blue:#74B9E6 ; #045091, #036cdb--secondary: #6c757d; --indigo: #6610f2, --cyan: #17a2b8; #212529, --gray-dark: #343a40

export const tokensDark = {
  gray: {
    0: "#ffffff",
    10: "#f6f6f6",
    50: "#b9adb4",
    100: "#e2e3e5",
    200: "#c4c8cb",
    300: "#a7acb1",
    400: "#899197",
    500: "#6c757d",
    600: "#565e64",
    700: "#41464b",
    800: "#2b2f32",
    900: "#161719",
    1000: "#000000",
  },
  primary: {
    100: "#f8f9fa",
    200: "#b9adb4",
    300: "#74B9E6",
    400: "#036cdb",
    500: "#064F90",
    600: "#033148",
    700: "#045091",
    800: "#343a40",
    900: "#100a0d",
  },
  secondary: {
    50: "#f0f0f0",
    100: "#ffffff",
    200: "##17a2b8",
    300: "##6610f2",
    400: "##6610f2",
    500: "#4f3143",
    600: "#3f2736",
    700: "#2f1d28",
    800: "#20141b",
    900: "#100a0d",
  },
};

function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[200],
            },
            neutral: {
              ...tokensDark.gray,
              main: tokensDark.gray[500],
            },
            background: {
              default: tokensDark.primary[600],
              alt: tokensDark.primary[500],
            },
          }
        : {
            //light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.gray[50],
              light: tokensDark.gray[0],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
            },
            neutral: {
              ...tokensLight.gray,
              main: tokensDark.gray[500],
            },
            background: {
              default: tokensDark.gray[0],
              alt: tokensDark.gray[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
