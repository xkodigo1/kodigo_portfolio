import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ProjectCard } from "./project-card";

const meta = {
  args: {
    highlights: [
      "Showcases role, outcome, and technical signals in one card.",
      "Supports richer portfolio case studies without changing layout logic.",
    ],
    impact: "Turned a placeholder repository into a strict frontend delivery system.",
    link: "https://github.com/xkodigo1/kodigo_portfolio",
    metrics: ["Next.js 16", "Storybook", "Playwright"],
    role: "Role: full-stack developer",
    summary:
      "A reusable project card designed for portfolio case studies with clear impact framing.",
    title: "Kodigo Portfolio System",
  },
  component: ProjectCard,
  tags: ["autodocs"],
  title: "Sections/ProjectCard",
} satisfies Meta<typeof ProjectCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
