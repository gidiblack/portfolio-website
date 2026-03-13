"use client";

import { chakra } from "@chakra-ui/react";
import { buttonRecipe } from "@/components/recipes/button.recipe";

const Button = chakra("button", buttonRecipe);

export default Button;

// import { chakra, useRecipe, RecipeVariantProps } from "@chakra-ui/react";
// import { buttonRecipe } from "@/components/recipes/button.recipe";

// type ButtonVariantProps = RecipeVariantProps<typeof buttonRecipe>;

// interface ButtonProps extends React.PropsWithChildren<ButtonVariantProps> {}

// const Button = (props: ButtonProps) => {
//   const recipe = useRecipe({ recipe: buttonRecipe });
//   const [recipeProps, restProps] = recipe.splitVariantProps(props);
//   const styles = recipe(recipeProps);

//   return <chakra.button css={styles} {...restProps} />;
// };

// export default Button;
