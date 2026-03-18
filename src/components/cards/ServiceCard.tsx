import React from "react";
import { Box, Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { MdOutlineCheckCircle } from "react-icons/md";

interface ServiceCardProps {
  title: string;
  description: string;
  features?: string[];
  icon: React.ElementType;
}

const ServiceCard = ({ title, description, features, icon }: ServiceCardProps) => {
  return (
    <Box bgColor={"#1E293B40"} borderRadius={16} p={[5, null, 6, 7, 8]} border={"1px solid #1E293B"}>
      <Stack gap={[4, null, 5, 6]}>
        <Flex bgColor={"#F1F5F910"} borderRadius={12} px={[2, null, 3]} py={[2.5, null, 3, 4]} w={"max-content"}>
          <Icon as={icon} boxSize={6} color={"#F1F5F9"} />
        </Flex>
        <Text fontSize={[16, null, 18, 20]} fontWeight={"bold"} color={"#F1F5F9"}>
          {title}
        </Text>
        <Text fontSize={[12, null, 13, 14]} color={"#94A3B8"}>
          {description}
        </Text>
        {features && (
          <Stack>
            {features.map((feature, index) => (
              <HStack key={index}>
                <Icon as={MdOutlineCheckCircle} color={"#22C55E"} />
                <Text fontSize={[12, null, 13, 14]} fontWeight={"medium"} color={"#F1F5F9"}>
                  {feature}
                </Text>
              </HStack>
            ))}
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default ServiceCard;
