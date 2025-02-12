import { Card, CardBody, Heading, Text, Progress, Flex, Stack, Box } from '@chakra-ui/react'

interface Skill {
  name: string
  level: number
  description: string
}

interface SkillCardProps {
  title: string
  skills: Skill[]
}

export function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <Card
      className="card-hover"
      bg="whiteAlpha.100"
      borderRadius="xl"
    >
      <CardBody>
        <Heading
          size="lg"
          mb={6}
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
        >
          {title}
        </Heading>
        <Stack spacing={6}>
          {skills.map((skill) => (
            <Box key={skill.name}>
              <Flex justify="space-between" align="center" mb={2}>
                <Text fontWeight="medium">{skill.name}</Text>
                <Text fontSize="sm" color="gray.400">{skill.level}%</Text>
              </Flex>
              <Progress
                value={skill.level}
                max={100}
                colorScheme="blue"
                borderRadius="full"
                size="sm"
                mb={2}
              />
              <Text fontSize="sm" color="gray.300">
                {skill.description}
              </Text>
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  )
} 