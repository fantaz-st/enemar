const components = {
  MuiContainer: {
    defaultProps: {
      maxWidth: "lg",
    },
  },

  MuiButton: {
    defaultProps: {
      disableElevation: true,
      variant: "contained",
      color: "primary",
    },

    styleOverrides: {
      root: {
        borderRadius: 0,
        textTransform: "none",
        padding: "0.9rem 1.45rem",
        minWidth: "unset",
        boxShadow: "none",
        transition: "all 0.25s ease",
      },

      contained: {
        "&:hover": {
          boxShadow: "none",
          transform: "translateY(-1px)",
        },

        "&:active": {
          transform: "translateY(0)",
        },
      },

      outlined: {
        borderColor: "rgba(18, 59, 99, 0.18)",

        "&:hover": {
          borderColor: "#123b63",
          backgroundColor: "rgba(18, 59, 99, 0.04)",
        },
      },
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 0,
        backgroundColor: "rgba(255,255,255,0.86)",
        border: "1px solid rgba(22, 50, 74, 0.08)",
        boxShadow: "0 10px 32px rgba(16, 37, 58, 0.05)",
        backgroundImage: "none",
        backdropFilter: "blur(10px)",
      },
    },

    variants: [
      {
        props: { variant: "header" },
        style: {
          backgroundColor: "rgba(255,255,255,0.76)",
          border: "1px solid rgba(22, 50, 74, 0.08)",
          boxShadow: "0 10px 32px rgba(16, 37, 58, 0.05)",
          backdropFilter: "blur(14px)",
        },
      },
    ],
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 0,
        backgroundColor: "#ffffff",
        border: "1px solid rgba(22, 50, 74, 0.08)",
        boxShadow: "0 10px 30px rgba(16, 37, 58, 0.05)",
        backgroundImage: "none",
        transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
      },
    },

    variants: [
      {
        props: { variant: "projectCard" },
        style: {
          "&:hover": {
            transform: "translateY(-4px)",
            borderColor: "rgba(15, 124, 130, 0.2)",
            boxShadow: "0 18px 42px rgba(16, 37, 58, 0.08)",
          },
        },
      },
      {
        props: { variant: "flat" },
        style: {
          boxShadow: "none",
        },
      },
    ],
  },

  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: "rgba(244, 248, 248, 0.82)",
        color: "#16324a",
        boxShadow: "none",
        borderBottom: "1px solid rgba(22, 50, 74, 0.08)",
        backdropFilter: "blur(10px)",
      },
    },
  },

  MuiToolbar: {
    styleOverrides: {
      root: {
        minHeight: 72,
      },
    },
  },

  MuiLink: {
    styleOverrides: {
      root: {
        color: "inherit",
        textDecoration: "none",
        textUnderlineOffset: "0.18em",
        transition: "color 0.2s ease",

        "&:hover": {
          color: "#0f7c82",
          textDecoration: "underline",
        },
      },
    },
  },

  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: "rgba(22, 50, 74, 0.1)",
      },
    },
  },
};

export default components;
