import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Timeline {
  name: string;
  start_date: string;
  end_date: string;
  estimated_cost: number;
  status: "Planned" | "In Progress" | "Completed";
}

interface TimelineTableProps {
  timelines: Timeline[];
}

export default function TimelineTable({ timelines }: TimelineTableProps) {
  const getStatusColor = (status: Timeline["status"]) => {
    switch (status) {
      case "Planned":
        return "bg-blue-100 text-blue-800";
      case "In Progress":
        return "bg-yellow-100 text-yellow-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>End Date</TableHead>
          <TableHead>Estimated Cost</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {timelines.length > 0 ? (
          timelines.map((timeline, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{timeline.name}</TableCell>
              <TableCell>{timeline.start_date}</TableCell>
              <TableCell>{timeline.end_date}</TableCell>
              <TableCell>${timeline.estimated_cost}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(timeline.status)}>
                  {timeline.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5} className="text-center">
              No Timelines Added Yet
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
