import React, { useState } from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import PageSection from "@/components/layout/PageSection";
import {
  Box,
  SimpleGrid,
  Stack,
  Text,
  HStack,
  Flex,
  Image,
  Icon,
  Input,
  Field,
  NativeSelect,
  Textarea,
} from "@chakra-ui/react";
import Button from "@/components/ui/button";
import HeroSnippet from "@/assets/stack-snippet.png";
import { BiDownload } from "react-icons/bi";
import { GoCodeSquare } from "react-icons/go";
import { IoMdAnalytics } from "react-icons/io";
import { LuShieldCheck } from "react-icons/lu";
import ServiceCard from "@/components/cards/ServiceCard";

// Form validation utilities
const validateUrl = (url: string): boolean => {
  if (!url) return true; // Optional field
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const capabilities = [
  {
    title: "Frontend Engineering Expertise",
    description: "Crafting pixel-perfect, responsive interfaces with React, Next.js, and modern frontend tools.",
    icon: GoCodeSquare,
  },
  {
    title: "Business-Driven Development",
    description: "Aligning technical solutions with your business goals to drive growth and success.",
    icon: IoMdAnalytics,
  },
  {
    title: "Proven Reliability",
    description: "Delivering high-quality, maintainable code that stands the test of time and scales with your needs.",
    icon: LuShieldCheck,
  },
];

const HireMePage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    website: "",
    location: "",
    projectType: "",
    projectStatus: "",
    budget: "",
    timeline: "",
    targetAudience: "",
    details: "",
  });

  // Error state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Project type is required";
    }

    if (!formData.projectStatus) {
      newErrors.projectStatus = "Project status is required";
    }

    if (!formData.budget.trim()) {
      newErrors.budget = "Budget is required";
    }

    if (!formData.timeline.trim()) {
      newErrors.timeline = "Timeline is required";
    }

    if (!formData.targetAudience.trim()) {
      newErrors.targetAudience = "Target audience is required";
    }

    if (formData.website && !validateUrl(formData.website)) {
      newErrors.website = "Please enter a valid URL";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit: React.ComponentProps<"form">["onSubmit"] = async (e) => {
    if (!e) return;
    e.preventDefault();

    if (!validateForm()) {
      console.error("Form validation failed:", errors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Log form data to console
      const submissionData = {
        name: formData.name,
        website: formData.website || "Not provided",
        location: formData.location,
        projectType: formData.projectType,
        projectStatus: formData.projectStatus,
        budget: formData.budget,
        timeline: formData.timeline,
        targetAudience: formData.targetAudience,
        details: formData.details,
        timestamp: new Date().toISOString(),
      };

      console.log("✅ Form submitted successfully:", submissionData);

      // Reset form after successful submission
      setFormData({
        name: "",
        website: "",
        location: "",
        projectType: "",
        projectStatus: "",
        budget: "",
        timeline: "",
        targetAudience: "",
        details: "",
      });
      setErrors({});

      // Here you would typically send the data to your backend
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(submissionData) })
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      setErrors({
        submit: "Failed to submit form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <PageWrapper
      title={"Hire Me"}
      description={
        "Looking to hire a skilled software engineer? Explore my portfolio and let's discuss how I can contribute to your project."
      }>
      {/* Hero Section */}
      <PageSection mt={[8, null, 10, 12]}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={[4, null, 5, 6, 8]} alignItems={"center"}>
          <Stack gap={[3, null, 4]}>
            <Box
              fontSize={[10, null, 12]}
              fontWeight={"bold"}
              color={"#CBD5E1"}
              bgColor={"#F1F5F910"}
              px={[2, null, 2.5, 3]}
              py={1}
              borderRadius={"full"}
              w={"fit-content"}
              border={"1px solid #334155"}>
              AVAILABLE FOR NEW PROJECTS
            </Box>
            <Text
              fontSize={[56, null, 60, 64, 72]}
              fontWeight={"black"}
              color={"#F1F5F9"}
              lineHeight={["56px", null, "60px", "64px", "72px"]}>
              I build{" "}
              <Text as={"span"} bgGradient={"linear-gradient(0deg, #94A3B8, #F1F5F9)"} bgClip="text">
                scalable web solutions
              </Text>{" "}
              that drive business growth
            </Text>
            <Text fontSize={[15, null, 16, 18]} color={"#94A3B8"}>
              I bridge the gap between complex engineering and business goals. Let's turn your vision into a
              high-performing digital reality with reliable, future-proof code.
            </Text>
            <HStack gap={[3, null, 4]} pt={[4, null, 6, 7, 8, 10]}>
              <Button variant={"secondary"} size={["sm", null, "md", "lg"]}>
                <Icon as={BiDownload} boxSize={5} color={"#F1F5F9"} mr={2} />
                Download Resume
              </Button>
              <Button variant={"outline"} size={["sm", null, "md", "lg"]}>
                View Projects
              </Button>
            </HStack>
          </Stack>
          <Flex flexDir={"column"} h={"full"} justifyContent={"center"} alignItems={"center"}>
            <Image
              src={HeroSnippet.src}
              w={"full"}
              h={["20rem", null, "21.5rem", "22.5rem", "24rem"]}
              alt={"code snippet with tech stacks and role"}
            />
          </Flex>
        </SimpleGrid>
      </PageSection>
      {/* Capabilities Section */}
      <PageSection bgColor={"#0F172A50"}>
        <Text
          fontSize={[12, null, 13, 14]}
          fontWeight={"bold"}
          letterSpacing={"1.4px"}
          color={"#3B82F6"}
          mb={[2.5, null, 3, 4]}>
          CAPABILITIES
        </Text>
        <Text fontSize={[28, null, 32, 36]} fontWeight={"black"} color={"#F1F5F9"}>
          Engineering Excellence x Business Strategy
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={[5, null, 6, 8]} mt={[10, null, 12, 14, 16]}>
          {capabilities.map((capability, index) => (
            <ServiceCard
              key={index}
              title={capability.title}
              description={capability.description}
              icon={capability.icon}
            />
          ))}
        </SimpleGrid>
      </PageSection>

      {/* Contact Section */}
      <PageSection>
        <Stack gap={[6, null, 8]}>
          <Text fontSize={[32, null, 36, 40, 44]} fontWeight={"black"} color={"#F1F5F9"} textAlign={"center"}>
            Start a Conversation
          </Text>

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <Box bgColor="#0F172A" p={10} borderRadius="16px" w="full">
              <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
                {/* Name Field */}
                <Field.Root invalid={!!errors.name} required>
                  <Field.Label color="#F1F5F9" fontWeight="600">
                    Name *
                  </Field.Label>
                  <Input
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    bgColor="#1E293B"
                    borderColor="#334155"
                    placeholder-color="#6B7280"
                    color="#F1F5F9"
                    _placeholder={{ color: "#6B7280" }}
                    _focus={{
                      bgColor: "#1E293B",
                      borderColor: "#94A3B8",
                      boxShadow: "0 0 0 1px #94A3B8",
                    }}
                    _hover={{
                      borderColor: "#475569",
                    }}
                  />
                  <Field.ErrorText color="#EF4444">{errors.name}</Field.ErrorText>
                </Field.Root>

                {/* Website Field (Optional) */}
                <Field.Root invalid={!!errors.website}>
                  <Field.Label color="#F1F5F9" fontWeight="600">
                    Website{" "}
                    <Text as="span" color="#6B7280" fontSize="sm">
                      (optional)
                    </Text>
                  </Field.Label>
                  <Input
                    name="website"
                    placeholder="https://yourwebsite.com"
                    value={formData.website}
                    onChange={handleChange}
                    bgColor="#1E293B"
                    borderColor="#334155"
                    color="#F1F5F9"
                    _placeholder={{ color: "#6B7280" }}
                    _focus={{
                      bgColor: "#1E293B",
                      borderColor: "#94A3B8",
                      boxShadow: "0 0 0 1px #94A3B8",
                    }}
                    _hover={{
                      borderColor: "#475569",
                    }}
                  />
                  <Field.ErrorText color="#EF4444">{errors.website}</Field.ErrorText>
                </Field.Root>

                {/* Location Field */}
                <Field.Root invalid={!!errors.location} required>
                  <Field.Label color="#F1F5F9" fontWeight="600">
                    Location *
                  </Field.Label>
                  <Input
                    name="location"
                    placeholder="City, Country"
                    value={formData.location}
                    onChange={handleChange}
                    bgColor="#1E293B"
                    borderColor="#334155"
                    color="#F1F5F9"
                    _placeholder={{ color: "#6B7280" }}
                    _focus={{
                      bgColor: "#1E293B",
                      borderColor: "#94A3B8",
                      boxShadow: "0 0 0 1px #94A3B8",
                    }}
                    _hover={{
                      borderColor: "#475569",
                    }}
                  />
                  <Field.ErrorText color="#EF4444">{errors.location}</Field.ErrorText>
                </Field.Root>

                {/* Project Type Field */}
                <Field.Root invalid={!!errors.projectType} required>
                  <Field.Label color="#F1F5F9" fontWeight="600">
                    Project Type *
                  </Field.Label>
                  <NativeSelect.Root>
                    <NativeSelect.Field
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      bgColor="#1E293B"
                      borderColor="#334155"
                      color="#F1F5F9"
                      _focus={{
                        bgColor: "#1E293B",
                        borderColor: "#94A3B8",
                        boxShadow: "0 0 0 1px #94A3B8",
                      }}
                      _hover={{
                        borderColor: "#475569",
                      }}>
                      <option value="" style={{ color: "#6B7280" }}>
                        Select a project type
                      </option>
                      <option value="UI/UX design" style={{ color: "#F1F5F9" }}>
                        UI/UX Design
                      </option>
                      <option value="website development" style={{ color: "#F1F5F9" }}>
                        Website Development
                      </option>
                      <option value="mobile app development" style={{ color: "#F1F5F9" }}>
                        Mobile App Development
                      </option>
                    </NativeSelect.Field>
                    <NativeSelect.Indicator color="#94A3B8" />
                  </NativeSelect.Root>
                  <Field.ErrorText color="#EF4444">{errors.projectType}</Field.ErrorText>
                </Field.Root>
                {/* New / Existing Field */}
                <Field.Root invalid={!!errors.projectStatus} required>
                  <Field.Label color="#F1F5F9" fontWeight="600">
                    New / Existing *
                  </Field.Label>
                  <NativeSelect.Root>
                    <NativeSelect.Field
                      name="projectStatus"
                      value={formData.projectStatus}
                      onChange={handleChange}
                      bgColor="#1E293B"
                      borderColor="#334155"
                      color="#F1F5F9"
                      _focus={{
                        bgColor: "#1E293B",
                        borderColor: "#94A3B8",
                        boxShadow: "0 0 0 1px #94A3B8",
                      }}
                      _hover={{
                        borderColor: "#475569",
                      }}>
                      <option value="" style={{ color: "#6B7280" }}>
                        Select one
                      </option>
                      <option value="New Project" style={{ color: "#F1F5F9" }}>
                        New Project
                      </option>
                      <option value="Existing Project" style={{ color: "#F1F5F9" }}>
                        Existing Project
                      </option>
                    </NativeSelect.Field>
                    <NativeSelect.Indicator color="#94A3B8" />
                  </NativeSelect.Root>
                  <Field.ErrorText color="#EF4444">{errors.projectStatus}</Field.ErrorText>
                </Field.Root>

                {/* Budget Field */}
                <Field.Root invalid={!!errors.budget} required>
                  <Field.Label color="#F1F5F9" fontWeight="600">
                    Budget *
                  </Field.Label>
                  <Input
                    name="budget"
                    placeholder="e.g., $5,000 - $10,000"
                    value={formData.budget}
                    onChange={handleChange}
                    bgColor="#1E293B"
                    borderColor="#334155"
                    color="#F1F5F9"
                    _placeholder={{ color: "#6B7280" }}
                    _focus={{
                      bgColor: "#1E293B",
                      borderColor: "#94A3B8",
                      boxShadow: "0 0 0 1px #94A3B8",
                    }}
                    _hover={{
                      borderColor: "#475569",
                    }}
                  />
                  <Field.ErrorText color="#EF4444">{errors.budget}</Field.ErrorText>
                </Field.Root>

                {/* Timeline Field */}
                <Field.Root invalid={!!errors.timeline} required>
                  <Field.Label color="#F1F5F9" fontWeight="600">
                    Timeline *
                  </Field.Label>
                  <Input
                    name="timeline"
                    placeholder="e.g., 3 months"
                    value={formData.timeline}
                    onChange={handleChange}
                    bgColor="#1E293B"
                    borderColor="#334155"
                    color="#F1F5F9"
                    _placeholder={{ color: "#6B7280" }}
                    _focus={{
                      bgColor: "#1E293B",
                      borderColor: "#94A3B8",
                      boxShadow: "0 0 0 1px #94A3B8",
                    }}
                    _hover={{
                      borderColor: "#475569",
                    }}
                  />
                  <Field.ErrorText color="#EF4444">{errors.timeline}</Field.ErrorText>
                </Field.Root>

                {/* Target Audience Field */}
                <Field.Root invalid={!!errors.targetAudience} required>
                  <Field.Label color="#F1F5F9" fontWeight="600">
                    Target Audience *
                  </Field.Label>
                  <Input
                    name="targetAudience"
                    placeholder="Who is your target audience?"
                    value={formData.targetAudience}
                    onChange={handleChange}
                    bgColor="#1E293B"
                    borderColor="#334155"
                    color="#F1F5F9"
                    _placeholder={{ color: "#6B7280" }}
                    _focus={{
                      bgColor: "#1E293B",
                      borderColor: "#94A3B8",
                      boxShadow: "0 0 0 1px #94A3B8",
                    }}
                    _hover={{
                      borderColor: "#475569",
                    }}
                  />
                  <Field.ErrorText color="#EF4444">{errors.targetAudience}</Field.ErrorText>
                </Field.Root>

                {/* Additional Project Details (spans 2 columns on large screens) */}
                <Field.Root invalid={!!errors.details} gridColumn={{ base: "1", lg: "1 / -1" }}>
                  <Field.Label color="#F1F5F9" fontWeight="600">
                    Additional Details{" "}
                    <Text as="span" color="#6B7280" fontSize="sm">
                      (optional)
                    </Text>
                  </Field.Label>
                  <Textarea
                    name="details"
                    placeholder="Tell me more about your project, requirements, and vision..."
                    value={formData.details}
                    onChange={handleChange}
                    bgColor="#1E293B"
                    borderColor="#334155"
                    color="#F1F5F9"
                    _placeholder={{ color: "#6B7280" }}
                    _focus={{
                      bgColor: "#1E293B",
                      borderColor: "#94A3B8",
                      boxShadow: "0 0 0 1px #94A3B8",
                    }}
                    _hover={{
                      borderColor: "#475569",
                    }}
                    minH="150px"
                    resize="vertical"
                  />
                  <Field.ErrorText color="#EF4444">{errors.details}</Field.ErrorText>
                </Field.Root>

                {/* Submit Button (spans 2 columns on large screens) */}
                <Box gridColumn={{ base: "1", lg: "1 / -1" }} mt={4}>
                  <Button type="submit" variant="white" size={["md", null, "lg"]} w="full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                </Box>

                {/* Error message for form submission */}
                {errors.submit && (
                  <Box gridColumn={{ base: "1", lg: "1 / -1" }}>
                    <Text color="#EF4444" fontSize="sm">
                      {errors.submit}
                    </Text>
                  </Box>
                )}
              </SimpleGrid>
            </Box>
          </form>
        </Stack>
      </PageSection>
    </PageWrapper>
  );
};

export default HireMePage;
