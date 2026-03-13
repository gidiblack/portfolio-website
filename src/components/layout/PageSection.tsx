import React from "react";
import { Box } from "@chakra-ui/react";

const PageSection = ({ children, ...props }: { children: React.ReactNode } & React.ComponentProps<typeof Box>) => {
  return (
    <Box py={["3rem", null, "4rem", "5rem", "6rem"]} px={[5, null, 6, 8, 10]} maxW={"100rem"} {...props}>
      {children}
    </Box>
  );
};

export default PageSection;
