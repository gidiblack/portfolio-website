import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    fontWeight: "semibold",
    borderRadius: "8px",
    transition: "all 0.2s",
    cursor: "pointer",
    _hover: { transform: "scale(1.05)" },
  },
  variants: {
    variant: {
      primary: {
        bg: "#DE9E2C",
        color: "#1F2937",
        _hover: { bg: "#DE9E2C", opacity: 0.9 },
      },
      secondary: {
        bg: "#1E293B",
        color: "#F1F5F9",
        _hover: { bg: "#1E293B", opacity: 0.9 },
      },
      white: {
        bg: "#F1F5F9",
        color: "#1F2937",
        _hover: { bg: "#F1F5F9", opacity: 0.9 },
      },
      outline: {
        bg: "#16191C",
        border: "1px solid #334155",
        color: "#F1F5F9",
        _hover: { bg: "#16191C", opacity: 0.9 },
      },
    },
    size: {
      sm: {
        fontSize: "12px",
        paddingX: 6,
        paddingY: 2,
        fontWeight: "medium",
      },
      md: {
        fontSize: "14px",
        paddingX: 8,
        paddingY: 3,
        borderRadius: "10px",
      },
      lg: {
        fontSize: "16px",
        paddingX: 10,
        paddingY: 4,
        fontWeight: "bold",
        borderRadius: "12px",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
