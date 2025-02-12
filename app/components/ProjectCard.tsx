import { Box, Heading, Text, Button, Flex, Card, CardBody, Image, Stack, Tag } from '@chakra-ui/react'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
  projectUrl?: string
  githubUrl?: string
}

export function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  projectUrl,
  githubUrl
}: ProjectCardProps) {
  return (
    <Card
      className="card-hover"
      bg="whiteAlpha.100"
      borderRadius="xl"
      overflow="hidden"
    >
      <CardBody>
        {imageUrl && (
          <Box mb={4} overflow="hidden" borderRadius="lg">
            <Image
              src={imageUrl}
              alt={title}
              objectFit="cover"
              w="100%"
              h="200px"
              transition="transform 0.3s ease"
              _hover={{ transform: 'scale(1.05)' }}
            />
          </Box>
        )}
        <Stack spacing={4}>
          <Heading size="lg" bgGradient="linear(to-r, blue.400, purple.500)" bgClip="text">
            {title}
          </Heading>
          <Text color="gray.300">{description}</Text>
          
          <Flex gap={2} wrap="wrap">
            {technologies.map((tech) => (
              <Tag
                key={tech}
                colorScheme="blue"
                variant="subtle"
                size="md"
              >
                {tech}
              </Tag>
            ))}
          </Flex>
          
          <Flex gap={4}>
            {projectUrl && (
              <Button
                as="a"
                href={projectUrl}
                target="_blank"
                colorScheme="blue"
                variant="solid"
              >
                Ver Projeto
              </Button>
            )}
            {githubUrl && (
              <Button
                as="a"
                href={githubUrl}
                target="_blank"
                variant="outline"
                leftIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                }
              >
                GitHub
              </Button>
            )}
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  )
} 