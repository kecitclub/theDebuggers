import api from "@/lib/axios";
import ProjectDetail from "./_components/detail";

const timelines = [
  {
    name: "Project Planning",
    startDate: "2023-09-01",
    endDate: "2023-10-31",
    estimatedCost: 50000,
    status: "Completed",
  },
  {
    name: "Fundraising Campaign",
    startDate: "2023-10-01",
    endDate: "2024-03-31",
    estimatedCost: 100000,
    status: "In Progress",
  },
  {
    name: "Scholarship Distribution",
    startDate: "2024-04-01",
    endDate: "2024-09-30",
    estimatedCost: 150000,
    status: "Planned",
  },
  {
    name: "Monitoring and Evaluation",
    startDate: "2025-04-01",
    endDate: "2025-09-30",
    estimatedCost: 150000,
    status: "Planned",
  },
];

const documents = [
  {
    name: "Project Proposal",
    type: "pdf",
    url: "/documents/project-proposal.pdf",
  },
  {
    name: "Budget Breakdown",
    type: "xlsx",
    url: "/documents/budget-breakdown.xlsx",
  },
  {
    name: "Environmental Impact Assessment",
    type: "pdf",
    url: "/documents/environmental-impact.pdf",
  },
];

const fetchProjectData = async (slug) => {
  const response = await api.get(`/proposals/${slug}`);
  console.log(response.data);
  return response.data.data;
};

export default async function ProjectDetailsPage({ params }) {
  const { slug } = params;
  const projectData = await fetchProjectData(slug);
  return (
    <div className="min-h-screen bg-gray-100">
      <ProjectDetail projectData={projectData} />
    </div>
  );
}
